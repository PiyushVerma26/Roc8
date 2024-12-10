import Card from "../Card";
import FormatDate from "./dateFormatter";
const leftSection = document.querySelector("#left");
const rightSection = document.querySelector("#right");

function RenderCard(data) {
  leftSection.innerHTML = "";
  rightSection.innerHTML = "";

  data.forEach((item) => {
    const top = [
      {
        key: "From",
        value: item?.from?.name,
        email: item?.from?.email,
      },

      {
        key: "Subject",
        value: item?.subject,
      },
    ];

    const formattedDateTime = FormatDate(item?.date);

    const cardDiv = Card(
      top,
      item?.short_description,
      item.from.name.slice(0, 1),
      formattedDateTime,
      item.id
    );

    leftSection.appendChild(cardDiv);
  });
}

export default RenderCard;
