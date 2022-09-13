const format = require(`date-fns/format`);

const now = format(new Date(), `PPPP`);

const displayDate = $(`#displayDate`);
// date = new Date();

$(displayDate).text(now);
