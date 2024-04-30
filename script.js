// let info={
//     Name: 'Hridoy Modak',
//     ID: 219025,
//     company: 'Lifewaves limited',
//     location: '30/25, ring road, shyamoli'
// }
//  let {Name, ID, company}= info;
// console.table(ID);

// let name=['rakib', 'fahad', 'nazmul']
// let[nameOne,nameTwo]=name
// console.log(nameOne)

// let ul= document.querySelector('ul').children
// let result=ul[0]
// console.log(result);



let tittle = document.getElementById("booknm");
let form = document.getElementById("book-form");
let books = document.getElementById("body-result");
let author = document.getElementById("authernm");

form.addEventListener("submit", (el) => {
  el.preventDefault();
  let tittleValue = tittle.value;
  let authorValue=author.value; 

  if (tittleValue == "") {
  } else {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let tdOne=document.createElement('td');
    
    books.appendChild(tr);
    tr.appendChild(td);
    tr.appendChild(tdOne);
    tdOne.innerHTML=authorValue
    td.innerHTML = tittleValue;
  }
});
