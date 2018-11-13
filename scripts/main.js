
//fetches data from the database
fetch("http://localhost:8088/food/")
  .then(foods =>  foods.json())
  .then(parsedFoods => {
    buildDomComponent(parsedFoods)
  })

  buildDomComponent = (foodArr) => {
   foodArr.forEach((food) => {
     let domString =
     `<div id="${food.id}" class="food-item">
     <h1>${food.name}</h1>
     <p>${food.type}</p>
     <p>${food.ethnicity}</p>
     </div>`
     renderToDom(domString)
   })
  }

  renderToDom = (domComponent) => {
    const container = document.querySelector("#container")
    container.appendChild(domComponent)
  }
  