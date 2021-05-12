
const removeButton = document.querySelectorAll('.button-remove'); // Кнопка удаление
const sortButton = document.querySelector('.button-sort'); // Кнопка сортировки
const item = document.querySelector('.item');
const buttonAdd = document.querySelector('.button-add');
const itemBox = document.querySelector('.item-box');
let input = document.querySelectorAll('.input-zone');
let tracker = 'sort';



buttonAdd.addEventListener('click', ()=>  {

    let newElement = item.cloneNode(true);
    newElement.children[0].value = '';
    itemBox.append( newElement );
    newElement.querySelector('.button-remove').addEventListener('click', () => {
        newElement.remove();
    })
    
});

sortButton.addEventListener('click', (e) => {
    if (tracker != 'sortUp') {
        e.target.src = './image/sortUp.svg';
        let updInput = document.querySelectorAll('.input-zone');
        let arr = [];
        updInput.forEach((item) => {
            arr.push(item.value);
        });
        arr.sort((a, b) => {
            if (a > b) {
                return 1;
            } else {
                return -1;
            }
        
        })
        for (let i = 0; i < arr.length; i++) {
            updInput[i].value = arr[i];
        }
        tracker = 'sortUp';
    } else {
        e.target.src = './image/sort.svg';
        let updInput = document.querySelectorAll('.input-zone');
        let arr = [];
        updInput.forEach((item) => {
            arr.push(item.value);
        });
        arr.sort((a, b) => {
            if (a < b) {
                return 1;
            } else {
                return -1;
            }
        
        })
        for (let i = 0; i < arr.length; i++) {
            updInput[i].value = arr[i];
        }
        tracker = 'sort';
    }
})


sortButton.addEventListener('mouseover', (e) => {
    if (tracker == 'sort') {
        e.target.src='./image/sortColored.svg';
    } else {
        e.target.src='./image/sortUpColored.svg';
    }
})
sortButton.addEventListener('mouseout', (e) => {
    if (tracker == 'sort') {
        e.target.src='./image/sort.svg';
    } else {
        e.target.src='./image/sortUp.svg';
    }
})

