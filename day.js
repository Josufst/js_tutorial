// Returns the day of the week for the given date.
function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[date.getDay()];
}

// Returns a greeting for the given date.
function greeting(date) {
			firstName = "Linda"
			lastName = "van Paaschen"
			return(`hello, ${firstName} ${lastName}. Happy ${dayName(now)}! I love you Linda`);
}