window.onload = function(){ 


    let alphabet = ['a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'ğ', 'h',
    'ı' ,'i', 'j', 'k', 'l', 'm', 'n', 'o','ö', 'p', 'q', 'r', 's', 'ş',
    't', 'u', 'ü', 'v', 'w', 'x', 'y', 'z', ' '];
    let categoryName;
    let categories;
    let word;
    let guess;
    let space;
    let geusses = [];
    let lives;
    let counter;
    let correct;
    let myUl;

    let hold = document.querySelector('.hold');
    let showLives = document.querySelector('.live-box');
    let myDiv = document.querySelector('.container');
    let category = document.querySelector('.category-box');
    let showClue = document.querySelector('.clue');


    let myAlphabet = () => {
        myUl = document.createElement('ul');
        myUl.id = 'alphabet';
        for ( let i = 0; i < alphabet.length; i++) {
            myLetters = document.createElement('li');
            myLetters.id = 'letters';
            myLetters.innerHTML = alphabet[i];
            check();
            myUl.appendChild(myLetters);
            myDiv.appendChild(myUl);
        
        }
    }


    let selectCat = function() {
        if (categoryName === categories[0]){
            category.innerHTML = 'The category is Places'
        }else if (categoryName === categories[1]) {
            category.innerHTML = 'The category is Most Delicious Foods'
        }else if (categoryName === categories[2]) {
            category.innerHTML = 'The category is Most Loved Poets'
        }
    }


    let result = () => {
        let wordHolder = document.querySelector('.hold');
        correct = document.createElement('ul');

        for (let i = 0; i < word.length; i++) {
            correct.id = 'my-word'
            guess = document.createElement('li');
            guess.className = 'guess';
            if (guess[i] === ' ' ) {
                guess.innerHTML = '-';
                space = 1;
            } else { 
                guess.innerHTML = '_';
            }

            geusses.push(guess);
            correct.appendChild(guess);
            wordHolder.appendChild(correct);
        }
    }



    comments = () => {
        showLives.innerHTML = `you have ${lives} lives.`;
        if ( lives < 1) {
            hold.parentNode.removeChild(hold);
            showLives.innerHTML = 'Really... :(';
        }
        for (let i = 0; i <geusses.length; i++) {
            if (counter + space  === geusses.length) {
                showLives.innerHTML = 'I love you too :)'
            }
        }
    }


    check = () => {
        myLetters.onclick = function() {
            let guess = (this.innerHTML);
            this.className = 'active';
            this.onclick = null;
            for (let i = 0; i < word.length; i++){
                if (word[i] ===  guess){
                    geusses[i].innerHTML = guess;
                    counter += 1;
                }
            }

            let j = (word.indexOf(guess));
            if (j === -1) {
                lives -= 1;
                comments();
            } else {
                comments();
            }
        }
    }

    play = () => {
        categories = [["çandarlı","ayvalık","heybeliada","uçmakdere"], 
        ["mantı","patates kızartması","bazlama","hilal odabaşı"], 
        ["erdener ünal","nazım hikmet","cemal süreya"]]

        categoryName = categories[Math.floor(Math.random() * categories.length)];
        word = categoryName[Math.floor(Math.random() * categoryName.length)];
        console.log(word);
        myAlphabet();

        geusses = [ ];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
    
    }


    play();

    hint.onclick = () => {

        hints = [["famous with its balcony","our last vacation place","best of prince islands","lovely camping place"],
        ["your favorite food","my favorite food","a description for your beautiful face","my real favorite food :)"],
        ["you know who it is :)","He is a walnut tree in the Gülhane Park","my favorite poet"]];

        let categoryIndex = categories.indexOf(categoryName);
        let hintIndex = categoryName.indexOf(word);
        showClue.innerHTML = 'Clue: - ' + hints [categoryIndex][hintIndex];
    };

    document.querySelector('#reset').onclick = function() {
        correct.parentNode.removeChild(correct);
        myUl.parentNode.removeChild(myUl);
        showClue.innerHTML = "";
        play();
  
    }
    

};































