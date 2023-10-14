// console.log('Campo Minato');

const gridDomElement = document.querySelector('.grid');
// console.log(gridDomElement);

const btnDomElement = document.getElementById('btn-play');
// console.log(btnDomElement);

const selectDomElement = document.getElementById('difficulty');
// console.log(selectDomElement);



btnDomElement.addEventListener('click', function() {
    
    gridDomElement.innerHTML = '';

    const difficultyLevel = (selectDomElement.value);
    // console.log(difficultyLevel);

    if (difficultyLevel == 1) {
        for (let i = 0; i < 100; i ++) {
            const n = i + 1;
            // console.log(n);
    
            const htmlCell = `<div class="cell-100">${n}</div>`
            // console.log(htmlCell);
    
            gridDomElement.innerHTML += htmlCell
        }
    
        const cellDomElement = document.querySelectorAll('.cell-100');
        // console.log(cellDomElement);
    
        for (let i = 0; i < cellDomElement.length; i++) {
            const currentCell = cellDomElement[i];
            // console.log(currentCell);
    
            currentCell.addEventListener('click', function() {
                currentCell.classList.add('bg-blue');
                console.log('La casella cliccata è la numero ' + (i + 1));
            })
        }
    } else if (difficultyLevel == 2) {
        for (let i = 0; i < 81; i ++) {
            const n = i + 1;
            // console.log(n);
    
            const htmlCell = `<div class="cell-81">${n}</div>`
            // console.log(htmlCell);
    
            gridDomElement.innerHTML += htmlCell
        }
    
        const cellDomElement = document.querySelectorAll('.cell-81');
        // console.log(cellDomElement);
    
        for (let i = 0; i < cellDomElement.length; i++) {
            const currentCell = cellDomElement[i];
            // console.log(currentCell);
    
            currentCell.addEventListener('click', function() {
                currentCell.classList.add('bg-blue');
                console.log('La casella cliccata è la numero ' + (i + 1));
            })
        }
    } else {
        for (let i = 0; i < 49; i ++) {
            const n = i + 1;
            // console.log(n);
    
            const htmlCell = `<div class="cell-49">${n}</div>`
            // console.log(htmlCell);
    
            gridDomElement.innerHTML += htmlCell
        }
    
        const cellDomElement = document.querySelectorAll('.cell-49');
        // console.log(cellDomElement);
    
        for (let i = 0; i < cellDomElement.length; i++) {
            const currentCell = cellDomElement[i];
            // console.log(currentCell);
    
            currentCell.addEventListener('click', function() {
                currentCell.classList.add('bg-blue');
                console.log('La casella cliccata è la numero ' + (i + 1));
            })
        }
    }
})