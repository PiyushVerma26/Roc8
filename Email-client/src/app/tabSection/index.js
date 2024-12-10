import "../../styles/tab.css";
import AddPages from "../utils/AddPaginatipn";
import FilterDataToShow from "../utils/FilterDataTOshow";
import DataToShow from "../utils/getDataToShow";

const tabSection = document.querySelector("#tab");
const buttonItem = [
  { name: "All" },
  { name: "Unread" },
  { name: "Read" },
  { name: "Favorites" },
];

let activeIndex = 0;
function createButton(text, index) {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add("tabBtn");

  button.addEventListener("click", () => {
    activeIndex = index;
    const queryParam = `?check=${text.toLowerCase()}`;
    window.history.pushState(null, "", queryParam);
    checkActiveBtn();
    switch (text) {
      case "Read":
        FilterDataToShow("read");
        break;
      case "Unread":
        FilterDataToShow("unread");
        break;
      case "Favorites":
        FilterDataToShow("fav");
        break;

      default:
        AddPages();
        DataToShow(1);
        break;
    }
  });

  return button;
}

buttonItem.forEach((item, index) => {
  const Button = createButton(item.name, index);
  tabSection.appendChild(Button);
});

function checkActiveBtn() {
  const tabBtns = document.querySelectorAll(".tabBtn");
  tabBtns.forEach((item, index) => {
    if (activeIndex === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

checkActiveBtn();
