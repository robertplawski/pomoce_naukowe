const runButton = document.querySelector(".run-function");
const functionResult = document.querySelector(".function-result");

const runSandwich = () => {
  runButton.setAttribute("disabled","");
  const args = []
  for(const select in sandwichData){
    const {options} = sandwichData[select];
    const element = document.querySelector(`.js-${select}-select`);
    const {value} = element;
    args.push({category:select, index:value})
  }
  createSandwich(args);
}

const removeIngredients = () => {
  functionResult.innerHTML = "";
}

const addIngredient = async ({category, index}) => {
  console.log(category,index)
  const ingredient = sandwichData[category].options[index];
  const {image} = ingredient;
  const element = document.createElement("img");
  element.src = image;
  element.classList.add("sandwich-ingredient")
  element.animate(
    [
      {top:"-100%"},
      {top:"0px"}
    ],
    {
      duration:300,
      iterations:1
    }
  )
  functionResult.appendChild(element)
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const createSandwich = async (ingredients) => {
  removeIngredients();
  ingredients.push(ingredients[0]);
  for (const ingredient of ingredients) {
    addIngredient(ingredient);
    await delay(250);
  }
  /*addIngredient("bread",bread);
  await delay(1000);
  addIngredient("extras",extras);
  await delay(1000);
  addIngredient("meat",meat); 
  await delay(1000);
  addIngredient("cheese",cheese);
  await delay(1000);
  addIngredient("sauce",sauce);
  await delay(1000);
  addIngredient("bread",bread);*/
  runButton.removeAttribute("disabled")
}

runButton.addEventListener("click", ()=>runSandwich());


