import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const StravaAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activities, setActivities] = useState([]);
  const [token, setToken] = useState(null);
  const [newName, setNewName] = useState('');

  const clientId = '131527';
  const clientSecret = '36150d863b71906555d30cbf5220459d81636805';
  const redirectUri = 'http://localhost:3000';

  const handleAuthClick = () => {
    window.location = `https://www.strava.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=read,activity:read_all`;
  };

  const handleCallback = useCallback(async (code) => {
    try {
      const response = await axios.post('https://www.strava.com/oauth/token', {
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
        grant_type: 'authorization_code',
      });

      const accessToken = response.data.access_token;
      setToken(accessToken);
      setIsAuthenticated(true);
      fetchActivities(accessToken);
    } catch (error) {
      console.error('Error fetching token:', error);
    }
  }, [clientId, clientSecret]);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      handleCallback(code);
    }
  }, [handleCallback]);

  const fetchActivities = async (accessToken) => {
    try {
      const response = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setActivities(response.data);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  const editActivity = async (activityId, updatedData) => {
    try {
      await axios.put(`https://www.strava.com/api/v3/activities/${activityId}`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchActivities(token);
    } catch (error) {
      console.error('Error editing activity:', error);
    }
  };

  return (
    <div>
      <h1>Strava Auth</h1>
      {!isAuthenticated ? (
        <button onClick={handleAuthClick}>Connect to Strava</button>
      ) : (
        <div>
          <h1>Activities</h1>
          <Calendar
            tileContent={({ date, view }) => {
              if (view === 'month') {
                const activityDates = activities.map((activity) => new Date(activity.start_date).toDateString());
                if (activityDates.includes(date.toDateString())) {
                  return <span className="activity-dot" />;
                }
              }
            }}
          />
          <button onClick={() => fetchActivities(token)}>Sync Activities</button>
          <ul>
            {activities.length === 0 ? (
              <li>No activities found</li>
            ) : (
              activities.map((activity) => (
                <li key={activity.id}>
                  {activity.name}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      editActivity(activity.id, { name: newName });
                    }}
                  >
                    <input
                      type="text"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                    <button type="submit">Edit Activity</button>
                  </form>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StravaAuth;
