function funkcija() {

  let txt = document.getElementById("text_id").value;
  let txt2 = document.getElementById("text_id2").value;
  let txt3 = document.getElementById("text_id3").value;
  let idas1 = document.getElementById("idas");

  for (let i = 0; i <= 2; i++) {
    const p1 = document.createElement("p");
    p1.className = "pivas" + i;
    idas1.appendChild(p1);
  }

  let pivas0 = document.querySelector(".pivas0")
  pivas0.innerText = txt
  let pivas1 = document.querySelector(".pivas1")
  pivas1.innerText = txt2
  let pivas2 = document.querySelector(".pivas2")
  pivas2.innerText = txt3

}
funkcija();
