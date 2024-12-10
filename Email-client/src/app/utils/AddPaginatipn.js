import storeInstance from "../../DataStore.js/StoreInstance";
import DataToShow from "./getDataToShow";

export default async function AddPages() {
  let activePage = 0;
  const paginationSection = document.querySelector("#pagination");
  const { length } = await storeInstance.getAllData();
  const itemPerPage = 10;
  const pageLength = Math.ceil(length / itemPerPage);

  for (let i = 0; i < pageLength; i++) {
    const button = document.createElement("button");
    button.classList.add("pageNumberBtn");
    button.textContent = i + 1;
    paginationSection.appendChild(button);

    if (i === activePage) {
      button.style.backgroundColor = "black";
      button.style.color = "white";
    } else {
      button.style.backgroundColor = "white";
      button.style.color = "black";
    }

    button.addEventListener("click", () => {
      activePage = i;

      const allButtons = document.querySelectorAll(".pageNumberBtn");
      allButtons.forEach((btn, index) => {
        if (index === activePage) {
          btn.style.backgroundColor = "black";
          btn.style.color = "white";
        } else {
          btn.style.backgroundColor = "white";
          btn.style.color = "black";
        }
      });
      DataToShow(i + 1, false);
      storeInstance.getDataFromPageNumber(i + 1);
    });
  }
}
