const width = 28
const grid = document.querySelector('.grid')
const scoreDisplay = document.getElementById("score")
let squares = []
let score=0
//28 * 28 = 784
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

function createBoard() {
    
    for (let i = 0; i < layout.length; i++){
        //create element with a class for each cycle through
        const square = document.createElement("div"); 
        grid.appendChild(square)
        squares.push(square)
        
        
        if (layout[i]===0) {
            squares[i].classList.add('pac-dot')
        }
        else if (layout[i]===1) {
                squares[i].classList.add('wall')
        }
        else if (layout[i]===2) {
            squares[i].classList.add('ghost-lair')

        }else if (layout[i]===3) {
            squares[i].classList.add('power-pellet')

        }else if (layout[i]===4) {
            squares[i].classList.add('empty')
        }
    }
}

createBoard()

let pacmanCurrentIndex = 490

squares[pacmanCurrentIndex].classList.add('pacman')

function control(e) {
    squares[pacmanCurrentIndex].classList.remove('pacman')
    // if (e.keyCode === 40) {
    //     console.log('pressed down')
    // } else if (e.keyCode === 38) {
    //     console.log('pressed up')
    // } else if (e.keyCode === 39) {
    //     console.log('pressed right')
    // } else if (e.keyCode === 37) {
    //     console.log('pressed left')
    // }
switch(e.keyCode) {
   

    case 40:
        console.log('pressed down')
        
        if (!squares[pacmanCurrentIndex + width].classList.contains('wall') &&
        !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') &&
        pacmanCurrentIndex + width < width * width) pacmanCurrentIndex += width
        break
        case 38:
            console.log('pressed up')
            if (!squares[pacmanCurrentIndex - width].classList.contains('wall') &&
            !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair') &&
             pacmanCurrentIndex - width >=0) pacmanCurrentIndex -= width
            break
            case 39:
                console.log('pressed right')
                if(!squares[pacmanCurrentIndex + 1].classList.contains('wall') && 
                !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair') &&
                pacmanCurrentIndex % width < width -1) {
                    pacmanCurrentIndex +=1
                    if (pacmanCurrentIndex === 391) {
                        pacmanCurrentIndex = 364
                    }
                }
                break
                case 37:
                    console.log('pressed left')
                    if (!squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair') &&
                    pacmanCurrentIndex % width !== 0) {
                        pacmanCurrentIndex -=1
                        if (pacmanCurrentIndex === 364) {
                            pacmanCurrentIndex = 391
                        }
                    }
                    break
    }
    squares[pacmanCurrentIndex].classList.add('pacman')
    pacDotEaten()


}

//up key - 38
// left - 37
// right - 39
document.addEventListener('keyup', control)

function pacDotEaten() {
if (squares[pacmanCurrentIndex].classList.contains('pac-dot')){
    //add 1 to score
    score ++
    scoreDisplay.textContent=score
    // //remove pacdot from layout
    // square[pacmanCurrentIndex].classList.remove('pac-dot')
}
}
