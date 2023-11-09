// var newRow = table.insertRow(table.rowslength);
// var newCell1 = newRow.insertCell(0);
// var newCell2 = newRow.insertCell(1);
// var newCell3 = newRow.insertCell(2);

const addTable = () => {
  const NameInputValue = document.getElementById("input-name").value;
  const AgeInputValue = document.getElementById("input-age").value;
  const SexInputValue = document.querySelectorAll(".sex");
  
  const masculine = SexInputValue[0].checked;
  const feminine = SexInputValue[1].checked;

  const table = document.getElementById('myTable');

  var newRow = document.createElement("tr");
  var newCellName = document.createElement("td");
  var newCellAge = document.createElement("td");
  var newCellSex = document.createElement("td");

  newCellName.textContent = NameInputValue;
  newCellAge.textContent = AgeInputValue;

  table.appendChild(newRow);
  newRow.appendChild(newCellName);
  newRow.appendChild(newCellAge);
  
  if (masculine == true) {
    newCellSex.textContent = 'Masculino'
    newRow.appendChild(newCellSex)
    console.log(masculine)
  }
  else {
    newCellSex.textContent = 'Feminino'
    newRow.appendChild(newCellSex)
    console.log(feminine)
  }

  
}

const ocultTable = () => {
  var x = document.getElementById("myTable");
  if (x.style.display === 'none'){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}