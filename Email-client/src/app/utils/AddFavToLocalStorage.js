export default function AddFavToLocalStorage(id) {
  const data = JSON.parse(localStorage.getItem("favItem")) || [];
  const isFavId = data?.find((item) => item === id);
  if (isFavId) return;
  data.push(id);
  localStorage.setItem("favItem", JSON.stringify(data));
}
