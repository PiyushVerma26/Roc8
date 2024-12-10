import "../../styles/labelValue.css";
function labelValue(lableText, nameText, emailText, bgColor = "") {
  // Create a Parent Div
  const div = document.createElement("div");
  div.classList.add("labelValue");
  div.style.backgroundColor = bgColor;
  // creating a Key Element and adding in the dom
  const labelElement = document.createElement("p");
  labelElement.classList.add("key");
  labelElement.style.backgroundColor = bgColor;
  const labeLTextNode = document.createTextNode(lableText + ": ");
  labelElement.appendChild(labeLTextNode);

  // creating a value Element and adding in the dom
  const valueElement = document.createElement("div");
  valueElement.style.backgroundColor = bgColor;
  valueElement.classList.add("emailandName");
  // creating a nameValueElement
  const nameValueElement = document.createElement("p");
  nameValueElement.style.backgroundColor = bgColor;
  nameValueElement.classList.add("value");
  const nameValueText = document.createTextNode(nameText);
  nameValueElement.appendChild(nameValueText);
  valueElement.appendChild(nameValueElement);

  // creating a emailValueElement
  if (emailText) {
    const emailValueElement = document.createElement("p");
    emailValueElement.style.backgroundColor = bgColor;
    emailValueElement.classList.add("value");
    const emailValueText = document.createTextNode("<" + emailText + ">");
    emailValueElement.appendChild(emailValueText);
    valueElement.appendChild(emailValueElement);
  }

  div.appendChild(labelElement);
  div.appendChild(valueElement);
  return div;
}

export default labelValue;
