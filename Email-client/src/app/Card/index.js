import "../../styles/card.css";
import labelValue from "../labelValue";
import getOneFavItemFromLS from "../utils/getOneFavItemFromLS";
import getOneReadItemFromLS from "../utils/getOneReadDataFromLs";
import handleCardClick from "../utils/handleCardClick";
import cardBottom from "./components/cardBottom";
import cardMessage from "./components/Message";

function Card(top, short_description, leftText, date, id) {
  let bgColor = "";
  const isRead = getOneReadItemFromLS(id);
  isRead ? (bgColor = "#F2F2F2") : (bgColor = "white");
  // Creates A Card
  const mailCard = document.createElement("section");
  mailCard.classList.add("mailCard");
  mailCard.style.backgroundColor = bgColor;
  mailCard.setAttribute("id", id);

  // leftSide OF Card
  const leftName = document.createElement("div");
  leftName.classList.add("leftName");
  leftName.textContent = leftText;

  //  appending the left side of the card
  mailCard.appendChild(leftName);

  // Right Side Of Card
  const cardDetail = document.createElement("div");
  cardDetail.classList.add("cardDetail");
  cardDetail.style.backgroundColor = bgColor;

  // Right top Of Card
  const infoDiv = document.createElement("div");
  infoDiv.style.backgroundColor = bgColor;

  // key Value of Card
  top &&
    top.forEach((item) => {
      const point = labelValue(item?.key, item?.value, item?.email, bgColor);
      infoDiv.appendChild(point);
    });

  cardDetail.appendChild(infoDiv);

  const message = cardMessage(short_description, bgColor);

  // Appending the message to the right portion of the card
  cardDetail.appendChild(message);

  const isFav = getOneFavItemFromLS(id);

  const BottomSection = cardBottom(date, isFav, bgColor);

  // Adding Bottom Section in Right
  cardDetail.appendChild(BottomSection);

  // Appending the right side of card in card
  mailCard.appendChild(cardDetail);

  mailCard.addEventListener("click", (event) => {
    event.preventDefault();
    handleCardClick(id, top);
  });

  return mailCard;
}

export default Card;
