window.onload = () => {
    const form = document.querySelector("#addParticipant");
 
    form.addEventListener("submit", addItem);
}

function addItem(e) {
    e.preventDefault();
 
    let newItem = document.getElementById("item").value;
    if (newItem.trim() == "" || newItem.trim() == null)
        return false;
    else
        document.getElementById("item").value = "";
 
    let li = document.createElement("li");
 
    li.appendChild(document.createTextNode(newItem));
 
    items.appendChild(li);
}