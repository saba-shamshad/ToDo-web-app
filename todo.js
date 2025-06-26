const inputBox= document.getElementById("inputbox");
const listContainer= document.getElementById("list-container");
function addTask(){
    if (inputBox.value==='') {
        alert("You must write something!")
    }
    else{
        let li = document.createElement("li"); //where we want to write
        li.innerHTML= inputBox.value; // whatever we write in inputbox will contain here//
        listContainer.appendChild(li); //display list//
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    savedata(); 
    }
    
},false);

function savedata() {
    localStorage.setItem("data",listContainer.innerHTML)
}

//when we open the browers again , the data will remain as it was
function showtask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showtask();