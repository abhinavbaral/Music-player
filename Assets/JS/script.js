let arr = [
    {songName : "Over the Rainbow",url:"./Assets/song/Somewhere Over the Rainbow - The Wizard of Oz (1_8) Movie CLIP (1939) HD.mp3",img:".Assets/Img/OIP.jpg"},
    {songName : "As Time Goes By",url:"./Assets/song/Casablanca - As Time Goes By - Original Song by Sam (Dooley Wilson).mp3",img:".Assets/Img/R.jpg"},
    {songName : "Singinin the Rain",url:"./Assets/song/Singin in the Rain (Full Song_Dance - 52) - Gene Kelly - Musical Romantic Comedies - 1950s Movies.mp3",img:".Assets/Img/R (1).jpg"},
    {songName : "The Sound of Music",url:"./Assets/song/The Sound of Music  - THE SOUND OF MUSIC (1965).mp3",img:".Assets/Img/OIP (1).jpg"}
]
var clutter = ""
arr.forEach(Function(){
    clutter += `<div class="card">
            <div class="firstp">
              <img src="https://th.bing.com/th/id/OIP.ZHoXFxuoSy4e3o-XVWqxDwHaKS?rs=1&pid=ImgDetMain" alt=" Albuim cover The Wizard of OZ ">
              <h2>Over the Rainbow</h2>
            </div>
            <h6>2:43</h6> 
          </div>  `
})
document.querySelector(#reco)