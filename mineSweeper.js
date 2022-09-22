'use strict'
const MINE = '💣'

var gBoard;

var gLevel = {
    SIZE: 4,
    MINES: 2
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
    // setMinesRandomly()
    return board
}



// Render the board to an HTML table
function renderBoard(board) {

    var strHTML = ''

    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>\n'
        for (var j = 0; j < board[0].length; j++) {
            var currCell = board[i][j]
            var val = currCell.isMine ? MINE : setMinesNegsCount(currCell)
            strHTML += `\t<td onclick="cellClicked(this, ${i}, ${j})">${val}</td>\n`

        }
        strHTML += '</tr>\n'
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
    console.log(strHTML);

}


function setMinesNegsCount(cellI, cellJ, mat) {

    var setMinesNegsCount = 0

    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= mat[i].length) continue;
            if (i === cellI && j === cellJ) continue;
            if (mat[i][j] === MINE) setMinesNegsCount++;
        }
    }
    return setMinesNegsCount;

}



function cellClicked(elCell, i, j) {
    console.log('elCell:', elCell, i, j);
    console.log(gBoard[i][j]);


}



function cellMarked(elCell) {



}


function checkGameOver() {


}


function expandShown(board, elCell, i, j) {





}





// function setMinesRandomly() {
    //  getting random indexes rely on gLevel.mines

    // place mines in these random indexed

    // first update model than dom (gboard and then render)
// }




























































































// for (var i = 0; i < gLevel.SIZE; i++) {
//     board.push([])
//     for (var j = 0; j < gLevel.SIZE; j++) {
//         board[i][j] = {
//             minesAroundCount: 0,
//             isShown: true,
//             isMine: false,
//             isMarked: true,
//         }

//     }
// }












// function renderBoard() {
//     var strHTML = ''
//     for (var i = 0; i < gBoard.length; i++) {
//         strHTML += `<tr class="cinema-row" >`
//         for (var j = 0; j < gBoard[0].length; j++) {
//             const cell = gBoard[i][j]

//             var className = (cell.isMine) ? MINE : ''
//             if (cell.isBooked) className += ' booked'

//             var title = (cell.isSeat) ? `Seat: ${i + 1}, ${j + 1}` : ''
//             strHTML += `<td class="cell ${className}" title="${title}"
//                             onclick="cellClicked(this, ${i}, ${j})" >
//                          </td>`
//         }
//         strHTML += `</tr>`
//     }
//     // console.log(strHTML)

//     var elBoard = document.querySelector('.board')
//     elBoard.innerHTML = strHTML
//     console.log(strHTML);
// }


// function cellClicked(elCell, i, j) {
//     const cell = gBoard[i][j]

//     if (!cell.isSeat || cell.isBooked) return
//     console.log('Cell clicked: ', elCell, i, j)

//     // Only a single seat should be selected
//     if (gElSelectedSeat) {
//         gElSelectedSeat.classList.remove('selected')
//     }
//     elCell.classList.add('selected')
//     gElSelectedSeat = elCell
//     // TODO: Support Unselecting a seat
//     showSeatDetails({ i: i, j: j })
// }


// function createMine(board) {
//     // TODO: initialize gPacman...
//     gPacman = {
//         location: { i: 3, j: 5 },
//         isSuper: false,
//     }
//     board[gPacman.location.i][gPacman.location.j] = PACMAN
// }

// function renderCell(location, value) {
//     // Select the elCell and set the value
//     const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
//     elCell.innerHTML = value
// }

// renderCell












// function buildBoard() {
//     var SIZE = 4
//     var board = []
//     for (var i = 0; i < SIZE; i++) {
//         board.push([])
//         for (var j = 0; j < SIZE; j++) {
//             board[i][j] = gBoard
//             if (i === 1 && j === 1) board[i][j] = MINE
//             if (i === 2 && j === 3) board[i][j] = MINE


//         }
//     }
//     return board
// }
