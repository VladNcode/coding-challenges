function sortDays() {
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date();
  const currentDayOfWeek = date.getDay() + 2;
  console.log(currentDayOfWeek);

  const out = [...daysOfWeek.slice(currentDayOfWeek, 7), ...daysOfWeek.slice(0, currentDayOfWeek)];
  console.log(out);
}

sortDays();
