const eventDays = (days: Record<string, boolean>) => {
  return Object.keys(days)
    .filter((day) => days[day])
    .map(
      (day) =>
        ({
          sunday: 0,
          monday: 1,
          tuesday: 2,
          wednesday: 3,
          thursday: 4,
          friday: 5,
          saturday: 6,
        })[day],
    )
}

export default eventDays
