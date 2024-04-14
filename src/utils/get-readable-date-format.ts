export const getReadableDateFormat = (date: Date) => {
  return new Date(date).toLocaleDateString('pl-PL', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
