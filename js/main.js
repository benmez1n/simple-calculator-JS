//theme
const switcher = Array.from(document.querySelectorAll("#switcher-bullets span"));
switcher[0].onclick = ()=>{
    classRemoveSwitcher();
    document.documentElement.setAttribute("data-theme","blue");
    switcher[0].classList.add("active")
}
switcher[1].onclick = ()=>{
    classRemoveSwitcher();
    document.documentElement.setAttribute("data-theme","grey");
    switcher[1].classList.add("active")
}
switcher[2].onclick = ()=>{
    classRemoveSwitcher();
    document.documentElement.setAttribute("data-theme","violet");
    switcher[2].classList.add("active")
}
function classRemoveSwitcher(){
    switcher.forEach(element =>element.classList.remove("active"));
}
//Calc
const btns = Array.from(document.querySelectorAll("#buttons-container span")),
    delBtn = document.getElementById("del"),
    resetBtn = document.getElementById("reset"),
    equalBtn = document.getElementById("equal"),
    output = document.querySelector("#screen span");
btns.forEach(element=>{
    element.onclick=()=>{
        if(output.innerHTML === "Welcome"){output.innerHTML=""}
        output.innerHTML += element.dataset.value;
        isClicked(element);
    }
});
equalBtn.onclick= () => {
    isClicked(equalBtn);
    if(output.innerHTML=="") return;
    else output.innerHTML = eval(output.innerHTML);
}
resetBtn.onclick = ()=> {
    isClicked(resetBtn);
    output.innerHTML = "";
}
delBtn.onclick = ()=> {
    isClicked(delBtn);
    let outputArray = Array.from(output.innerHTML);
    delete outputArray[outputArray.length-1]
    output.innerHTML = outputArray.join("");
}
isClicked = button => {
    button.classList.add("click-button")
    setTimeout(()=>{
        button.classList.remove("click-button");
    },100)
}