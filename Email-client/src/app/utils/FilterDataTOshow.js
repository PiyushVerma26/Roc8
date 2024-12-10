import storeInstance from "../../DataStore.js/StoreInstance";
import getFavDataFromLS from "./getFavListFromLs";
import getReadDataFromLS from "./getReadDataFromLS";
import RenderCard from "./RenderCard";

async function FilterDataToShow(filterType) {
  const rightSection = document.querySelector("#right");
  rightSection.style.display = "none";
  await storeInstance.getAllData();
  const data = await storeInstance.getStorData();
  const pagination = document.querySelector("#pagination");
  pagination.innerHTML = "";
  let checkId = [];
  if (filterType === "read") {
    checkId = getReadDataFromLS();
    console.log(checkId);
  }

  if (filterType === "fav") {
    console.log("run");
    checkId = getFavDataFromLS();
    console.log(checkId);
  }

  const filteredData = data.filter((item) => {
    const tempData = getReadDataFromLS();
    if (filterType === "unread") {
      return !tempData.includes(item.id);
    }
    return checkId.includes(item.id);
  });
  console.log(filteredData);
  RenderCard(filteredData);
}

export default FilterDataToShow;
