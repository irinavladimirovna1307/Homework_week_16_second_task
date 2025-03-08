const models = {
  Reno: ["Logan", "Sandero", "Duster"],
  Opel: ["Astra", "Insignia", "Mokka"],
  Mazda: ["Mazda3", "Mazda6", "CX-5"],
  Jaguar: ["XE", "XF", "F-Pace"],
};

document.getElementById("brand").addEventListener("change", updateModels);
document.querySelectorAll("input[name='condition']").forEach((radio) => {
  radio.addEventListener("change", toggleOwnersField);
});

function updateModels() {
  let brand = document.getElementById("brand").value;
  let modelSelect = document.getElementById("model");
  modelSelect.innerHTML = "";
  models[brand].forEach((model) => {
    let option = document.createElement("option");
    option.value = model;
    option.textContent = model;
    modelSelect.appendChild(option);
  });
}

function toggleOwnersField() {
  let usedCar =
    document.querySelector("input[name='condition']:checked").value === "used";
  document.getElementById("owners-group").style.display = usedCar
    ? "block"
    : "none";
}

function calculatePrice() {
  let basePrice = 10000;
  let brand = document.getElementById("brand").value;
  let model = document.getElementById("model").value;
  let fuel = document.querySelector("input[name='fuel']:checked").value;
  let engine = parseFloat(document.getElementById("engine").value);
  let condition = document.querySelector(
    "input[name='condition']:checked"
  ).value;
  let owners = document.querySelector("input[name='owners']:checked")?.value;

  let price = basePrice + engine * 1000;
  if (fuel === "Дизель") price += 2000;
  if (fuel === "Электричество") price += 5000;
  if (condition === "used") price -= 3000;
  if (owners === "3+") price -= 2000;

  document.getElementById("price").textContent = "Цена: " + price + "$";
}

updateModels();
