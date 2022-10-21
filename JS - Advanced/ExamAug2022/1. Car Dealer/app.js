window.addEventListener("load", solve);

function solve() {
  let make = document.getElementById('make');
  let model = document.getElementById('model');
  let year = document.getElementById('year');
  let fuel = document.getElementById('fuel');
  let price = document.getElementById("original-cost");
  let sellingPrice = document.getElementById("selling-price");
  let publishBtn = document.getElementById("publish");
  let profit = 0;
  publishBtn.addEventListener('click', publish);
  function publish(e){
    e.preventDefault();
    if(!make.value || !model.value ||!year.value || !fuel.value ||!price.value ||!sellingPrice.value ||sellingPrice.value < price.value) {
      return;
    }
    let tableId = document.getElementById("table-body");
    let row = document.createElement('tr');
    row.classList.add("row");
    row.innerHTML = `<td>${make.value}</td>
    <td>${model.value}</td>
    <td>${year.value}</td>
    <td>${fuel.value}</td>
    <td>${price.value}</td>
    <td>${sellingPrice.value}</td>
    <td>
    <button class = "action-btn edit">Edit</button>
    <button class = "action-btn sell">Sell</button>
    </td>`;
    tableId.appendChild(row);
    tableId.querySelectorAll('button')[0].addEventListener('click', edit);
    tableId.querySelectorAll('button')[1].addEventListener('click', sellF);
    make.value = '';
    model.value = '';
    year.value = '';
    fuel.value = '';
    price.value = '';
    sellingPrice.value = '';
    
  }
  function edit(event){
    let currentrow = event.target.parentElement.parentElement;
    make.value = currentrow.children[0].textContent;
    model.value = currentrow.children[1].textContent;
    year.value = currentrow.children[2].textContent;
    fuel.value = currentrow.children[3].textContent;
    price.value = currentrow.children[4].textContent;
    sellingPrice.value = currentrow.children[5].textContent;
    currentrow.remove();
  }
  function sellF(event){
    let currentrow = event.target.parentElement.parentElement;
    let li = document.createElement('li');
    let currentProfit = currentrow.children[5].textContent - currentrow.children[4].textContent;
    profit+=currentProfit;
    li.classList.add("each-list");
    li.innerHTML = `<span>${currentrow.children[0].textContent} ${currentrow.children[1].textContent}</span>
    <span>${currentrow.children[2].textContent}</span>
    <span>${currentProfit}</span>`;
    document.getElementById('cars-list').appendChild(li);
    currentrow.remove();
    document.getElementById('profit').textContent = profit.toFixed(2);
  }
}
