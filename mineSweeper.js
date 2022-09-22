'use strict'
const MINE = '*'

var gBoard;

var gLevel = {
    SIZE: 4,
    MINES: 4
}
var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}
function initGame() {
    gBoard = buildBoard()
    console.table(gBoard)
    renderBoard(gBoard)

}

function buildBoard() {
    const board = []
    for (var i = 0; i < gLevel.SIZE; i++) {
        board.push([])

        for (var j = 0; j < gLevel.SIZE; j++) {
            const cell = {
                minesAroundCount: 0,
                isShown: true,
                isMine: false,
                isMarked: true
            }
            board[i][j] = cell
        }
    }

    board[1][2].isMine = true
    board[2][1].isMine = true
    return board
}



function renderBoard(board) {

    var strHTML = ''

    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>\n'
        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j]
            var val = currCell.isMine ? MINE : setMinesNegsCount(gBoard, 1, 1)
            strHTML += `\t<td onclick="cellClicked(this, ${i}, ${j})">${val}</td>\n`

        }
        strHTML += '</tr>\n'
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
    console.log(strHTML);

}


function setMinesNegsCount(gBoard, rowIdx, colIdx) {
    var MinesNegsCount = 0

    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j >= gBoard[0].length) continue
            if (i === rowIdx && j === colIdx) continue

            if (gBoard[i][j] === MINE) MinesNegsCount++
        }
    }
    return MinesNegsCount
}

function cellClicked(elCell, i, j) {
    console.log('elCell:', elCell, i, j);
    console.log(gBoard[i][j]);


}



function setMinesRandomly() {

}





function cellMarked(elCell) {



}


function checkGameOver() {


}


function expandShown(board, elCell, i, j) {





}







