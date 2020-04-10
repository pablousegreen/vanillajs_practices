document.addEventListener('DOMContentLoaded', () =>{

const cardArray = [
    {
        name: 'a320',
        img: 'images/320.jpg'
    },
    {
        name: 'a350',
        img: 'images/350a.jpg'
    },
    {
        name: 'a380',
        img: 'images/380.jpg'
    },
    {
        name: '380',
        img: 'images/380e.jpg'
    },
    {
        name: 'one',
        img: 'images/one.jpg'
    }/*,
    {
        name: 'two',
        img: 'images/two.jpg'
    },
    {
        name: 'three',
        img: 'images/three.jpg'
    }*/
    ,
    {
        name: 'lobo',
        img: 'images/lobo.jpeg'
    },
    {
        name: 'sierra',
        img: 'images/sierra.jpeg'
    }
    ,
    {
        name: 'palmeras',
        img: 'images/palmeras.jpeg'
    },{
        name: 'a320',
        img: 'images/320.jpg'
    },
    {
        name: 'a350',
        img: 'images/350a.jpg'
    },
    {
        name: 'a380',
        img: 'images/380.jpg'
    },
    {
        name: '380',
        img: 'images/380e.jpg'
    },
    {
        name: 'one',
        img: 'images/one.jpg'
    }/*,
    {
        name: 'two',
        img: 'images/two.jpg'
    },
    {
        name: 'three',
        img: 'images/three.jpg'
    }*/
    ,
    {
        name: 'palmeras',
        img: 'images/palmeras.jpeg'
    },
    {
        name: 'lobo',
        img: 'images/lobo.jpeg'
    },
    {
        name: 'sierra',
        img: 'images/sierra.jpeg'
    }

]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = new Map()

//check for matches
 function checkForMatch() {
     var cards = document.querySelectorAll('img')
     const optionOneId = cardsChosenId[0]
     const optionTwoId = cardsChosenId[1]
     if( cardsChosen[0] === cardsChosen[1]){
         cards[optionOneId].setAttribute('src', 'images/white.png')
         cards[optionTwoId].setAttribute('src', 'images/white.png')
         if(!cardsWon.has(cardsChosen)){
            cardsWon.set(cardsChosen, cardsWon)
         }   
         //document.querySelector('#exampleModalCenter').modal();
         $('#exampleModalCenter').modal()
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
         cards[optionTwoId].setAttribute('src', 'images/blank.png')
         cards[optionOneId].style.pointerEvents = "auto";
         cards[optionTwoId].style.pointerEvents = "auto";
         //alert('sorry try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.size === cardArray.length/2){
        resultDisplay.textContent = 'Congratulations! You found them all'
        $('#championModalCenter').modal()
    }
 }

function createBoard(){
    for(let i=0; i< cardArray.length; i++){
        var card = document.createElement('img')
        card.classList.add('img-fluid')
        card.classList.add('img-thumbnail')
        card.classList.add('w-25')
        card.classList.add('p-1')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card); 
    }
}

function flipCard(e){
    //console.log('e: ', e)
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
   this.style.pointerEvents = "none";
    if(cardsChosen.length === 2 ){
        setTimeout(checkForMatch, 500)
    }
}

createBoard()




});