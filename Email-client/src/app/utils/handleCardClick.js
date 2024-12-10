import addActiveToDB from "./addActiveToDB";
import setReadDataToLS from "./setReadDataToLS";
import showMailDetail from "./showMailDetail";

function handleCardClick(id, top) {
  addActiveToDB(id);
  setReadDataToLS(id);
  showMailDetail(top);
}

export default handleCardClick;
