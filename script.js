// Dodawanie zdolności
function addAbility() {
  let name = document.getElementById("newAbilityName").value;
  let value = document.getElementById("newAbilityValue").value;

  if (name.trim() !== "" && value.trim() !== "") {
    let ul = document.getElementById("abilities");
    let li = document.createElement("li");
    li.innerHTML = `<span contenteditable="true">${name}</span>: 
                        <span contenteditable="true">${value}</span> 
                        <button onclick="removeAbility(this)">Usuń</button>`;
    ul.appendChild(li);

    document.getElementById("newAbilityName").value = "";
    document.getElementById("newAbilityValue").value = "";

    saveData();
  }
}

// Usuwanie zdolności
function removeAbility(button) {
  button.parentElement.remove();
  saveData();
}

// Dodawanie przedmiotu do ekwipunku
function addItem() {
  let newItem = document.getElementById("newItem").value;
  if (newItem.trim() !== "") {
    let ul = document.getElementById("inventory");
    let li = document.createElement("li");
    li.innerHTML =
      newItem + ' <button onclick="removeItem(this)">Usuń</button>';
    ul.appendChild(li);
    document.getElementById("newItem").value = "";
    saveData();
  }
}

// Usuwanie przedmiotu z ekwipunku
function removeItem(button) {
  button.parentElement.remove();
  saveData();
}

// Automatyczne zapisywanie danych
function saveData() {
  localStorage.setItem("charData", document.body.innerHTML);
}

// Wczytywanie danych przy starcie
window.onload = function () {
  if (localStorage.getItem("charData")) {
    document.body.innerHTML = localStorage.getItem("charData");
  }
};
