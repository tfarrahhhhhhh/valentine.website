function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;
    noButton.style.position = "absolute";
    document.getElementsByClassName("image")[0].src = "images/aaa.jpeg";
    document.body.style.backgroundImage = "url('images/blood.jpeg')";
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    document.getElementById("question").textContent =
      "Theres no escape quit the silly goosery and pop the yes button or you'll die";
    document.getElementById("name").style.display = "none";
  }
  if (response === "Yes") {
    
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "ARRRR see you on the 14th pookie bear😘😘";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.body.style.backgroundImage = "url('images/love.jpg')";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";
    document.getElementById("yesButton").remove();
  }
}