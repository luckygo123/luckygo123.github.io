const ethereumButton = document.querySelector(".enableEthereumButton");

ethereumButton.addEventListener("click", () => {
  //Will Start the metamask extension
  ethereum.enable();
});
