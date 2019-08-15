export default {
  getCurrentTimeByTimezone: offset => {
    const d = new Date();
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    const nd = new Date(utc + 3600000 * offset);

    return nd;
  },
};
