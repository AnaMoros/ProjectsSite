const emojis = [
    "๐","๐","๐","๐งก","๐",
    "๐ง","โก๏ธ","๐","๐ฑ","๐",
    "๐งก","๐ซ","๐","๐","โก๏ธ",
    "โก๏ธ","๐ถ","๐","๐","๐ฑ",
    "๐","๐ซ","๐","๐","๐",
    "โก๏ธ","๐","๐","๐ฑ","๐",
    "๐ซ","๐","๐","โก๏ธ","๐งก",
    "๐","๐","๐"
    ]

const allEmojisP = document.getElementById("all-emojis-p")
const uniqueEmojisP = document.getElementById("unique-emojis-p")

for (let emoji of emojis) {
    allEmojisP.textContent += emoji
}

document.getElementById("btn-filter").addEventListener("click", () => {
uniqueEmojisP.textContent = Array.from(new Set(emojis)).join('');
});

document.getElementById("btn-arrange").addEventListener("click", () => {
  uniqueEmojisP.textContent = emojis.sort((a, b) => a > b ? 1 : a < b ? -1 : 0).join('');
  });
