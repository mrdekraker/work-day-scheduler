// Set up date-fns/format
const format = require(`date-fns/format`);

$(document).ready(() => {
  // Format using Date-fns
  const currentHour = format(new Date(), `k`);
  parseInt($(currentHour));
  const now = format(new Date(), `PPPP`);
  const displayDate = $(`#displayDate`);
  $(displayDate).text(now);

  // CLEARS VALUES FROM SCHEUDLE
  $(`#resetBtn`).click((e) => {
    e.preventDefault();
    $(`.saveBtn`).removeClass(`saved`);
    $(`textarea`).val(``);
    localStorage.clear();
  });

  // compares currentHour to the time slot
  $(`.time`).each(function () {
    const time = $(this).attr(`id`);
    // console.log(typeof parseInt(time));
    parseInt(time);

    if (parseInt(currentHour) === parseInt(time)) {
      $(this).addClass(`present`);
    } else if (parseInt(currentHour) < parseInt(time)) {
      $(this).removeClass(`present`);
      $(this).addClass(`future`);
    } else if (parseInt(currentHour) > parseInt(time)) {
      $(this).removeClass(`future`);
      $(this).addClass(`past`);
    }
  });

  // Grabs values textarea and stores it
  $('.saveBtn').click(function (e) {
    const input = $(this).siblings('.scheduleText').val();
    const hour = $(this).parent().attr('id');
    if (input) {
      $(this).addClass(`saved`);
    }

    $(`.scheduleText`).keyup(function (e) {
      const keyChange = $(this).siblings(`.saveBtn`);
      $(keyChange).removeClass(`saved`);
    });
    localStorage.setItem(hour, input);
  });

  // Get info from local storage
  $(`#hour9 .scheduleText`).val(localStorage.getItem(`hour9`));
  $(`#hour10 .scheduleText`).val(localStorage.getItem(`hour10`));
  $(`#hour11 .scheduleText`).val(localStorage.getItem(`hour11`));
  $(`#hour12 .scheduleText`).val(localStorage.getItem(`hour12`));
  $(`#hour13 .scheduleText`).val(localStorage.getItem(`hour13`));
  $(`#hour14 .scheduleText`).val(localStorage.getItem(`hour14`));
  $(`#hour15 .scheduleText`).val(localStorage.getItem(`hour15`));
  $(`#hour16 .scheduleText`).val(localStorage.getItem(`hour16`));
  $(`#hour17 .scheduleText`).val(localStorage.getItem(`hour17`));
});
