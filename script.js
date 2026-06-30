function calculateMarks(){
 let student = {
 name: document.getElementById("name").value
 };
 let marks = [
 Number(document.getElementById("mark1").value),
 Number(document.getElementById("mark2").value),
 Number(document.getElementById("mark3").value)
 ];
 let total = 0;
 for(let i = 0; i < marks.length; i++){
 total += marks[i];
 }
 let average = total / marks.length;
 document.getElementById("result").innerHTML =
 "Name: " + student.name +
 "<br>Total Marks: " + total +
 "<br>Average Marks: " + average.toFixed(2);
}