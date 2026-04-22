const ACCESS_KEY = "ng3LdaR2ApTztBiNnSs4meVaHoxChAsVBWe0MK9b1Gk";

// get search text
function getQuery() {
  return document.getElementById("searchInput").value;
}

// display images
function displayImages(images) {
  const container = document.getElementById("images");
  container.innerHTML = "";

  images.forEach(img => {
    const image = document.createElement("img");
    image.src = img.urls.small;
    container.appendChild(image);
  });
}

// =======================
// 1. XHR
// =======================
function searchXHR() {
  const query = getQuery();

  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.unsplash.com/search/photos?query=${query}`);
  xhr.setRequestHeader("Authorization", `Client-ID ${ACCESS_KEY}`);

  xhr.onload = function () {
    const data = JSON.parse(xhr.responseText);
    displayImages(data.results);
  };

  xhr.send();
}

// =======================
// 2. Fetch (Promises)
// =======================
function searchFetch() {
  const query = getQuery();

  fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`
    }
  })
    .then(res => res.json())
    .then(data => displayImages(data.results))
    .catch(err => console.log(err));
}

// =======================
// 3. Async / Await
// =======================
async function searchAsync() {
  const query = getQuery();

  try {
    const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
      }
    });

    const data = await res.json();
    displayImages(data.results);

  } catch (error) {
    console.log(error);
  }
}