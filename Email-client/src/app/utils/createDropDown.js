import AddFavToLocalStorage from "./AddFavToLocalStorage";
import getOneFavItemFromLS from "./getOneFavItemFromLS";

const listItem = [{ value: "Mark as Favorites", id: "fav" }];

function createDropDown(mailId = "") {
  let isDropDown = false;

  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");

  const icon = document.createElement("p");
  icon.setAttribute("id", "icon");
  icon.style.fontSize = "20px";
  icon.style.fontWeight = "bold";
  const textNode = document.createTextNode("≡");
  icon.appendChild(textNode);

  menu.appendChild(icon);

  const ul = document.createElement("ul");
  ul.setAttribute("id", "dropDown");

  listItem.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("listItem");
    let textNode = document.createTextNode(item.value);
    if (item.value === "Mark as Favorites") {
      const isValid = getOneFavItemFromLS(mailId);
      textNode = document.createTextNode(
        isValid ? "Added In Favorites " : item.value
      );

      if (isValid) {
        li.style.pointerEvents = "none";
        li.style.opacity = 0.7;
      }
    } else {
      textNode = document.createTextNode(item.value);
    }

    li.setAttribute("id", item.id);
    li.appendChild(textNode);
    ul.appendChild(li);
  });

  menu.appendChild(ul);
  // showing DropDOwn
  icon.addEventListener("click", (event) => {
    event.stopPropagation();

    isDropDown = !isDropDown;
    ul.style.display = isDropDown ? "block" : "none";
  });

  //   Closing DropDown Oustide the Click
  document.addEventListener("click", (event) => {
    if (!ul.contains(event.target) && event.target !== icon) {
      isDropDown = false;
      ul.style.display = "none";
    }
  });

  // Marking Item As Fav
  ul.addEventListener("click", (e) => {
    const listId = e.target.id;
    const listItem = document.getElementById(listId);
    listItem.textContent = "Added To Favorites";
    listItem.style.pointerEvents = "none";
    listItem.style.opacity = 0.5;
    if (listId === "fav") {
      AddFavToLocalStorage(mailId);
    }
  });

  return menu;
}
export default createDropDown;
