function cardMessage(message, bgColor = "") {
  const p = document.createElement("p");
  p.style.backgroundColor = bgColor;

  p.classList.add("shortMessage");
  const textNode = document.createTextNode(message);
  p.appendChild(textNode);

  return p;
}

export default cardMessage;
