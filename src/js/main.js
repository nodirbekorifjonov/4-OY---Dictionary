import "../css/style.css";
import "./fonts";
import request from "./request";
import { findWord } from "./updateUI";
import "./mode";
const searchForm = document.querySelector(".search__form");
const synonymLink = document.querySelector("#synonymLink");

const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let word = searchForm.search.value;

  request(API, word)
    .then((data) => {
      findWord(data);
    })
    .catch((err) => {
      alert(err.message);
    });

  //   findWord(word);

  searchForm.search.value = "";
});
