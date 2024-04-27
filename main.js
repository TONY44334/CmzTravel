const Body = document.querySelector('body');
let Imgs = ['/assets/193996.jpg', '/assets/2941946.jpg',
    '/assets/2941969.jpg',
    '/assets/wallpaperflare.com_wallpaper.jpg'
];
const Ibtn = document.getElementById('i_btn')
let i = 0;
let Media = window.matchMedia("(max-width: 700px)")

setInterval(run, 6000)

async function run() {

    if (i > Imgs.length - 1) {
        i = 0;
    }
    if (Media.matches) {

        Body.style.background = "wallpaperflare.com_wallpaper.jpg";
        clearInterval(run);
    }
    Body.style.transition = " -4s ease-in"
    Body.style.background = `url(${Imgs[i]})`;
    Body.style.backgroundRepeat = "no-repeat";
    Body.style.backgroundSize = "cover";
    Body.style.backgroundAttachment = "fixed";
    i++;
}

Ibtn.addEventListener("click", ()=>{
     
    window.location.assign("https://logincmz.pages.dev")
})
