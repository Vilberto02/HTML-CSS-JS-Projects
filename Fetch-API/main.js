const sendBtn = document.getElementById("send-btn");
const infoBox = document.querySelector(".info");
const nameInput = document.getElementById("name-input");
const usernameInput = document.getElementById("username-input");
const ageInput = document.getElementById("age-input");
const activeInput = document.getElementById("active-input");
const apiURL = "http://127.0.0.1:8000/adi/Designer/";

let user = [];

sendBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  let info = {
    name: nameInput.value,
    username: usernameInput.value,
    age: ageInput.value,
    is_active: activeInput.checked,
  };
  user.push(info);
  console.log(user);
  nameInput.value = "";
  usernameInput.value = "";
  ageInput.value = "";

  await postData(info);
});

const postData = async (info) => {
  try {
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      const { name, username, age, is_active } = jsonResponse;
      console.log(jsonResponse);
      infoBox.innerHTML = `
        <li>Datos enviados correctamente</li>
        <li>${name}</li>
        <li>${username}</li>
        <li>${age}</li>
        <li>${is_active}</li>
      `;
    }
  } catch (error) {
    console.error("Error: ", error);
  }
};
