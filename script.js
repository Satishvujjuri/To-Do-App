Object.assign(document.body.style,{
    backgroundColor:"lavender"
});

let head=document.createElement("h1");
head.innerText="To Do's";
Object.assign(head.style,{
    textAlign:"center",
    color:"midnightBlue",
    fontFamily:"sans-serif",
    fontSize:"38px"
});

let sHead=document.createElement("h2");
sHead.innerHTML="<b>Create </b>Tasks";
Object.assign(sHead.style,{
    color:"midnightBlue",
    fontFamily:"sans-serif",
    fontSize:"25px"
});

let tHead=document.createElement("h2");
tHead.innerHTML="<b>My </b>Tasks";
Object.assign(tHead.style,{
    color:"midnightBlue",
    fontFamily:"sans-serif",
    fontSize:"25px"
});

let box=document.createElement("input");
box.id="text";
box.placeholder="Whats needs to be done?";
Object.assign(box.style,{
    width: "85vw",
    height: "7vh",
    borderRadius:"8px",
    paddingLeft:"15px",
    border:"1px solid gray",
    boxShadow:"0 2px 8px gray",
    outline:"none",
    fontSize:"15px"
});

let addBtn=document.createElement("button");
addBtn.innerText="Add";
Object.assign(addBtn.style,{
    marginTop:"20px",
    display:"block",
    background:"forestGreen",
    color:"white",
    fontSize:"20px",
    fontWeight:"bold",
    padding:"5px 13px",
    borderRadius:"8px"
});

let saveBtn=document.createElement("button");
saveBtn.innerText="Save";
Object.assign(saveBtn.style,{
    marginTop:"20px",
    display:"block",
    backgroundColor:"forestGreen",
    color:"white",
    fontSize:"20px",
    fontWeight:"bold",
    padding:"5px 13px",
    borderRadius:"8px"
});

let taskBox=document.createElement("div");
taskBox.style.width="85vw";

let container=document.createElement("div");
Object.assign(container.style,{
    margin:"auto",
    width:"85vw",
    fontFamily:"sans-serif",
});
container.append(
    head,
    sHead,
    box,
    addBtn,
    tHead,
    taskBox,
    saveBtn
)
document.body.append(container);

addBtn.addEventListener("click",()=>{
    if(box.value==""){
        alert("Enter Task");
        return;
    }
    let task=document.createElement("div");
    task.style.boxShadow="0 2px 8px gray";
    Object.assign(task.style,{
    backgroundColor:"aliceBlue",
    padding:"15px",
    borderRadius:"8px",
    marginTop:"10px",
    fontSize:"18px",
    display:"flex",
    alignItems:"center"
});
addBtn.addEventListener("keypress",(e)=>{
    if(e.key=="enter"){
        addBtn.click();
    }
});
    let check=document.createElement("input");
    check.type="checkbox";
    Object.assign(check.style,{
    width:"20px",
    height:"20px",
    cursor:"pointer",
    marginLeft:"10px"
});
    let text=document.createElement("span");
    text.innerText=box.value;
    text.style.marginLeft="15px";
    check.addEventListener("change",()=>{
        if(check.checked){
            text.style.textDecoration="line-through";
        }
        else{
            text.style.textDecoration="none";
        }
    });
    let editBtn=document.createElement("button");
    editBtn.innerText="Edit";
    editBtn.style.marginLeft="20px";
    editBtn.addEventListener("click",()=>{
        let newTask=prompt("Edit task",text.innerText);
        if(newTask!=""){
            text.innerText=newTask;
        }
    });

    Object.assign(editBtn.style,{
    marginLeft:"20px",
    backgroundColor:"royalBlue",
    color:"white",
    border:"none",
    borderRadius:"6px",
    padding:"5px 10px",
    fontWeight:"bold"
});
    let deleteBtn=document.createElement("button");
    deleteBtn.innerText="Delete";
    deleteBtn.style.marginLeft="10px";
    deleteBtn.addEventListener("click",()=>{
        task.remove();
    });
    Object.assign(deleteBtn.style,{
    marginLeft:"20px",
    backgroundColor:"crimson",
    color:"white",
    border:"none",
    borderRadius:"6px",
    padding:"5px 10px",
    fontWeight:"bold"
});
    task.append(check,text,editBtn,deleteBtn);
    taskBox.append(task);
    box.value="";
});
saveBtn.addEventListener("click",()=>{
    localStorage.setItem("tasks",taskBox.innerHTML);
    alert("Tasks saved");
});
// addBtn.addEventListener("keypress",(e)=>{
//     if(e.key=="enter"){
//         addBtn.click();
//     }
// });
// window.onload=()=>{
//     taskBox.innerHTML=localStorage.getItem("tasks")||"";
// };
