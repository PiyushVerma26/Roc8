function clearActiveFromDB() {
  const rightSection = document.querySelector("#right");
  rightSection.style.display = "none";

  localStorage.setItem("activeIndex", "");
}

export default clearActiveFromDB;
