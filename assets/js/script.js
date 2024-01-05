// PSEUDOCODE
// The app should:

// Display the current day at the top of the calender when a user opens the planner.

// Present time blocks for standard business hours when the user scrolls down.

// Color - code each time block based on past, present, and future when the time block is viewed.

// Allow a user to enter an event when they click a time block

// Save the event in local storage when the save button is clicked in that time block.

// Persist events between refreshes of a page

// The following animation demonstrates the application functionality:

// Use dayjs to display the current day and date at the top of the calendar
// Use bootstrap to get 3 columns (time, content, save) and 9 rows (8 hours)
// time column will need to use actual time (dayjs)

// Colour coding
// If statement: if hour is later than now (dayjs), green. If hour is same as now, red. If earlier than now, grey. (Is there a way to do this that's if time is past, now, in future?)

// Each hour row within column 'content' will need to be clickable, and the user needs to be able to enter text/delete text/change text. (check how to make block clickable)

// On click of 'save' button: save text content of columns (user input) to local storage. 
// When you reload the page, load up anything that's in local storage. 

// Display current day
const timeDisplay = $('#currentDay')
let time = dayjs().format('dddd DD MMMM YYYY')
timeDisplay.text(time).css('font-weight', 'bold');

