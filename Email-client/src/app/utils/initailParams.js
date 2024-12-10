function initialSetParams() {
  const queryParam = `?check=all`;
  window.history.pushState(null, "", queryParam);
}
export default initialSetParams;
