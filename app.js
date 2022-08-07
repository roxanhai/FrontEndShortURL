const shortURLForm = document.querySelector(".form");
const inputURL = document.getElementById("create-short-url");
const url = "http://localhost:8080/shortURL/request";
const resultURL = document.getElementById("short-url");

const renderData = (shortURL) => {
  console.log(shortURL.short62);
  let finalResult = shortURL.short62;
  resultURL.href = finalResult;
  resultURL.innerHTML = finalResult;
};
shortURLForm.addEventListener("submit", (e) => {
  console.log(inputURL.value);
  e.preventDefault();
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      longUrl: inputURL.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => renderData(data));
});

// const shortURLForm = document.querySelector(".shortURLForm");
// const inputURL = document.getElementById("inputURL");
// const url = "http://localhost:8080/shortURL/request";
// const resultURL = document.getElementById("resultURL");

// const renderData = (shortURL) => {
//   console.log(shortURL.short62);
//   let finalResult = shortURL.short62;
//   resultURL.href = finalResult;
//   resultURL.innerHTML = finalResult;
// };
// shortURLForm.addEventListener("submit", (e) => {
//   console.log(inputURL.value);
//   e.preventDefault();
//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       longUrl: inputURL.value,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => renderData(data));
// });
