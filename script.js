const button = document.getElementById("openButton");
const letter = document.getElementById("letter");
const sound = document.getElementById("sound");
const heartsContainer = document.getElementById("hearts");

button.addEventListener("click", () => {
  button.style.display = "none";
  letter.style.display = "block";
  sound.play();

  // Criar corações subindo
  let heartInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 20) + "px";
    heart.innerHTML = "💖";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 300);

  // Parar os corações depois de 10 segundos
  setTimeout(() => {
    clearInterval(heartInterval);
  }, 10000);
});