let ulFor = document.querySelectorAll('.ul');
let liFor = document.querySelectorAll('.btn-container');

liFor.forEach((item) => {
    item.addEventListener('click', () => {
        liFor.forEach((list) => {
            list.style.backgroundColor = 'rgba(36, 1, 68, 0.853)';
        })
        item.style.backgroundColor = 'rgba(36, 1, 68, 0.287)';
        item.style.backdropFilter = 'blur(8px)';
    })
});

// 1
let removeBtn = document.querySelector('#btn-1');

removeBtn.addEventListener('click', () => {
    let parent = removeBtn.parentElement;
    parent.remove();
    friendNumber.innerHTML = 'Friend Number ' + (length - 1);
});



// 2
let removingBtn = document.querySelector('#btn-2');

removingBtn.addEventListener('click', () => {
    let parenting = removingBtn.parentElement
    parenting.remove();
    friendNumber.innerHTML = 'Friend Number ' + (length - 1);
});

// 3
let removedBtn = document.querySelector('#btn-3');

removedBtn.addEventListener('click', () => {
    let parentClick = removedBtn.parentElement
    parentClick.remove();
    friendNumber.innerHTML = 'Friend Number ' + (friendArray - friendArray[2]);
});

// 4
let removeBtnBtn = document.querySelector('#btn-4');

removeBtnBtn.addEventListener('click', () => {
    let parentingThing = removeBtnBtn.parentElement
    parentingThing.remove();
});

// 5 
let someBtn = document.querySelector('#btn-5');

someBtn.addEventListener('click', () => {
    let parentMetqiBiwo = someBtn.parentElement
    parentMetqiBiwo.remove();
});

// 6
let kostuma = document.querySelector('#btn-6');

kostuma.addEventListener('click', () => {
    let kostumasParent = kostuma.parentElement
    kostumasParent.remove();
});

// 7
let btnThing = document.querySelector('#btn-7');

btnThing.addEventListener('click', () => {
    let mutaqa = btnThing.parentElement
    mutaqa.remove();
});