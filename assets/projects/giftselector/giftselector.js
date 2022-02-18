document.getElementById('btn').addEventListener('click', calculate);

const costEl = document.getElementById('cost-el');
const resultEl = document.getElementById('result');
const giftSelections = [document.getElementById('food-select'), document.getElementById('transport-select'), document.getElementById('balloon-checkbox')];

function calculate() {
  resultEl.innerText = 'Total gift cost: '
  costEl.innerText = checkSelections(giftSelections);
}

function checkSelections(selections) {
  let total = 0;
  for (let selection of selections) {
    reset(selection);
    if ((selection.type === 'select-one' || selection.checked) && selection.value) {
      total += numberfy(selection);
    } else if (!selection.value) {
      noSelection(selection);
      return 'Please check all gift options';
    }
  }
  return '$' + total;
}

function noSelection(selection) {
  selection.classList.add('error');
  resultEl.innerText = ''
}

function reset(selection) {
  selection.classList.remove('error');
}

function numberfy(n) {
  return n.value ? Number(n.value) : NaN;
}
