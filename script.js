
const removeButton = document.querySelectorAll('.button-remove'); // Кнопка удаление
const sortButton = document.querySelector('.button-sort'); // Кнопка сортировки
const item = document.querySelector('.item');
const buttonAdd = document.querySelector('.button-add');
const itemBox = document.querySelector('.item-box');
let input = document.querySelectorAll('.input-zone');
let tracker = 'sort';
let tasks = [item];


buttonAdd.addEventListener('click', ()=>  {
    
    let newElement = item.cloneNode(true);
    newElement.querySelector('.input-zone').value = '';
    itemBox.append( newElement );
    tasks.push(newElement);

    newElement.querySelector('.button-remove').addEventListener('click', () => {
        newElement.remove();
    })
});

function removeItem (removeButton) {
    removeButton.addEventListener('click', () => {
        removeButton.parentElement.remove();
    })
}

removeItem(removeButton[0])

sortButton.addEventListener('click', (e) => {
    if (tracker != 'sortUp') {
        e.target.src = './image/sortUpColored.svg';
        
        tasks.sort((a, b) => {
            if (a.querySelector('.input-zone').value > b.querySelector('.input-zone').value) {
                return 1;
            } else {
                return -1;
            }
        })
        refreshTasks(tasks);

        tracker = 'sortUp';
    } else {
        e.target.src = './image/sortColored.svg';
        
        tasks.sort((a, b) => {
            if (a.querySelector('.input-zone').value < b.querySelector('.input-zone').value) {
                return 1;
            } else {
                return -1;
            }
        })
        refreshTasks(tasks);

        tracker = 'sort';
    }
})

function refreshTasks(tasks) {
    tasks.forEach((task) => {
        itemBox.append(task);
    }); 
}


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

