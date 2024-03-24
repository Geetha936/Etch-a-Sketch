const container = document.getElementById("container");
container.style.cssText = "display :flex ; width : 960px; height : 100vh ; border : 1px solid black ; flex-wrap : wrap";
function promt() {
    const no = prompt("Enter No of comtainers") ;
    console.log(no);
    for (let i = 0; i < no * no; i++) {
        const div = document.createElement("div");
        div.style.cssText = "border : 1px solid black ; ";
        div.style.width =  960 / no -2 +  "px";
        container.appendChild(div);
        div.classList.toggle("gridDiv");
    }
}

console.log(window.inn)
function changeDivColor(){
    const divList = document.querySelectorAll(".gridDiv");
    divList.forEach(div =>{
        div.addEventListener("mouseover", (e) => {
            let randomColor =Math.floor(Math.random() * 16777215).toString(16);
            e.target.style.backgroundColor = "#" + randomColor ;
        });
    });

}





