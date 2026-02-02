const hearts = document.querySelectorAll(".heart");
const messageBox = document.getElementById("message-box");

const today = new Date();
const dayOfMonth = today.getDate();
const month = today.getMonth(); // February = 1

hearts.forEach(heart => {
  const day = Number(heart.dataset.day);

  // Only unlock in February
  if (month === 1 && day <= dayOfMonth) {
    heart.classList.remove("locked");

    heart.addEventListener("click", () => {
      messageBox.textContent = heart.dataset.message;
    });
  }
});

