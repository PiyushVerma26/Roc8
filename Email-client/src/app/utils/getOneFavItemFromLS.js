export default function getOneFavItemFromLS(id = "") {
  let isValid = false;
  let data = JSON.parse(localStorage.getItem("favItem")) || [];
  const isFavId = data?.find((item) => item === id);
  if (isFavId) isValid = true;
  return isValid;
}
