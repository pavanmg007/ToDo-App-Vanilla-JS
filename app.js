const addList = document.querySelector("#addlist");
addList.addEventListener("click", () => {
  const popupCard = document.createElement("div");
  const popupCardP = document.createElement("p");
  const popupCardInput = document.createElement("input");
  const popupListAddBtn = document.createElement("a");
  const popupListCloseBtn = document.createElement("a");
  popupCard.className = "card1";
  popupCardP.className = "card-title";
  popupCardP.innerText = "Add New List";
  popupCardInput.setAttribute("type", "text");
  popupCardInput.setAttribute("placeholder", "Enter List Name");
  popupListAddBtn.className = "btn add";
  popupListAddBtn.innerText = "Add";
  popupListAddBtn.setAttribute("id", "add");
  popupListCloseBtn.className = "btn add";
  popupListCloseBtn.innerText = "Delete";
  popupListCloseBtn.setAttribute("id", "delete");
  popupCard.appendChild(popupCardP);
  popupCard.appendChild(popupCardInput);
  popupCard.appendChild(popupListAddBtn);
  popupCard.appendChild(popupListCloseBtn);
  document.body.appendChild(popupCard);
  document.querySelector("section").classList.add("blur");
  popupListAddBtn.addEventListener("click", () => {
    const listCard = document.createElement("div");
    const listCardTitle = document.createElement("p");
    listCard.className = "card";
    listCardTitle.className = "card-title title-border inside-space";
    if (popupCardInput.value == "") {
      popupCardInput.classList.add("error");
      setTimeout(function () {
        popupCardInput.classList.remove("error");
      }, 1000);
    } else {
      listCardTitle.innerText = popupCardInput.value;
      listCard.appendChild(listCardTitle);
      document.querySelector(".tasks").appendChild(listCard);
      toggle();
    }
    const addTask = document.createElement("i");
    addTask.className = "ab ab1 fa-solid fa-circle-plus";
    const deleteTask = document.createElement("i");
    deleteTask.className = "ab fa-solid fa-trash-can";
    listCard.appendChild(addTask);
    listCard.appendChild(deleteTask);
    addTask.addEventListener("click", () => {
      const popupCard = document.createElement("div");
      const popupCardP = document.createElement("p");
      const popupCardInput = document.createElement("input");
      const popupTaskAddBtn = document.createElement("a");
      const popupTaskCloseBtn = document.createElement("a");
      popupCard.className = "card1";
      popupCardP.className = "card-title";
      popupCardP.innerText = "Add New Task";
      popupCardInput.setAttribute("type", "text");
      popupCardInput.setAttribute("placeholder", "Enter List Name");
      popupTaskAddBtn.className = "btn add";
      popupTaskAddBtn.innerText = "Add";
      popupTaskAddBtn.setAttribute("id", "add");
      popupTaskCloseBtn.className = "btn add";
      popupTaskCloseBtn.innerText = "Delete";
      popupTaskCloseBtn.setAttribute("id", "delete");
      popupCard.appendChild(popupCardP);
      popupCard.appendChild(popupCardInput);
      popupCard.appendChild(popupTaskAddBtn);
      popupCard.appendChild(popupTaskCloseBtn);
      document.body.appendChild(popupCard);
      document.querySelector("section").classList.add("blur");
      popupTaskAddBtn.addEventListener("click", () => {
        if (popupCardInput.value == "") {
          popupCardInput.classList.add("error");
          setTimeout(function () {
            popupCardInput.classList.remove("error");
          }, 1000);
        } else {
          const emptyDiv = document.createElement("div");
          emptyDiv.className = "single-task";
          const taskCheckBox = document.createElement("input");
          taskCheckBox.setAttribute("type", "checkbox");
          const taskName = document.createElement("label");
          taskName.textContent = popupCardInput.value;
          emptyDiv.appendChild(taskCheckBox);
          emptyDiv.appendChild(taskName);
          listCard.appendChild(emptyDiv);
          toggle();
          taskCheckBox.addEventListener("click", () => {
            if (taskCheckBox.checked) {
              taskName.setAttribute(
                "style",
                "color: red;text-decoration: line-through #ff0000 solid 3px;"
              );
              taskCheckBox.setAttribute("style", "display:none;");
            }
          });
        }
      });
      popupTaskCloseBtn.addEventListener("click", toggle);
    });
    deleteTask.addEventListener("click", () => {
      document.querySelector(".tasks").removeChild(listCard);
    });
  });
  popupListCloseBtn.addEventListener("click", toggle);
  function toggle() {
    document.querySelector("section").classList.remove("blur");
    document.querySelector(".card1").remove();
  }
});
