import storeInstance from "../../DataStore.js/StoreInstance";

import RenderCard from "./RenderCard";

async function DataToShow(pageNumber = 1) {
  const rightSection = document.querySelector("#right");
  rightSection.style.display = "none";
  await storeInstance.getDataFromPageNumber(pageNumber);

  const data = await storeInstance.getStorData();

  RenderCard(data);
}

export default DataToShow;
