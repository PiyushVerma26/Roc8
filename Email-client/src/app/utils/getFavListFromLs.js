export default function getFavDataFromLS() {
  let data = JSON.parse(localStorage.getItem("favItem")) || [];
  return data;
}
