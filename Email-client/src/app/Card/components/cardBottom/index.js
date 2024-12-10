import "./index.css";
function cardBottom(date, isFavorites, bgColor = "") {
  const bottomDiv = document.createElement("div");
  bottomDiv.style.backgroundColor = bgColor;
  bottomDiv.classList.add("bottomDiv");

  const pDate = document.createElement("p");
  pDate.style.backgroundColor = bgColor;

  const textNode = document.createTextNode(date);
  pDate.appendChild(textNode);

  bottomDiv.appendChild(pDate);

  if (isFavorites) {
    const fav = document.createElement("p");
    fav.style.backgroundColor = bgColor;

    fav.classList.add("favItem");
    const favTextNode = document.createTextNode("Favorite");

    fav.appendChild(favTextNode);
    bottomDiv.appendChild(fav);
  }

  return bottomDiv;
}

export default cardBottom;
