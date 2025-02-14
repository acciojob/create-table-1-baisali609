function insert_Row() {
    //Write your code here
      let table = document.getElementById("sampleTable");

	let row1 = table.insertRow(0);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    
    // Set the text content of the new cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
  
}
