export default function getReadDataFromLS() {
  let data = JSON.parse(localStorage.getItem("readItem")) || [];
  return data;
}
