'use strict'
const MINE = 'MINE'
// const MINE_IMG = '💣'

var gLevel = {
    SIZE: 4,
    MINES: 2
};

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
}

var gBoard;

function initGame() {
    gBoard = buildBoard()
    console.table(gBoard)
    // renderBoard(gBoard)

}

function buildBoard() {

    const board = []
    for (var i = 0; i < gLevel.SIZE; i++) {
        board.push([])
        for (var j = 0; j < gLevel.SIZE; j++) {
            const cell = board[i][j]
            cell = {
                minesAroundCount: 0,
                isShown: true,
                isMine: false,
                isMarked: true,
                gameElement: null,
            }

        }
    }
    board[1][1].gameElement = MINE
    board[2][2].gameElement = MINE
    return board
}

// Render the board to an HTML table
// function renderBoard(board) {

//     var strHTML = ''

//     for (var i = 0; i < board.length; i++) {
//         strHTML += '<tr>\n'
//         for (var j = 0; j < board[0].length; j++) {
//             strHTML += `\t<td onclick="cellClicked(this, ${i}, ${j})"></td>\n`

//         }
//         strHTML += '</tr>\n'
//     }
//     var elBoard = document.querySelector('.board')
//     elBoard.innerHTML = strHTML
//     console.log(strHTML);

// }



function cellClicked(elCell, cellI, cellJ) {




}


// if (elCell.innerText === LIFE) {
//     // Update the model
//     gBoard[cellI][cellJ] = SUPER_LIFE

//     // Update the DOM
//     elCell.innerText = SUPER_LIFE

//     blowupNegs(cellI, cellJ)

// }




    // if (currCell === MINE) {
            //     currCell.isMine === true
            //     currCell.gameElement === MINE_IMG
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
