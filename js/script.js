var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

var resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetItem)

var ul = document.getElementById("list");
var li;
  
function removeItem () {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
    }
} 

function resetItem (){
    li = ul.children
    for (let index = li.length-1; index >= 0; index--) {
        console.log(li[length]);
        
        ul.removeChild(li[length])    
    }
    // console.log(li.length);
    

    // li = ul.children
    // for (let index = li.length; index =0 ; index--) {
    //     console.log(index);   
    // }
    // while (i >= 0){
    //     ul.removeChild(li[i]);
    //     i--;
        
    // }
}



function addItem () {
    var input = document.querySelector("input");
    var newTodo = input.value;
    var textNode = document.createTextNode(newTodo);



    if (newTodo === "") {
        alert("Please enter your todo");
        // var noValWarning = document.write("Please Enter a Value");
        
    }
    else {
        li = document.createElement("li");
        
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("id","check");
        var label = document.createElement("label");

        ul.appendChild(label);
        li.appendChild(checkbox);
        li.appendChild(label);
        label.appendChild(textNode);
        ul.insertBefore(li,ul.childNodes[0]);

        setTimeout(() => {
            li.className = "visual";
            
        }, 2);
        input.value = "";


    }
}

/*

Below Fuction perfrom add function when we press enter.

*/

var input = document.getElementById("input"); //here we placed id of input area.
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("add").click(); //here we have added the id of button which has to be activated on enter.
  }
});