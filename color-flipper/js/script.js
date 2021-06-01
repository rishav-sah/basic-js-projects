const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const hexcode = document.querySelector("#hexcode");

//Generating random index number from the array colors
const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += colors[getRandomNumber()];
  }
  //Applying background color to container
  document.querySelector(".container").style.backgroundColor = hexColor;

  hexcode.innerText = hexColor;
  hexcode.style.color = hexColor;
});

// USER INPUT PART

const inputHex = document.querySelector("#inputHex");

// Validating hexcode
const isValidColor = (hex) => hex.match(/^#[a-f0-9]{6}$/i) !== null;

inputBtn.addEventListener("click", () => {
  if (isValidColor(inputHex.value) === true) {
    //Applying background color to container
    document.querySelector(".container").style.backgroundColor = inputHex.value;

    hexcode.innerText = inputHex.value;
    hexcode.style.color = inputHex.value;
  } else {
    window.alert("Invalid HEXCODE");
  }
});
