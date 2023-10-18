
let new_member=document.querySelector("#add-member");
let warningMsg=document.querySelector(".warning");

new_member.children[3].addEventListener("click",add_member)

let members_container=document.querySelector(".member-container");
sorting();

function add_member(){
    let firstName=new_member.children[0];
    let lastName=new_member.children[1];
    let score=new_member.children[2];
    if(firstName.value=="" || lastName.value=="" || score.value==""){
     warningMsg.style.display="block";
     return;
    }else{
        warningMsg.style.display="none"; 
        
        let member=document.createElement("div");
        member.setAttribute("class","memeber");
        
        let name=document.createElement("span");
        name.setAttribute("class","name");
        let Fname=document.createElement("span");
        Fname.innerText=firstName.value+" "+lastName.value;

        let date=document.createElement("span");
        let newDate=new Date();
        date.innerHTML=newDate.getDate()+"-"+newDate.getMonth()+"-"+newDate.getFullYear();
        date.setAttribute("class","dates");

        name.appendChild(Fname);
        name.appendChild(date)

        let scores=document.createElement("span");
        scores.setAttribute("class","score");
        scores.innerText= score.value;


        let btns=document.createElement("span");
        btns.setAttribute("class","btns");

        btns.innerHTML=`<button>-5</button>
        <button><i class="fa fa-trash" aria-hidden="true"></i></button>
        <button>+5</button>`;

        member.appendChild(name);
        member.appendChild(scores);
        member.appendChild(btns);
        members_container.appendChild(member);
        
       sorting();
       updateData();
       
    }
}



function sorting(){
    let Allmembers=document.querySelectorAll(".memeber");
    Allmembers=Array.prototype.slice.call(Allmembers, 0);
    Allmembers=Array.prototype.sort.call(Allmembers, (a,b)=>{
        return b.children[1].innerText - a.children[1].innerText;
    });
    console.log(Allmembers);

    let sortedTable=document.createElement("div")
    console.log(Allmembers)

   Allmembers.forEach((ele)=>{
    // console.log(ele);
    
        sortedTable.appendChild(ele);
   })

   members_container.innerHTML=sortedTable.innerHTML;

// console.log(sortedTable)

}
updateData();

function updateData(){
    let Allmembers=document.querySelectorAll(".memeber");
    Allmembers.forEach((ele)=>{
        let btns=ele.querySelectorAll("button");
        // console.log(btns[0]);
        btns[1].addEventListener("click",()=>{
            console.log("hello");
            ele.remove();
            sorting();
            updateData();
        })

        btns[0].addEventListener("click",()=>{
            ele.querySelector(".score").innerText-=5;
            sorting();
            updateData();
        })
        btns[2].addEventListener("click",()=>{
            ele.querySelector(".score").innerText=parseInt(ele.querySelector(".score").innerText)+5;
            sorting();
            updateData();
        })
    })
}
