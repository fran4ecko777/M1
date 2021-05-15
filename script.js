
const removeButton = document.querySelectorAll('.button-remove'); // Кнопка удаление
const sortButton = document.querySelector('.button-sort'); // Кнопка сортировки
const item = document.querySelector('.item');
const buttonAdd = document.querySelector('.button-add');
const itemBox = document.querySelector('.item-box');
let input = document.querySelectorAll('.input-zone');
let tracker = 'sort';
let tasks = [item];

item.querySelector('.button-remove').addEventListener('click', function() {
    removeTask(item);
});

buttonAdd.addEventListener('click', ()=>  {
    
    let newElement = item.cloneNode(true);
    newElement.querySelector('.input-zone').value = '';
    itemBox.prepend( newElement );
    tasks.push(newElement);

    newElement.querySelector('.button-remove').addEventListener('click', () => {
        removeTask(newElement);
    })
});

sortButton.addEventListener('click', (e) => {
    if (tracker != 'sortUp') {
        e.target.src = './image/sortUpColored.svg';
        
        tasks.sort((a, b) => {
            if (a.querySelector('.input-zone').value.toLowerCase() > b.querySelector('.input-zone').value.toLowerCase()) {
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
            if (a.querySelector('.input-zone').value.toLowerCase() < b.querySelector('.input-zone').value.toLowerCase()) {
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
    itemBox.innerHTML = '';

    tasks.forEach((task) => {
        itemBox.prepend(task);
    }); 
}

function removeTask(element) {
    tasks = tasks.filter((item) => {       
        return item != element;
    });
    refreshTasks(tasks);
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

