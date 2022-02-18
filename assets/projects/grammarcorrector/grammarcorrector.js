const text = document.getElementById('paragraph')

document.getElementById("btn").addEventListener("click", () => {
 text.innerText = text.innerText.
        toLowerCase().
        split(' ').
        map(word => word[0].toUpperCase() + word.slice(1)).
        join(' ')
});
