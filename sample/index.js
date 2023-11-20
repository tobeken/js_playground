const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");
const videos = document.querySelectorAll(".background-video");

tabs.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

    if (id) {
        btns.forEach((btn) => {
            btn.classList.remove("live");
        });
        e.target.classList.add("live");

        //video
        videos.forEach((video) => {
            video.classList.remove("live");
        });
        const videoElement = document.getElementById(`video-${id}`);
            videoElement.classList.add("live");

        //content
        articles.forEach((article)=> {
            article.classList.remove("live");
        })
        const contentElement = document.getElementById(`content-${id}`);
        contentElement.classList.add("live")
        

       

    }
});