export function formatDate(dateStr) {
  if (!dateStr) return "";

  const parts = dateStr.split("-");
  const year = parts[0];
  const month = parts[1];
  const day = parts[2];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (!month) return year; // only year

  if (!day) return `${months[Number(month) - 1]} ${year}`; // month + year

  return `${months[Number(month) - 1]} ${Number(day)}, ${year}`;
}
