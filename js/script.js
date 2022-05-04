//M1
//creare array di oggetti
//ogni oggetto deve avere proprieta id,nome,foto,data,testo,img,like
const posts = [
    {
        id: 1,
        content: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/609/307?image=178",
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
            image: "https://unsplash.it/300/300?image=27"
        },
        likes: 2000,
        created: "2020-07-20"
    },
    {
        id: 3,
        content: "hdhdh dhdhdhd dhdhdhd hddhhdhdh ausuu euejjd sdeuuuehuceuh dheuchehcuebc ecnuecn",
        media: "https://unsplash.it/630/300?image=222",
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
            image: "https://unsplash.it/300/300?image=17"
        },
        likes: 90,
        created: "2018-07-20"
    }
];

//console.log(posts);

//M2
//stampare ogni proprieta dell oggetto nell html
const cont = document.getElementById('container');
//const divCont = document.querySelectorAll('.post-meta__icon');
posts.forEach( (element)=>{

    //bonus
    let resultImage = '';
    
    if(element.author.image === ""){
        let newArray = element.author.name.split(" ",2);
        resultImage = newArray[0].charAt(0).toUpperCase() + newArray[1].charAt(0).toUpperCase();
    }

    //bonus
    let date = new Date(element.created).toLocaleString().split(",",2);
    let newDate = date[0];


    cont.innerHTML += `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                    ${resultImage}
                    <img class="profile-pic" src="${element.author.image}" alt="${element.author.image}"></img>              
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
                        Piace a <b id="like-counter-${element.id}" class="js-likes-counter">${element.likes}</b> persone
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
const likeArray = [];

for(let i = 0; i < a.length; i++){
    const thisA = a[i];
    thisA.addEventListener('click', function(event){
        event.preventDefault();
        this.classList.toggle('red');
        //prelevo l'indice dell'elemento cliccato
        const click = posts[i];
        //prendo numero id in base all indice dell elemento
        const clickId = click.id;
        //prendo l elemento con quell id specifico
        const likeCount = document.getElementById(`like-counter-${clickId}`);
        //prendo valore dentro l'elemento selezionato e lo trasformo in number
        let likeNum = parseInt(likeCount.textContent);
        //se l array non include clickId(se l elemento non e stato cliccato)
        if(!likeArray.includes(clickId)){
            //aggiungi +1
            likeCount.innerHTML = ++ likeNum;
            //aggiungo incremento alla var likeNum
            click.likes = likeNum;
            //pusho nell array il valore cliccato
            likeArray.push(clickId);
            //se l array include clickId (se l elemento e stato cliccato)
        } else {
            //tolgo 1
            likeCount.innerHTML = -- likeNum;
            //aggiungo valore a likeNum
            click.likes = likeNum;
            //prendo l indice aggiunto all array
            const idIndex = likeArray.indexOf(clickId);
            //rimuovo elemento in base all indice preso
            likeArray.splice(idIndex,1);
        }
        //aggiungo valore likeNum a likeCount
        likeCount.innerHTML = likeNum;
        //aggiungo valore alla var likeNum
        click.likes = likeNum;
    })
}
