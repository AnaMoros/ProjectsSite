const bgColor = (color) => document.documentElement.style.setProperty('--bg-color', color);
const heartColor = (color) => document.documentElement.style.setProperty('--heart-color', color);

document.getElementById("btn-bg").addEventListener("click", changeColor)
document.getElementById("btn-heart").addEventListener("click", changeColor)


async function changeColor(e) {
  const newColor = await fetch('https://apis.scrimba.com/hexcolors/?count=1').
        then(res => res.json()).
        then(res => res.colors[0].value ).
        catch(err => console.log(err));

  e.target.id === 'btn-bg' ? bgColor(newColor) : heartColor(newColor);
}
