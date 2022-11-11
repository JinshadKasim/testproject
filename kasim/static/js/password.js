


function showpass() {
    var show = document.getElementById('password');
    if (show.type == 'password') {
        show.type = 'text';
    }
    else {
        show.type = 'password';
    }
}


function checkp() {
    var pass = document.getElementById('strong').value,
        errors = [];
    if (pass.length < 8) {
        errors.push("weak password,Your password must be at least 8 characters");
    }
    if (pass.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one Lowercase letter.");
    }
    if (pass.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
    if (pass.search(/[!@#$%^&*()]/) < 0) {
        errors.push("Your password must contain at least one Special Charecter.");
    }
    if (pass.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
        errors.push("Strong Password");
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return false;
    }
    return true;
}



var fruits = ["1", "2", "3", "4"];

var html = "<table><tr>"

function add() {


    var addv = document.getElementById("adde").value
    while (i = fruit.length + 1) {
        fruit[i] = addv
    }

}

i = 0

function addRow() {
    var table = document.getElementById("table");
    // table.innerHTML = "<tr><td>TOP</td><td>AA</td></tr>" + table.innerHTML;
    while (i < fruits.length) {
        table.innerHTML += "<tr><td>" + fruits[i] + "</td></tr>";
        i++
        break;

        console.log("Hello")
    }
}

function deleteRow() {

    var select = document.getElementById('table');
    select.removeChild(select.lastChild);
    



}

function getid(){
    a=document.getElementById("1")
    console.log(a)
}




//how to add an element into an array from a input field ? 
var items = [];

function guardarNumeros() {
  boxvalue = document.getElementById('box').value;
  items.push(boxvalue);  
  console.log(items);


}

j=0
function taskaddd(){
    var addvv = document.getElementById("adde").value
    while (j = items.length + 1) {
        items[j] = addvv
        break;
    }
  k=j-2

    var tablee = document.getElementById("table2");
    // table.innerHTML = "<tr><td>TOP</td><td>AA</td></tr>" + table.innerHTML;
    while (k < items.length) {
        tablee.innerHTML += "<tr id="+j+"><td>" + items[k] + "</td><td><button type='button' onclick="+ deleteRow(i)    +">done</td></tr>";
        cnk=document.getElementById(j).innerHTML
        console.log(cnk)
        
        break;
  
  
  
  }
  
}

function deleteRow(rowid)  
{   
    var row = document.getElementById(rowid);
    row.parentNode.removeChild(row);
}







// $("#hideshow").click(function(){

//     $("#para").hide(1000)
//     console.log("abc")

// })
// $("#hideshow").dblclick(function(){

//     $("#para").show(1000)
//     console.log("def")

// })


// $("#hideshow").click(function(){

//     // $("#para").toggle(1000)
//     // $("#para").fadeToggle(1000)
//     $("#para").fadeToggle(1000)

// })


$("#para").click(function(){
    $("#testdiv").slideToggle(10000)
})








$("#sel").click(function(){

   
    a=$("#sel").val()
    if(a=="ac"){
        $("#imp").show()
        $("#imp2").hide()
        $("#imp3").hide()
        $("#imp4").hide()
    }
})
$("#sel").click(function(){


    a=$("#sel").val()
    if(a=="pc"){
        $("#imp").hide()
        $("#imp2").show()
        $("#imp3").hide()
        $("#imp4").hide()
    }
})
$("#sel").click(function(){


    a=$("#sel").val()
    if(a=="dl"){
        $("#imp").hide()
        $("#imp2").hide()
        $("#imp3").show()
        $("#imp4").hide()
    }
})
$("#sel").click(function(){


    a=$("#sel").val()   
    if(a=="pp"){
        $("#imp").hide()
        $("#imp2").hide()
        $("#imp3").hide()
        $("#imp4").show()
    }
})  


//how to delete a row?  
function addBooks() {
  let info = document.getElementById("author").value;
  let info2 = document.getElementById("title").value;
  let info3 = document.getElementById("genre").value;
  let info4 = document.getElementById("reviews").value;

  document.getElementById("author").value = "";
  document.getElementById("title").value = "";
  document.getElementById("genre").value = "";
  document.getElementById("reviews").value = "";

  let obj = {
    author: info,
    title: info2,
    genre: info3,
    review: info4,
  };

  let table = document.getElementById("table2");

  const row = table.insertRow(1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  var deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.textContent = 'Delete Book';
  deleteButton.addEventListener('click', (event) => {   
    var row = deleteButton.parentNode.parentNode;
    row.parentNode.removeChild(row)
  })
  
  cell1.innerHTML = `${obj.author}`;
  cell2.innerHTML = `${obj.title}`;
  cell3.innerHTML = `${obj.genre}`;
  cell4.innerHTML = `${obj.review}`;
  cell4.appendChild(deleteButton);
 
}



// $("#tstbtn").click(function(){
//     // $(this).animate({
//     //     "height":"200px",
//     //     "width":"200px"
//     // })
//     $("#para")
//     .animate({
//         "left":"300px",
//         "top":"300px"
//     })
//     // .delay(2000)
//     // .animate({
//     //     "top":"300px"
//     // })
//     // .delay(2000)
//     // .animate({
//     //     "left":"0px"
//     // })
//     // .delay(2000)
//     // .animate({
//     //     "top":"100px"
//     // })


   
// })

// console.log($("#para").html())

// $('#para').html('new text')
// console.log($("#para").html())

// $("#tstbtn").click(function(){
   
//     $("ul").empty()
//     $("#para").addClass("test-style")
// })


// console.log($("div").height())
// console.log($("div").width())



$("#tstbtn").click(function(){
   
    // $("div").height("800px")
    // $("div").width("800px")

    // // console.log($("div").height())
    // // console.log($("div").innerHeight())
    // // console.log($("div").width())
    // // console.log($("div").innerWidth())
    // console.log($("div").outerHeight())
    // console.log(  $("div").siblings().html("isdfiu"))
    $("span").siblings().html("Jinshad Kasim")
    console.log($("p").html())

})