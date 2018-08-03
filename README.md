# Train Scheduler

![Screnshot of project](assets/images/READMEscreenShot.png)

This repo holds all of the directories and files used in the solution for the 7th homework assignment.

This webapp works in conjunction with firebase real time database and moment.js.

Upon the page loading, the user sees a form with values to input and a table housing information previously entered that has been populated from the firebase db.

The information in the table that comes from the firebase has time measurements associated with it, and uses moment.js to format the information to real time data.

When a user enters a new train, the information they entered is formatted by moment.js and is then sent to the database and then pushed from the database to the screen. 