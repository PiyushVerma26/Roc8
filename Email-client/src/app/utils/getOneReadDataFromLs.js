export default function getOneReadItemFromLS(id = "") {
  let isValid = false;
  let data = JSON.parse(localStorage.getItem("readItem")) || [];
  const isReadId = data?.find((item) => item === id);
  if (isReadId) isValid = true;
  return isValid;
}
