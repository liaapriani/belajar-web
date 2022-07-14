const textEl =  ["Mahasiswa", "Anak", "Teman", "Pemimpi"]
let count = 0;
let txtindex = 0;
let currentTxt ="";
let words = "";

(function ngetik(){

    if(count == textEl.length){
        count = 0;
    }

    currentTxt = textEl[count];

    words = currentTxt.slice(0, ++txtindex)
    document.querySelector(".efek-ngetik").textContent = words;

    if(words.length == currentTxt.length){
        count++;
        txtindex = 0;
    }
    
    setTimeout(ngetik, 500);

})();