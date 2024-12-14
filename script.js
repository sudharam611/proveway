const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  const radioButton = box.querySelector(".radio");
  const tableContainer = box.querySelector(".table-container");

  box.addEventListener("click", () => {
    boxes.forEach((otherBox) => {
      const otherRadioButton = otherBox.querySelector(".radio");
      const otherTableContainer = otherBox.querySelector(".table-container");
      otherRadioButton.checked = false;
      otherTableContainer.classList.remove("show");
      otherBox.classList.remove("change-bg");
    });
    radioButton.checked = true;
    tableContainer.classList.toggle("show");
    box.classList.toggle("change-bg");
  });
});
