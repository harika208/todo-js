function addpop(){
    let popup = document.querySelector("#popup-main");
    popup.style.display = "flex";

}
function add2pop(){
    let popup123 = document.querySelector("#popup-main1");
    popup123.style.display = "flex";
}




const taskList = [];
const addTask = () => {
    const name = document.getElementById('name').value;
    console.log(name);
    const tempObj = {
        id: Date.now(),
        taskName: name,
    }
    taskList.push(tempObj);
    console.log(taskList);
    addTaskOnScreen();
    
}



const addTaskOnScreen = ()=>{
    const element = document.createElement("div");
    element.setAttribute("class","child");

    const existingElement = document.getElementById("parent");
    existingElement.appendChild(element);
    element.innerText = taskList[taskList.length-1].taskName;

    let hori = document.createElement("hr");
    hori.setAttribute("width","100%");
    element.appendChild(hori);



    let plus1 = document.createElement("img");
    plus1.setAttribute("src","./circle-plus-solid.svg");
    element.appendChild(plus1).addEventListener("click",plus12);
     function plus12(){
        let popup12 = document.querySelector("#popup-main1")
        popup12.style.display = "flex";
        add2pop();
     }
    
     
   
    let delete1 = document.createElement("img");
    delete1.setAttribute("src","./trash-can-solid.svg");
    element.appendChild(delete1).addEventListener("click", () => {
        existingElement.removeChild(element);
    })

 

    
    
     let pop = document.querySelector('#popup-main');
     pop.style.display = "none";
 
     let pup = document.querySelector('#popup-main1');
     pup.style.display = "none";

     

}

  



function closepop(){
    
    let white = document.querySelector('#popup-main');
    white.style.display = "none";
    
    let white1 = document.querySelector('#popup-main1');
    white1.style.display = "none";

}




