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
            image: ""
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
            image: ""
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
        likes: 90,
        created: "2018-07-20"
    }
];

//console.log(posts);

//M2
//stampare ogni proprieta dell oggetto nell html
const cont = document.getElementById('container');
//console.log(cont);
posts.forEach( (element)=>{

    //bonus
    let resultImage = '';
    if(element.author.image === ""){
        let newArray = element.author.name.split(" ",2);
        resultImage = newArray[0].charAt(0).toUpperCase() + newArray[1].charAt(0).toUpperCase();
    }

    //bonus
    let date = new Date(element.created);
    let convertDate = date.toLocaleString().split(",",2);
    let newDate = convertDate[0];


    cont.innerHTML += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                    ${resultImage}
                        <img class="profile-pic" src="${element.author.image}" alt="">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element.author.name}</div>
                        <div class="post-meta__time">${newDate}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element.content}</div>
            <div class="post__image">
                <img src="${element.media}" alt="${element.media}">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${element.id}">
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

/*
seleziono tutti i pulsanti con classe ...x
aggiungo listener per il clickx
dal this trovo il link e leggo la proprietà data-postid per sapere a quale post appartiene
...
*/

const a = document.getElementsByClassName('like-button');
const b = document.getElementsByClassName('js-likes-counter');

for(let i = 0; i < a.length; i++){
    const thisA = a[i];
    thisA.addEventListener('click', function(){
        this.classList.toggle('red');
        // posts.forEach((e)=>{
        //     //console.log(parseInt(`${e.id}`) === 1);
        //     if(parseInt(`${e.id}`) === 1){
        //         console.log('ciao');
        //     }
        // })
        

        // for(let index = 0; index < b.length; index++){
        //     const thisB = b[index];
        //     //console.log(b[1]);
        //     let result;
        //     posts.forEach((e)=>{
        //         //result = e.likes + 1;
        //         //thisB.innerHTML = `${result}`;
        //         console.log(b[0]);
        //     })    
            
        // }
    })
}