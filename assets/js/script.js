$(function () {

// Display current date and time using dayjs

const timeDisplay = $('#currentDay')
let time = dayjs().format('dddd DD MMMM YYYY, HH:mm')
timeDisplay.text(time).css('font-weight', 'bold');

// loop to iterate over the hours in the array, and depending on if the hour is later/earlier than the current time, it will assign the relevant class of past, present, future. Identifies which row to add the class to by using each row's id. 

function showColours() {
let hours = [9, 10, 11, 12, 13, 14, 15, 16]
for (let i = 0; i < hours.length; i++) {
    let scheduleTime = dayjs().hour(hours[i]);
    // let row = $(`#${i + 9}-row`);
    let row = $('.row').children('.user-input')

    if (scheduleTime.isSame(time, 'hour')) {
        row.addClass('present');
    } else if (scheduleTime.isAfter(time, 'hour')) {
        row.addClass('future');
    } else {
        row.addClass('past');
    }
}}

// Finds the closest row element of the save button that was clicked. Then finds the text input area of that same row. Saves both these items to local storage.

const saveBtn = $('.saveBtn')

    saveBtn.click(function () {
        let hour = $(this).closest('.row').find('.hour').text();
        let task = $(this).closest('.row').find('.user-input').val();

        localStorage.setItem(hour, task);
    });


// Load up items from local storage upon refreshing/loading the page. For each hour row, get the task value from local storage. Then, find the closest row to the current hour, and find the user-input area. Add the task value to the user input area.

    function loadCalendar() {
        $('.hour').each(function () {
            let currentHour = $(this).text();
            let currentTask = localStorage.getItem(currentHour);

                $(this).closest('.row').find('.user-input').val(currentTask);

        });
    }

    showColours();
    loadCalendar();

})
