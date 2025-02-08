export const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("ru").format(new Date(dateString));
};
