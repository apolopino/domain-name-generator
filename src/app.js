/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".com", ".io", ".org"];

  //   this.console.log(pronoun.length);

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dom.length; l++) {
          let domain = pronoun[i] + adj[j] + noun[k] + dom[l];
          this.document.getElementById("domains").innerHTML += domain + "<br>";
        }
      }
    }
  }

  //   this.document.getElementById("domains").innerHTML = "Holi";
};
