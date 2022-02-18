const customGreeting = document.getElementById('greeting');
const inputs = [document.getElementById('recipient'), document.getElementById('greeting-select'), customGreeting, document.getElementById('sender')];

for (const input of inputs) {
  input.addEventListener('input', writeGreeting);
}

function writeGreeting(e) {
  const message = document.querySelector('#' + e.target.id + '-write');
  if (e.target.type === 'select-one') {
    handleSelect(e, message);
  } else {
    handleInput(e, message);
  }
}

function handleInput(e, message) {
  if (e.target.value) {
    message.classList.remove('hidden');
    message.textContent = e.target.id === 'recipient'
              ? `To ${e.target.value},`
              : e.target.id === 'sender'
              ? `Love, ${e.target.value}`
              : `${e.target.value}`;
  } else {
    message.classList.add('hidden');
  }
}

function handleSelect(e, message) {
  if (e.target.value !== 'write') {
    customGreeting.classList.add('hidden');
    message.classList.remove('hidden');
    message.textContent = e.target.value;
  } else {
    message.classList.add('hidden');
    customGreeting.classList.remove('hidden');
  }
}
