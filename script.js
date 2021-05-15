
const removeButton = document.querySelectorAll('.button-remove'); // Кнопка удаление
const sortButton = document.querySelector('.button-sort'); // Кнопка сортировки
const item = document.querySelector('.item');
const buttonAdd = document.querySelector('.button-add');
const itemBox = document.querySelector('.item-box');
let input = document.querySelectorAll('.input-zone');
let tracker = 'sort';
let tasks = [item];

item.querySelector('.button-remove').addEventListener('click', function() {
    tasks = tasks.filter((taskItem) => {
        return taskItem != item;
    });
    refreshTasks(tasks);
});

buttonAdd.addEventListener('click', ()=>  {
    
    let newElement = item.cloneNode(true);
    newElement.querySelector('.input-zone').value = '';
    itemBox.append( newElement );
    tasks.push(newElement);

    newElement.querySelector('.button-remove').addEventListener('click', () => {
        tasks = tasks.filter((item) => {       
            return item != newElement
        });
        
        refreshTasks(tasks);
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

