
const form =document.getElementById('form');
const userInput = document.getElementById('name');
const ul = document.getElementById("list")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(userInput.value === '') {
        alert("Please enter a value")
    } else{
        // create a new li item
        let li = document.createElement("li");
        // create a class for li
        li.className = "item"
        // create a text li
        let text = document.createTextNode(userInput.value);
        // append text to li
        li.appendChild(text);
        //append li to ul
        ul.appendChild(li)
        // create a delete button
        let deleted = document.createElement("span"); 
        // add a class to delete
        deleted.className = "span";
        // create a delete text
        let deleteText = document.createTextNode("Delete");
        // append delete text to span
        deleted.appendChild(deleteText)
        // append delete to li
        li.appendChild(deleted);
        // clear input
        userInput.value = '';
    }
})

// for deleting the item;
ul.addEventListener('click',(e) => {
    if(e.target.className === "span"){
        if(confirm("Are you sure you want to delete this item?")){
            e.target.parentElement.remove();
        }
    }
})