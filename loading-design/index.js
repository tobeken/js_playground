const counterEl = document.querySelector(".counter");
const barEl = document.querySelector(".loading-front");
const letterEl = document.querySelector("h1")


let idx = 0;


updateNum()

function updateNum(){
    //％表示のテキスト
    counterEl.innerHTML = idx +"%"
    //インジケーター
    barEl.style.width = idx +"%"
    //idxを1ずつ増やしていく
    idx++

    if(idx < 101) {
        //100まで関数を実行する
        setTimeout(updateNum,20)
    }
    if (idx === 100) {
        //idx=0から始めて，+1ずつしていっているので，100になると，テキストや色を変更させるコードをここに記載する
        letterEl.innerText = "GO!"
        letterEl.style.color = "#FE7B69"
        counterEl.style.color ="#FE7B69"
        barEl.style.backgroundColor="#FE7B69"
    }
}

