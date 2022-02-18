// helper functions
const roundTo3 = (x) => Math.round(x * 1000) / 1000;
const pluralize = (count, noun, suffix = 's') => count === '1' ? noun : noun !== 'foot' ? noun + suffix : 'feet'

document.getElementById('number').addEventListener('change', (e) => {
  const variable = e.target.value
  const formula = {
    'metersToFeet': variable * 3.281,
    'feetToMeters': variable / 3.281,
    'litersToGallons': variable / 3.785,
    'gallonsToLiters': variable * 3.785,
    'kilosToPounds': variable * 2.205,
    'poundsToKilos': variable / 2.205
  };

  // update main value
  document.querySelector('#varToConvert').innerText = variable

  const numUnitPair = document.querySelectorAll('.num-name-pair')

  for(let pair of numUnitPair) {
    const num = pair.querySelector('.num, .num-convert');
    const name = pair.querySelector('.unit-name');
    const unit = name.className.slice(10)
  //update variable and conversion numbers
  num.innerText = !formula[num.id] ? variable : roundTo3(formula[num.id])
  // update unit name if it's plural
  name.innerText = pluralize(num.innerText, unit)
 }

});
