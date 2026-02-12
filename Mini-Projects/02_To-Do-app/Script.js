let task = document.querySelector("#task");
let btn = document.querySelector("#btn");
let ul = document.querySelector("ul");



btn.addEventListener("click", function (event) {
    let item =   document.createElement('li');
    item.textContent = task.value; 
    
    let delBtn =   document.createElement('button');

    delBtn.textContent = "Delete"; 
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    
    ul.appendChild(item);
    task.value = "";
});

let delBtns = document.querySelectorAll(".delete");

for (deleteBtn of delBtns){
    deleteBtn.addEventListener("click", function () {
        let par = this.parentElement;
        par.remove();
    });
}
