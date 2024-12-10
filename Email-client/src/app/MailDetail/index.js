import labelValue from "../labelValue";
import createDropDown from "../utils/createDropDown";

function showSingleMailDetailToDom(content, detail, mailDetailId) {
  let rightSection = document.querySelector("#right");
  rightSection.innerHTML = "";
  rightSection.style.display = "flex";

  const menu = createDropDown(mailDetailId);

  rightSection.appendChild(menu);

  const infoContainer = document.createElement("div");
  detail.forEach((item) => {
    const point = labelValue(item?.key, item?.value, item?.email);
    infoContainer.appendChild(point);
  });
  rightSection.appendChild(infoContainer);
  const detailContainer = document.createElement("div");
  detailContainer.innerHTML = content;
  rightSection.appendChild(detailContainer);
}

export default showSingleMailDetailToDom;
