function shuffleArray(array) {
  const shuffledArray = array.slice();

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

for(const select in sandwichData){
  const {options} = sandwichData[select];
  const element = document.querySelector(`.js-${select}-select`);

  options.forEach((option, index) => {
    const optionElement = document.createElement("option");
    optionElement.innerHTML = option.name;
    optionElement.value = index;
    element.appendChild(optionElement);
  });
}
