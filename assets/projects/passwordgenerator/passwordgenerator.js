const numbers = Array.from(Array(10).keys());
const upperCase = Array.from(Array(26))
  .map((e, i) => i + 65)
  .map((x) => String.fromCharCode(x));
const lowerCase = Array.from(Array(26))
  .map((e, i) => i + 97)
  .map((x) => String.fromCharCode(x));
const specials = '!@#$%^&*()_+'.split('');

document.getElementById('btn-generate').addEventListener('click', () => {
  const all = specials.concat(lowerCase, upperCase, numbers);
  Array.from(document.getElementsByClassName('pswd-generated')).forEach((el) => {
    let password = '';
    password += pick(password, specials, 1);
    password += pick(password, lowerCase, 1);
    password += pick(password, upperCase, 1);
    // if current password length is 3 and desired password length is 10 we need 7 more chars
    const length = document.getElementById('pswd-length').value - 3
    password += pick(password, all, length);

    el.value = shuffle(password);
  });
});

// Credit to @catamphetamine: https://stackoverflow.com/a/50689199/16719402
function pick(exclusions, array, min, max) {
  let chars = '';
  const n = max === undefined ? min : min + Math.floor(Math.random() * (max - min + 1)); // not needed if same length each time use n=min

  let i = 0;
  while (i < n) {
    const character = array[Math.floor(Math.random() * array.length)];
    if (exclusions.indexOf(character) < 0 && chars.indexOf(character) < 0) {
      chars += character;
      i++;
    }
  }
  return chars;
}

// Credit to @Christoph: http://stackoverflow.com/a/962890/464744
function shuffle(string) {
  const array = string.split('');
  let tmp, current, top = array.length;

  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }

  return array.join('');
}
