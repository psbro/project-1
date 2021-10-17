
let move = new Audio("move.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let over = false;

//function to change the turn
const changeTurn = () => {

    return turn === "X" ? "0" : "X";
}

//function to check for a win

const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]

    wins.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " " + "Won"
            over = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px";
            let boxtext = document.querySelectorAll('.boxtext');
            Array.from(boxtext).forEach(element => {
               setTimeout(() => {
                element.innerText = "";
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
               }, 3000);
            });
            

        }
    })

}

//main logic



let boxes = document.getElementsByClassName("box");  // will return html collection

Array.from(boxes).forEach(element => {

    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            move.play();
            checkWin();

            if (!over) {
                document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;

            }
        }
    })


})


//reset



reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    over = false;

    document.getElementsByClassName("info")[0].innerText = " Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";




})
