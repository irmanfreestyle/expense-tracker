import moment from "moment";

export const randomId = function(length = 6): string {
  return Math.random().toString(36).substring(2, length+2);
};

export const toDate = (date: string) => {
  return moment(date).format('DD MMMM YYYY');
}

export const toIDR = (value: number) => {
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  });

  return formatter.format(value);
}