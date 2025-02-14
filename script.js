function insert_Row() {
    //Write your code here
      let table = document.getElementById("sampleTable");
	
	let row1 = table.insertRow(0);
    let cell1 = row1.insertCell(0);
    let cell2 = row1.insertCell(1);
    
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";

}
