let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let nameO = document.querySelector(".nameO");
let nameX = document.querySelector(".nameX");

let turnO=true;

//winning patterns
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


//print O and X one by one
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            nameX.style.backgroundColor="gold";
            nameO.style.backgroundColor="#f7e893";
            turnO=false;
        }
        else{
            box.innerText="X";
            nameX.style.backgroundColor="#f7e893";
            nameO.style.backgroundColor="gold";
            turnO=true;
           
        }
    box.disabled=true;
    checkWinner();
    });
});



const resetGame = () => {
     turnO=true;
     enableBoxes();
     msgContainer.classList.add("hide");
     nameX.style.backgroundColor="#f7e893";  // reset the bg color
     nameO.style.backgroundColor="gold";     // reset the bg color
};

//disable all the boxes
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

//enable all the boxes
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

//show the winner
// const showWinner = (winner) =>{
//     msg.innerText=`Winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// }

//ckeck winner
const checkWinner = () => {
  for(let pattern of winPatterns){  //travers the array
    let pos1 = boxes[pattern[0]].innerText;  //checks the position and text of the box
    let pos2 = boxes[pattern[1]].innerText; 
    let pos3 = boxes[pattern[2]].innerText; 

    //check for same values in pattern
    if(pos1!="" && pos2!="" && pos3!="")
    {
        if(pos1===pos2 && pos2===pos3)
        {   
            if (pos1 === "O") {
                msg.innerText = `Winner is ${nameO.value || "O"}`;
            } else {
                msg.innerText = `Winner is ${nameX.value || "X"}`;
            }
            
            
            msgContainer.classList.remove("hide");
            disableBoxes();
            // showWinner(pos1);
        }
    }
  }
};

newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);