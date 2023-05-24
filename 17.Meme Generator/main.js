const generateMemeBtn = document.querySelector(".generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetail = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `<h3>Meme Author :  ${author} </h3>`;
};

const generateMeme = () => {
  fetch("https://meme-api.com/gimme/wholesomememes").then((res) => {
    res.json().then((data) => {
      updateDetail(data.url, data.title, data.author);
    });
  });
};

generateMemeBtn.addEventListener("click", generateMeme);
