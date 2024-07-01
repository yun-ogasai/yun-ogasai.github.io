export function initCounter() {
  const decreaseBtn = document.getElementById('decrease') as HTMLButtonElement;
  const increaseBtn = document.getElementById('increase') as HTMLButtonElement;
  const numberDisplay = document.getElementById('number') as HTMLSpanElement;

  let count = 0;

  increaseBtn.addEventListener('click', () => {
    count++;
    numberDisplay.textContent = count.toString();
  });

  decreaseBtn.addEventListener('click', () => {
    alert("you click '-' !");
  });
}