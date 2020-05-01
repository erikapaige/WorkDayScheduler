# WorkDayScheduler

This is a work day calendar application. It offers the employee blocks of time, by the hour, for the employee to scheudle meetings. 

If the meeting is in the past the line will highlight as gray. If the meeting is in the future, the cell will highlight as green. Any meetings at the current time will be highlighted in red. 

NOTES FOR OTHER DEVELOPERS
The calendar was built using Bootstrap's grid system.

There are 3 Javascript files that can be found in the 'momentLIb' folder. The names of the three files are: script.js, JQscript.js and Moment.js

script.js is the code in written vanilla javascript. 

JQscript is the code writtine in JQuery. 

Moment.js is a time styling library. It is how the application is trackng the time. The user will not interface with military time, however the code does. Any times after 12PM will use military time (1PM = 13, 2PM =14, 3PM = 15, 4PM = 16, 5PM = 17).

All 3 libraries are liked in the script tags on HTML. If you prefer to use vanilla Javascript over JQuery, make sure you gray out the JQuery source link.


