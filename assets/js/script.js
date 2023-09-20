const q = document.querySelectorAll(".q");
const a = document.querySelectorAll(".a");
const arr = document.querySelectorAll(".arrow");

// SELECIONAR TODOS OS ELEMENTOS 'Q'
for (let i = 0; i < q.length; i++) {
  q[i].addEventListener("click", () => {
    // FECHAR TODAS AS RESPOSTAS ABERTAS
    for (let j = 0; j < a.length; j++) {
      if (j !== i && a[j].classList.contains("a-oppened")) {
        a[j].classList.remove("a-oppened");
        arr[j].classList.remove("arrow-rotated");
      }
    }

    // ABRIR/FECHAR A RESPOSTA CLICADA
    a[i].classList.toggle("a-oppened");
    arr[i].classList.toggle("arrow-rotated");
  });
}
