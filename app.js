const inputEl1 = document.querySelector('#inputEl1');
const inputEl2 = document.querySelector('#inputEl2');
const formEl = document.querySelector('form');
const ulEl = document.querySelector('#new-words');
const ulEl2 = document.querySelector('#old-words');
const titles = document.querySelectorAll('.title');


let count = 1;


function validate() {
    if (!inputEl1.value) {
        inputEl1.style.outlineColor = 'red';
        inputEl1.focus();
        return;
    }
    if (!inputEl2.value) {
        inputEl2.style.outlineColor = 'red';
        inputEl2.focus();
        return;
    }
}


formEl.addEventListener('submit', event => {
    event.preventDefault();

    validate();
    if (inputEl1.value && inputEl2.value) {
        titles.forEach(function(title) {
            title.style.display = 'block';
        })
        const li = document.createElement('li');
        li.innerHTML = `
            <p>${count}.${inputEl1.value}-${inputEl2.value }</p>
            <div class="icons">  
                <i class="del-btn fa-solid fa-xmark" style="color: #ff0000;"></i> 
                <i class="add-btn  fa-solid fa-check" style="color: #0000ff;"></i>
                <i class="like-words fa-regular fa-star" style="color: #93968d;"></i>
                <i class="fa-solid fa-star" style="color: #ffff00; display:none;"></i>
            </div>
        `;
        ulEl.appendChild(li);
        count++;
        formEl.reset();
        inputEl1.focus();

    }
})

ulEl.addEventListener("click", function(event) {
    const target = event.target;
    if (target.classList.contains('del-btn')) {
        let delEl = target.parentElement.parentElement;
        delEl.remove();
        return;
    } else if (target.classList.contains('add-btn')) {
        let addEl = target.parentElement.parentElement;
        ulEl2.appendChild(addEl);
    } else if (target.classList.contains('like-words')) {
        target.style.display = 'none';

        console.log(target);
    }
})