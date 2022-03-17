let index=0;
const taskDOM=document.getElementById("task");
const liveToastBtnDOM=document.getElementById("liveToastBtn");
const bodyDOM=document.querySelector("body");
const listDOM=document.getElementById("list");
liveToastBtnDOM.addEventListener("click",newElement);


bodyDOM.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        newElement();
    }
});


function newElement(){
    if(taskDOM.value.trim()==""){
        alert("Boş Ekleme Yapamazsınız.");
    }
    else{
        const newEle=document.createElement("li");
        newEle.setAttribute("id","li"+index);
        newEle.innerHTML=taskDOM.value;
        newEle.onclick=check;
        listDOM.appendChild(newEle);

        const newSpan=document.createElement("span");
        newSpan.setAttribute("id","span"+index);
        newSpan.classList.add("close");
        newSpan.innerHTML="X";
        newSpan.onclick=remove;
        newEle.appendChild(newSpan);

        localStorage.setItem(String(index++),newEle.innerHTML);
       
    }
    taskDOM.value="";
}

function check(){
    this.classList.toggle("checked");
}
function remove(){
    this.parentElement.remove();
}
