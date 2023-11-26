//testimonialsのオブジェクト作成
const testimonials = [
    {
        name:"山田 ひろ子",
        photoUrl:"https://images.unsplash.com/photo-1475823678248-624fc6f85785?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"“この本は，新時代における起業家にとってのバイブルとなるだろう”",
        company:"株式会社ヤマダコンサルティング",
    },
    {
        name:"廣岡 智之",
        photoUrl:"https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=1588&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"“起業における重要なエッセンスが詰め込まれている”",
        company:"株式会社ベータトライ",
    },
    {
        name:"内田 美咲",
        photoUrl:"https://images.unsplash.com/photo-1515077678510-ce3bdf418862?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"“サーキュラーエコノミーの実践者も必読．Z世代の起業家の起爆剤となる”",
        company:"ジアース4v株式会社"
    }
];


//クラスを取得するconst定数を定義
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")
const companyEl = document.querySelector(".company")

//リスト内のインデックス番号
let idx = 0

//関数の実行
updateTestimonial()

//中身を更新する関数の定義
function updateTestimonial(){
    //testimonialsのプロパティの値を分割代入．これらを，前述のconst定数にわたす．
    const {name, photoUrl, text, company} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    companyEl.innerText = company;
    //インデックスを更新して次のuserに移動．
    idx++
    //インデックスが，testimonilasの最後まで来たら，インデックスを初期に戻す
    if(idx === testimonials.length){
        idx = 0;
    }
    
    setTimeout(updateTestimonial,2000)
}

