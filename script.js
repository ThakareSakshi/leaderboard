
let new_member=document.querySelector("#add-member");
let warningMsg=document.querySelector(".warning");

new_member.children[3].addEventListener("click",add_member)

let members_container=document.querySelector(".member-container");

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
       
    }
}



function sorting(){
    let Allmembers=document.querySelectorAll(".memeber");
    console.log(Allmembers);
    members_container.innerHTML=Allmembers.sort((a,b)=> a.children[3].innerText-a.children[3].innerText);
}