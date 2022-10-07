function solve() {
  let generate = document.getElementsByTagName('button')[0];
  let outputTable = document.querySelector('tbody');

  generate.addEventListener('click', () => {

    let input = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    for(let furniture of input) {
      let newRow = document.createElement('tr');
      outputTable.appendChild(newRow);

      let image = document.createElement('img');
      image.setAttribute('src', furniture.img);
      let imageCell = document.createElement('td')
      imageCell.appendChild(image);

      let nameCell = document.createElement('td')
      nameCell.textContent = furniture.name;

      let priceCell = document.createElement('td')
      priceCell.textContent = furniture.price;

      let factorCell = document.createElement('td')
      factorCell.textContent = furniture.decFactor;

      let markCell = document.createElement('td');
      markCell.innerHTML = '<input type="checkbox"/>'

      newRow.appendChild(imageCell);
      newRow.appendChild(nameCell);
      newRow.appendChild(priceCell);
      newRow.appendChild(factorCell);
      newRow.appendChild(markCell);
    }
  })


  let buy = document.getElementsByTagName('button')[1];
  buy.addEventListener('click', () => {
    let outputRows = outputTable.getElementsByTagName('tr');
    let bought = [];
    let boughtSum = 0;
    let sumFac = 0;
    let counter = 0;
    let avFac = 0;
    for(let row of outputRows) {
      if(row.getElementsByTagName('td')[4].children[0].checked) {
        bought.push(row.children[1].textContent);
        boughtSum += +row.children[2].textContent;
        sumFac += +row.children[3].textContent;
        counter++;
      }
    }
    avFac = sumFac / counter;
    let output = document.getElementsByTagName('textarea')[1];
    output.value += `Bought furniture: ${bought.join(', ')}` + '\n';
    output.value += `Total price: ${boughtSum.toFixed(2)}` + '\n';
    output.value += `Average decoration factor: ${avFac}`;
  })
  // let buttons = document.getElementsByTagName("button");
  // buttons[0].addEventListener('click', generate);
  // buttons[1].addEventListener('click', buy);
  // let tableBody = document.getElementsByTagName("tbody")[0];
  // function generate(){
  //   let items = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    
  //   for(let item of items){
  //     let tableRow = document.createElement("tr");
  //     tableRow.innerHTML = `<td>
  //     <img src=${item.img}>
  //     </td>
  //     <td>
  //       <p>${item.name}</p>
  //     </td>
  //     <td>
  //       <p>${item.price}</p>
  //     </td>
  //     <td>
  //       <p>${item.decFactor}</p>
  //     </td>
  //     <td>
  //       <input type="checkbox" />
  //     </td>`;
  //     tableBody.appendChild(tableRow);
  //   }
  // }
  // function buy(){
  //   let tableRow = tableBody.getElementsByTagName("tr");
  //   let bought = [];
  //   let sum = 0;
  //   let factorSum = 0;
  //   let counter=0;
  //   for(let el of tableRow){
  //     if(el.getElementsByTagName('td')[4].children[0].checked){
  //       bought.push(el.children[1].textContent);
  //       console.log(el.children[1].textContent);
  //       sum+= Number(el.children[2].textContent);
  //       factorSum+=Number(el.children[3].textContent);
  //       counter++;
  //     }
  //   }
  //   let avgFactor = factorSum/counter;
  //   let avgSum = sum/counter;
  //   let output = document.getElementsByTagName("textarea")[1];
  //   output.value += `Bought furniture: ${bought.join(", ")}`;
  //   output.value += `Total price: ${avgSum.toFixed(2)}`+"\n";
  //   output.value += `Average decoration factor: ${avgFactor}`;
  //   console.log(bought);
  // }
}