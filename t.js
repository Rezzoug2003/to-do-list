let input=document.querySelector(".add-t input");
let buttom=document.querySelector(".add-t .plus");
let task1=document.querySelector(".task-c");
let completed=document.querySelector(".task-conpleted span");
let count=document.querySelector(".task-cont span");
let notaskm=document.querySelector(".no-task-messag");
let todo=document.querySelector(".todo-c");
let countLocal=0;


window.onload=()=>{
    input.focus();
};
if(localStorage.length){
    for(let [keys,value]of Object.entries(localStorage)){
        let span=document.createElement("span");
        span.className="task-b"
        span.innerHTML=value;
        task1.appendChild(span)

    }
    notaskm.remove();

    let deletall=document.createElement("span");
    deletall.className="deletall"
    let delettextall=document.createTextNode("delet All")
    deletall.appendChild(delettextall)
    todo.appendChild(deletall)

    let finishall=document.createElement("span");
       finishall.className="finichall"
       let finichallT=document.createTextNode("finish All")
       finishall.appendChild(finichallT)
       todo.appendChild(finishall)

       count.innerHTML=document.querySelectorAll(".task-c .task-b").length
       completed.innerHTML= document.querySelectorAll(".task-c .task-b.finish").length 

}
buttom.onclick=()=>{
    if(input.value===``){
        
        alert()
        
    }else{
        let ee=true;
        
        
        notaskm.remove();
        // console.log(notaskm);
        
       let span=document.createElement("span");

       let deletall=document.createElement("span");
       deletall.className="deletall"
       let delettextall=document.createTextNode("delet All")
       deletall.appendChild(delettextall)
       todo.appendChild(deletall)


       let finishall=document.createElement("span");
       finishall.className="finichall"
       let finichallT=document.createTextNode("finish All")
       finishall.appendChild(finichallT)
       todo.appendChild(finishall)

       let delet=document.createElement("span");
       let text=document.createTextNode(input.value) 
       let delettext=document.createTextNode("delet") 

       span.appendChild(text)
       span.className="task-b"

       delet.appendChild(delettext)
       delet.className="delet"
 

       span.appendChild(delet)
    //    console.log(span.innerHTML)
                   
       let task2=document.querySelectorAll(".task-c .task-b")
       task2.forEach((e)=>{
          if(e.textContent===`${input.value}delet`)
              {
                alert("user not rigt");
                     ee=false;        
            }    
        })
        if(ee){ task1.appendChild(span)
            countLocal++;
            // count  .innerHTML=(1+task2.length)
            // localStorage.setItem(`${input.value}<span class="delet">delet</span>`,"yes")
            localStorage.setItem(countLocal,`${input.value}<span class="delet">delet</span>`)
            
            console.log(countLocal);
        }
        input.value=``;
        input.focus();         
    }
}

document.addEventListener("click",(e)=>{
    let a=document.querySelectorAll(`.todo-c .deletall`)
    let a2=document.querySelectorAll(`.todo-c .finichall`)
    
    if(e.target.className===`delet`){
        e.target.parentNode.remove();
        // localStorage.removeItem(e.target.parentNode.innerHTML);
        for(let [keys,value]of Object.entries(localStorage)){
            if(localStorage.getItem(keys)===e.target.parentNode.innerHTML){
                localStorage.removeItem(keys);  
            }
        }
        countLocal--;
        if(task1.childElementCount===0){
            x();
        }
    }
    
    
    if(e.target.classList.contains("task-b")){
        e.target.classList.toggle("finish")
        
    
    } 
    
    let task3=document.querySelectorAll(".task-c .task-b")
    if(e.target.classList.contains("deletall")){
    // count.innerHTML=0;
    localStorage.clear();
    countLocal=0;
    task3.forEach((ee)=>{
       ee.remove();
    })
    
    a.forEach((e)=>{
        e.remove()

    })
    a2.forEach((e)=>{
        e.remove()

    })
     task1.appendChild(notaskm)
   }

   let f=document.querySelectorAll(".task-c .task-b")
   
   if(e.target.classList.contains("finichall")){
    f.forEach((e)=>{
        e.classList.toggle("finish")
    })

   }
      count.innerHTML=document.querySelectorAll(".task-c .task-b").length
       completed.innerHTML= document.querySelectorAll(".task-c .task-b.finish").length
   

   
    
    if(task3.length===0){
    
     
    a.forEach((e)=>{
        e.remove()

    })
    a2.forEach((e)=>{
        e.remove()

    })
    }           
})
function x(){
    task1.appendChild(notaskm);
}





