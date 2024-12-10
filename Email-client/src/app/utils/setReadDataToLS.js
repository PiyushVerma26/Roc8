export default function setReadDataToLS(id) {
  const data = JSON.parse(localStorage.getItem("readItem")) || [];
  const isRead = data?.find((item) => item === id);
  if (isRead) return;
  data.push(id);
  localStorage.setItem("readItem", JSON.stringify(data));
}
