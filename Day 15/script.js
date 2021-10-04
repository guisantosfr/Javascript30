const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];
const deleteItem= document.querySelectorAll('.delete');
const clearAll= document.querySelector('.clear-all');

function addItem(e){
  e.preventDefault();

  const text = (this.querySelector('[name=item]')).value;

  const item = {
    text,
    done: false
  }

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], platesList){ 
  platesList.innerHTML = plates.map((plate, i) => {
    return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
      <label for="item${i}">${plate.text}</label>
      <button class="delete" onclick="dltItem(${i})">Delete</button>
    </li>
    `;
  }).join('');    
}

function toggleDone(e){
  if(!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;  
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function dltItem(index){
  console.log(index);
  items.splice(index, 1);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearAll.addEventListener('click', function(){  
  items.splice(0,items.length);
  localStorage.clear();
  populateList(items, itemsList);
})

populateList(items, itemsList);

