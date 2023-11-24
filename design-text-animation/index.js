const containerEl = document.querySelector(".container");

//タイトルとして表示させるテキストをリスト化
const Title = ["デザインのプロフェッショナル集団として","  ","本質を解決するソリューションを提案","  ","DXへディープダイブせよ","  "];

//タイトルリストのインデックスを取り扱う変数
let titleIndex = 0;

//タイトルリストに含まれるテキストのそれぞれの長さを示す変数
let titleChar = 0;

//関数の実行
textAnim();


//タイトルのテキストを一字ずつ順に表示させる関数
function textAnim(){
    titleChar++
    containerEl.innerHTML =`
    <h1>${Title[titleIndex].slice(0,titleChar)}</h1>
    `
    //もし，タイトルの長さの変数とタイトルテキストの長さが一緒になった場合，次のタイトルリストを０番目の文字から表示させる
    if(titleChar === Title[titleIndex].length){
        titleIndex++
        titleChar = 0
    }
    //タイトルリストが最後まで行ったら最初のテキストに戻る
    if(titleIndex===Title.length){
        titleIndex = 0
    }

    setTimeout(textAnim,200)
    

}
