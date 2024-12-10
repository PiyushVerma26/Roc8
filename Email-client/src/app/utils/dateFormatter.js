function FormatDate(mailDate) {
  const date = new Date(mailDate);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  const formattedDateTime = `${day}/${month}/${year}  ${hours}:${minutes}`;
  return formattedDateTime;
}
export default FormatDate;
