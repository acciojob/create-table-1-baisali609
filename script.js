function insert_Row() {
    //Write your code here
      let table = document.getElementById("sampleTable");

	if (!table) {
        console.error("Table with ID 'sampleTable' not found.");
        return;
    }
	
	let row1 = table.insertRow(0);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
  
}
