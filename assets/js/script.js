const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

// SELECIONAR TODOS OS ELEMENTOS 'Q'
for(let i = 0; i < q.length; i++) {
    q[i].addEventListener('click', () => {
        a[i].classList.toggle('a-oppened');
        arr[i].classList.toggle('arrow-rotated');
    });
}