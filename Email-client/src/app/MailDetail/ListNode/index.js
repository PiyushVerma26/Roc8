function createListNode(text) {
  const li = document.createElement("li");
  li.style.listStyle = "none";
  const textNode = document.createTextNode(text);
  li.appendChild(textNode);

  return li;
}

export default createListNode;
