const btnOpen = document.getElementById('btn-open');
const btnOpen2 = document.getElementById('btn-open2');
const btnOpen3 = document.getElementById('btn-open3');
const btnOpen4 = document.getElementById('btn-open4');
const btnOpen5 = document.getElementById('btn-open5');
const btnOpen6 = document.getElementById('btn-open6');
const btnOpen7 = document.getElementById('btn-open7');
const btnOpen8 = document.getElementById('btn-open8');
const btnIcon = document.getElementById('icon-btn')


const modal = document.getElementById('wrapper-modal');
const modal2 = document.getElementById('wrapper-modal2');



const overlay = document.getElementById('overlay');
const overlay2 = document.getElementById('overlay2');

const btnClose = document.getElementById('btn-close');
const btnClose2 = document.getElementById('btn-close2');


btnOpen.addEventListener('click', () => {
    modal.classList.add('active');
});
btnOpen2.addEventListener('click', () => {
    modal.classList.add('active');
});
btnOpen3.addEventListener('click', () => {
    modal.classList.add('active');
});
btnOpen4.addEventListener('click', () => {
    modal.classList.add('active');
});
btnOpen5.addEventListener('click', () => {
    modal.classList.add('active');
});
btnOpen6.addEventListener('click', () => {
    modal.classList.add('active');
});
btnOpen7.addEventListener('click', () => {
    modal.classList.add('active');
});
btnOpen8.addEventListener('click', () => {
    modal.classList.add('active');
});
btnIcon.addEventListener('click', () => {
    modal2.classList.add('active');
});


const closeModel = () => {
    modal.classList.remove('active');
};
const closeModel2 = () => {
    modal2.classList.remove('active');
};
overlay.addEventListener('click', closeModel);
overlay2.addEventListener('click', closeModel2);
btnClose.addEventListener('click', closeModel);
btnClose2.addEventListener('click', closeModel2);