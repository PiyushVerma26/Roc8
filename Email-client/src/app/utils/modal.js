import labelValue from "../labelValue";
import createDropDown from "./createDropDown";
import "../../styles/modal.css";

function modal(content, detail, mailDetailId) {
  let parentBox = document.querySelector("#modal");
  parentBox.innerHTML = "";
  parentBox.style.display = "flex";

  // Create the dropdown menu (if any)
  const menu = createDropDown(mailDetailId);

  // Create modal content container
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  // create Inner Div
  const detailDiv = document.createElement("div");
  detailDiv.classList.add("detailDiv");

  // create a Close Button

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-btn");
  closeButton.textContent = "X";

  // Add close button functionality
  closeButton.addEventListener("click", () => {
    parentBox.style.display = "none";
  });

  modalContent.appendChild(closeButton);

  // Create information section dynamically
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("details");
  detail.forEach((item) => {
    const point = labelValue(item?.key, item?.value, item?.email);
    infoContainer.appendChild(point);
  });
  detailDiv.appendChild(menu);

  detailDiv.appendChild(infoContainer);

  // Create detail section for content
  const detailContainer = document.createElement("div");
  detailContainer.classList.add("details");
  detailContainer.innerHTML = content;
  detailDiv.appendChild(detailContainer);

  // Append modal content to the modal container
  modalContent.appendChild(detailDiv);
  parentBox.appendChild(modalContent);

  // Append modal to the right section
}
export default modal;
