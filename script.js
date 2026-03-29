const images = [
  {
    url: "https://picsum.photos/id/1015/600/400",
    caption: "Mountain View",
    favorite: true
  },
  {
    url: "https://picsum.photos/id/1025/600/400",
    caption: "Cute Dog",
    favorite: false
  },
  {
    url: "https://picsum.photos/id/1035/600/400",
    caption: "Forest Path",
    favorite: true
  },
  {
    url: "https://picsum.photos/id/1041/600/400",
    caption: "Beach Scene",
    favorite: false
  },
  {
    url: "https://picsum.photos/id/1069/600/400",
    caption: "City Buildings",
    favorite: true
  },
  {
    url: "https://picsum.photos/id/1074/600/400",
    caption: "River Side",
    favorite: false
  }
];

const gallery = document.getElementById("gallery");
const modeBtn = document.getElementById("modeBtn");
const filterBtn = document.getElementById("filterBtn");
const showAllBtn = document.getElementById("showAllBtn");

function renderGallery(imageArray) {
  gallery.innerHTML = "";

  for (let i = 0; i < imageArray.length; i++) {
    const item = imageArray[i];

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = item.url;
    img.alt = item.caption;

    const caption = document.createElement("div");
    caption.className = "caption";
    caption.textContent = item.caption;

    if (item.favorite === true) {
      const tag = document.createElement("div");
      tag.className = "favorite-tag";
      tag.textContent = "Favorite";
      caption.appendChild(document.createElement("br"));
      caption.appendChild(tag);
    }

    card.appendChild(img);
    card.appendChild(caption);
    gallery.appendChild(card);
  }
}

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

filterBtn.addEventListener("click", function () {
  const favorites = [];

  for (let i = 0; i < images.length; i++) {
    if (images[i].favorite === true) {
      favorites.push(images[i]);
    }
  }

  renderGallery(favorites);
});

showAllBtn.addEventListener("click", function () {
  renderGallery(images);
});

renderGallery(images);
