Strava Code Test <br>
Step 1:<br>
Create a page in any front-end language - could be React JS with the button
"Connect to Strava" Once it is clicked, it needs to authorize the user to connect
the Strava. Create an account in Strava to get the details in the My Strava
application section. <br>
https://developers.strava.com/docs/authentication/ <br>
Step 2:<br>
Get all the activities from Strava in a calendar. By default, there will not be any
activity and this condition needs to be handled by Node & EJS. To add an
activity, you can complete an activity in Strava ( Strava app: 
https://play.google.com/store/apps/details?id=com.strava&hl=en&gl=US), and
then in the second form, it should show the calendar with the synced data -
Strava Code Test 2<br>
keep an option to manually sync too. Here is the list of activities Strava
supports: https://support.strava.com/hc/en-us/articles/216919407-SupportedSport-Types-on-Strava
Note, that the activities of only the person logged in should be seen. Present
the data better.  <br>
Step 3: If you edit the activity from the panel, it should able to reflect on the
strava app.<br>
