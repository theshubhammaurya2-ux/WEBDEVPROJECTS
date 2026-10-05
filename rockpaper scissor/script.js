let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscore=document.querySelector("#user_score");
const compscore=document.querySelector("#comp_score");



const gencompchoice=()=>{
    let options=["rock","paper","scissors"];
   let idx= Math.floor(Math.random()*3);
    let compchoice=options[idx];
    return compchoice;
};



const drawgame=()=>{
    console.log("game was draw")
}



const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userscore.innerText=userScore;
        console.log("youwin",(userchoice),"beats",(compchoice))
      msg.innerText = `YOU WIN! Your ${userchoice} beats ${compchoice}`;   msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscore.innerText=compScore;
        console.log("you lose",compchoice,"beats",userchoice);
         msg.innerText = `YOU LOSE! ${compchoice} beats ${userchoice}`;
           msg.style.backgroundColor="red";
    }
}



const playGame=(userchoice)=>{
        console.log("userchoice",userchoice);
        const compchoice=gencompchoice();
        console.log("compchoice",compchoice);

        if(userchoice===compchoice){
               drawgame();
                 msg.innerText="GAME DRAW PLAY AGAIN";
        }
        else{
           let userwin=true;
            if(userchoice==="rock"){
                //scissors
             userwin=compchoice==="paper"?false:true;
            }
            else if (userchoice==="paper"){
                userwin=compchoice==="scissors"?false:true;
            }
            else{
                userwin=compchoice==="rock"?false:true;
            }
             showwinner(userwin,userchoice,compchoice);
        }
       
};





choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
       playGame(userchoice);
    })
    
});



