//M1
//creare array di oggetti
//ogni oggetto deve avere proprieta id,nome,foto,data,testo,img,like
const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author:{
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        created: "2021-06-25"
    },
    {
        id: 2,
        content: "hdhdh dhdhdhd dhdhdhd hddhhdhdh ausuu euejjd sdeuuuehuceuh dheuchehcuebc ecnuecn",
        media: "",
        author:{
            name: "Gabriele Bianchi",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 2000,
        created: "2020-07-20"
    },
    {
        id: 3,
        content: "hdhdh dhdhdhd dhdhdhd hddhhdhdh ausuu euejjd sdeuuuehuceuh dheuchehcuebc ecnuecn",
        media: "https://unsplash.it/600/300?image=171",
        author:{
            name: "Mario Rossi",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 246,
        created: "2022-10-10"
    },
    {
        id: 4,
        content: "hdhdh dhdhdhd dhdhdhd hddhhdhdh ausuu euejjd sdeuuuehuceuh dheuchehcuebc ecnuecn",
        media: "",
        author:{
            name: "Pinco Pallo",
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 0,
        created: "2018-07-20"
    }
];

//console.log(posts);

//M2
//stampare ogni proprieta dell oggetto nell html
const cont = document.getElementById('container');
//console.log(cont);
posts.forEach( (element)=>{
    //console.log(element);
    cont.innerHTML += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">4 mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src="${element.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;
})

//M3
//cliccando tasto mi piace cambiare colore al testo e aggiungere 1 like in piu
//ogni volta che mettiamo like inseriamo in un nuovo array l id del post