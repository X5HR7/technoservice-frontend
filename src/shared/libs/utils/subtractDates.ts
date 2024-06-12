export const subtractDates = (dateStart: Date, dateEnd: Date) => {
  const date1 = new Date(dateStart);
  const date2 = new Date(dateEnd);
  // @ts-ignore
  const diffDays = (date2 - date1) / (1000 * 60 * 60 * 24);

  return diffDays;
}
