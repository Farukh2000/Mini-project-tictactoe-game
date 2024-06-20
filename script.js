// access the element

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")


//turn
let turnO = true; //player x & player o

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((b) => {
    b.addEventListener("click", () => {
        if (turnO === true) {
            b.innerText = "O";
            turnO = false;
        } else {
            b.innerText = "X";
            turnO = true;
        }
        b.disabled = true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes) {
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    msg.innerText=`cong winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        
        
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2!=""&&pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("winner",pos1);
                showWinner(pos1);
                
            }
        }
    }
};


newGameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)
