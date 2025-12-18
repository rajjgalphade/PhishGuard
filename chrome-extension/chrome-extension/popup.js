document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("checkBtn").addEventListener("click", function () {

    let url = document.getElementById("url").value;
    let result = document.getElementById("result");

    if (url.trim() === "") {
      result.innerText = "Please enter a URL";
      result.style.color = "orange";
      return;
    }

    let score = 0;

    // Rule 1: No HTTPS
    if (url.startsWith("http://")) {
      score++;
    }

    // Rule 2: Too many dots
    let dots = (url.match(/\./g) || []).length;
    if (dots > 3) {
      score++;
    }

    // Rule 3: Suspicious words
    let badWords = ["login", "verify", "free", "secure", "account", "update"];

    badWords.forEach(function (word) {
      if (url.toLowerCase().includes(word)) {
        score++;
      }
    });

    if (score >= 2) {
      result.innerText = "PHISHING WARNING! Do NOT open this link";
      result.style.color = "red";
    } else {
      result.innerText = "This link looks SAFE";
      result.style.color = "lightgreen";
    }

  });

});
