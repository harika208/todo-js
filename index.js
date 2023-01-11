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

    if (taskList.length === 0) {
        const exstingElement12 = document.getElementsByClassName("no");
        exstingElement12[0].innerText = "";
    }
     
    const tempObj = {
        id: Date.now(),
        taskName: name,
    }
    
    taskList.push(tempObj);
    console.log(taskList);
    if(name.length == 0){
        alert("Add content");
        closepop();
    }
    else{
        addTaskOnScreen();
    }
    

}



    const addTaskOnScreen = ()=>{

    
    const element = document.createElement("div");
    element.setAttribute("id","child");

    const existingElement = document.getElementById("parent");
    existingElement.appendChild(element);
    element.innerText =  taskList[taskList.length-1].taskName;

    let hori = document.createElement("hr");
    hori.setAttribute("width","100%");
    element.appendChild(hori);

    let delete1 = document.createElement("img");
    delete1.setAttribute("src","./trash-can-solid.svg");
    element.appendChild(delete1).addEventListener("click", () => {
        existingElement.removeChild(element);
    })

    let plus1 = document.createElement("img");
    plus1.setAttribute("src","./circle-plus-solid.svg");
    element.appendChild(plus1).addEventListener("click",add2pop);

    let pop = document.querySelector('#popup-main');
    pop.style.display = "none";
    
    const content = document.createElement("div");
    content.setAttribute("id","innerbox");
    content.style.display = "inline-block";
    element.appendChild(content);
    const btn = document.getElementById('btn');
    const name1 = document.getElementById("name1");

btn.addEventListener('click', function(){
    let text = document.createElement('p');
    text.classList.add('paragraph-styling');
    text.style.color = "black";
    text.style.display = "inline-block";
    content.appendChild(text);
    text.innerText = name1.value;
    name1.value = "";



    let popup1 = document.querySelector("#popup-main1")
            popup1.style.display = "none";


    let mark = document.createElement('button');
    mark.setAttribute('id','mark');
    mark.innerHTML = "Mark - Done";
    content.appendChild(mark);

    mark.addEventListener('click',function(){
        text.style.color = 'red';
        text.style.textDecoration = "line-through";
        mark.style.visibility = "hidden";
    })
    
})

     

     
}


function closepop(){
    
    let white = document.querySelector('#popup-main');
    white.style.display = "none";
    
    let white1 = document.querySelector('#popup-main1');
    white1.style.display = "none";

}
