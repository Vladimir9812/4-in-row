
let bin = document.querySelectorAll('th');
let cell = document.querySelectorAll('td');
let gamer = 1;
let NumberBin;
let cells = [];
let IndexCell = 0;

let first_gamer = prompt('Введите имя красного игрока ?');
let second_gamer = prompt('Введите имя желтого игрока ?');

for(let i = 0;i<6;i++) {
    cells[i] = [];
    for(let j = 0;j<7;j++) {
        cells[i][j] = cell[IndexCell];
        IndexCell++;
    }
}


let SetBackground = (item) => {
    gamer%2==0 ? item.style.backgroundImage = "url('yellow.png')" : item.style.backgroundImage = "url('red.png')",
    item.style.backgroundRepeat = 'no-repeat',
    item.style.backgroundPosition = 'center'
}


let PaintCell= () => {
    for(let i = 5;i>=0;i--) {
        if(cells[i][NumberBin].style.backgroundImage != '') continue;
        SetBackground(cells[i][NumberBin]);
        break;
    }
}


let RightDiagonal = (i,j) => {
    if (cells[i][j].style.backgroundImage != "") {
        if ((cells[i][j].style.backgroundImage == cells[i-1][j+1].style.backgroundImage) &&
            (cells[i][j].style.backgroundImage == cells[i-2][j+2].style.backgroundImage) &&
            (cells[i][j].style.backgroundImage == cells[i-3][j+3].style.backgroundImage )) {
                return true;
        } else return false;
    }
}


let LeftDiagonal = (i,j) => {
    if (cells[i][j].style.backgroundImage != "") {
        if ((cells[i][j].style.backgroundImage == cells[i-1][j-1].style.backgroundImage ) &&
            (cells[i][j].style.backgroundImage == cells[i-2][j-2].style.backgroundImage) &&
            (cells[i][j].style.backgroundImage == cells[i-3][j-3].style.backgroundImage)) {
                return true;
        } else return false;
    }
}


let Check = () => {
    //Проверка по вертикали
    for (let i = 0;i<7;i++) {
        for (let j = 5;j>2;j--) {
            if ((cells[j][i].style.backgroundImage == cells[j-1][i].style.backgroundImage && cells[j][i].style.backgroundImage != "" )&& 
                (cells[j][i].style.backgroundImage == cells[j-2][i].style.backgroundImage && cells[j][i].style.backgroundImage != "")&&
                (cells[j][i].style.backgroundImage == cells[j-3][i].style.backgroundImage && cells[j][i].style.backgroundImage != "")) {
                gamer%2==0 ? alert('Победил игрок '+second_gamer) : alert('Победил игрок '+first_gamer);
                alert('Конец игры!!!');
                window.location.href = window.location.href;
            }
        }
    }
    //Проверка по горизонтали
    for (let i = 0;i<4;i++) {
        for (let j = 5;j>=0;j--) {
            if ((cells[j][i].style.backgroundImage == cells[j][i+1].style.backgroundImage && cells[j][i].style.backgroundImage != "" )&& 
                (cells[j][i].style.backgroundImage == cells[j][i+2].style.backgroundImage && cells[j][i].style.backgroundImage != "")&&
                (cells[j][i].style.backgroundImage == cells[j][i+3].style.backgroundImage && cells[j][i].style.backgroundImage != "")) {
                gamer%2==0 ? alert('Победил игрок '+second_gamer) : alert('Победил игрок '+first_gamer);
                alert('Конец игры!!!');
                window.location.href = window.location.href;
            }
        }
    }

    //Проверка по диагонали
    if (RightDiagonal(3,0) || RightDiagonal(4,0) || 
        RightDiagonal(5,0) || RightDiagonal(3,1) || 
        RightDiagonal(4,1) || RightDiagonal(5,1) || 
        RightDiagonal(3,2) || RightDiagonal(4,2) || 
        RightDiagonal(5,2) || RightDiagonal(3,3) || 
        RightDiagonal(4,3) || RightDiagonal(5,3)) {
            gamer%2==0 ? alert('Победил игрок '+second_gamer) : alert('Победил игрок '+first_gamer);
            alert('Конец игры!!!');
            window.location.href = window.location.href;
        }

    if (LeftDiagonal(3,3) || LeftDiagonal(3,4) || 
        LeftDiagonal(3,5) || LeftDiagonal(3,6) || 
        LeftDiagonal(4,3) || LeftDiagonal(4,4) || 
        LeftDiagonal(4,5) || LeftDiagonal(4,6) || 
        LeftDiagonal(5,3) || LeftDiagonal(5,4) || 
        LeftDiagonal(5,5) || LeftDiagonal(5,6)) {
            gamer%2==0 ? alert('Победил игрок '+second_gamer) : alert('Победил игрок '+first_gamer);
            alert('Конец игры!!!');
            window.location.href = window.location.href;
        }
    }


bin.forEach(function(key,i,arr) {
   key.addEventListener('mouseover',()=> [
    SetBackground(key)
   ]);
    key.addEventListener('mouseout',() => key.style.background = "white")
    key.addEventListener('click',() => [
        NumberBin = i,
        PaintCell(),
        Check(),
        gamer++,
        SetBackground(key),
    ])
});
