const items = Array.from(document.querySelectorAll("img"));
const frame = document.querySelector("iframe");
const modal = document.querySelector(".modal");
const button = document.querySelector(".menu-btn");

const hideModal = () => {
  modal.classList.add("hidden");
  frame.src = "";
};

items.forEach(item =>
  item.addEventListener("click", e => {
    const link = e.target.attributes[1].value;
    frame.src = link;
    modal.classList.remove("hidden");
  })
);

button.addEventListener("click", hideModal);
modal.addEventListener("click", hideModal);
