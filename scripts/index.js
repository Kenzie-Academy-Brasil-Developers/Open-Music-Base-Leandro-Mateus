let inputRange = document.querySelector(".input_Range");
let currentInputRangeValue = document.querySelector(".currentInputRangeValue");
let genreSelect = document.querySelectorAll(".genderSelect");

function updateValue(currentValue) {
  currentInputRangeValue.innerText = Number(currentValue).toFixed(2);
}

function filterAlbums() {
  sessionStorage.setItem("genreToRender", "Todos");

  genreSelect.forEach((elem) => {
    elem.addEventListener("click", () => {
      if (elem.checked) {
        sessionStorage.setItem("genreToRender", elem.id);
        let currentGenre = sessionStorage.getItem("genreToRender");
        let albumsByGenre = products.filter((elem) => elem.price <= parseInt(currentInputRangeValue.innerText) && elem.category === currentGenre);
        renderAlbums(albumsByGenre)
      }
    });
  });

  inputRange.addEventListener("mouseover", () => {
    let selectedGenre = sessionStorage.getItem("genreToRender");
    let albums    = products.filter((elem) => elem.price <= parseInt(currentInputRangeValue.innerText) && elem.category === selectedGenre);
    let allAlbums = products.filter((elem) => elem.price <= parseInt(currentInputRangeValue.innerText));

    
    if (selectedGenre === "Todos") {
      renderAlbums(allAlbums);
    } else {
      renderAlbums(albums);
    }
  });
}

function renderAlbums(albumList) {
    
  const ul = document.querySelector("ul");
  ul.innerHTML = "";

  albumList.forEach((elem) => {

    const liCard = document.createElement("li");
    const imgAlbum = document.createElement("img");
    const divCardContainer = document.createElement("div");
    const divCardInfoInside1 = document.createElement("div");
    const pBandName = document.createElement("p");
    const pAlbumYear = document.createElement("p");
    const h5AlbumName = document.createElement("h5");
    const divCardInfoInside2 = document.createElement("div");
    const divPrice = document.createElement("div");
    const pRealSign = document.createElement("p");
    const pPrice = document.createElement("p");
    const divBuy = document.createElement("div");
    const btnBuy = document.createElement("button");

    imgAlbum.src = elem.img;
    pBandName.innerText = elem.band;
    pAlbumYear.innerText = elem.year;
    h5AlbumName.innerText = elem.title;
    pRealSign.innerText = `R$ `;
    pPrice.innerText = elem.price.toFixed(2);
    btnBuy.innerText = "Comprar";

    divCardContainer.classList.add("div_CardInfoContainer");
    divCardInfoInside1.classList.add("div_CardInfoInside1");
    divCardInfoInside2.classList.add("div_CardInfoInside2");
    divPrice.classList.add("div_Price");
    btnBuy.classList.add("btn_Buy");

    divPrice.append(pRealSign, pPrice);
    divBuy.append(btnBuy);
    divCardContainer.append(
      divCardInfoInside1,
      h5AlbumName,
      divCardInfoInside2
    );
    divCardInfoInside1.append(pBandName, pAlbumYear);
    divCardInfoInside2.append(divPrice, divBuy);
    liCard.append(imgAlbum, divCardContainer);

    ul.append(liCard);
  });
}

filterAlbums();
