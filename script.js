'use strict';

let secretNumber = Math.trunc((Math.random() * 20) + 1);
let score = 20;
let bestscore = 0;

const againDisabled = function(){
    document.querySelector('.again').disabled = true;
    document.querySelector('.again').style.opacity = 0.5;
    document.querySelector('.again').style.cursor = 'not-allowed';
}

const againEnabled = function(){
    document.querySelector('.again').disabled = false;
    document.querySelector('.again').style.opacity = 1;
    document.querySelector('.again').style.cursor = 'pointer';
}

const checkDisabled = function(){
    document.querySelector('.check').disabled = true;
    document.querySelector('.check').style.opacity = 0.5;
    document.querySelector('.check').style.cursor = 'not-allowed';
}

const checkEnabled = function(){
    document.querySelector('.check').disabled = false;
    document.querySelector('.check').style.opacity = 1;
    document.querySelector('.check').style.cursor = 'pointer';
}

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

againDisabled();
checkEnabled();

document.querySelector('.check').addEventListener('click',function(){

    const guess = Number(document.querySelector('.guess').value);

    //Giriş tipi geçerli değil ise;
    if(!guess){
        displayMessage('Bir sayı giriniz!');
    }

    else if(guess < 0 || guess > 20){
        displayMessage('1-20 arası bir sayı giriniz!');
    }

    //ADAM KAZANDI!
    else if(guess === secretNumber){
        displayMessage(`Wow! Doğru tahmin adamım! Cevap : ${secretNumber}'idi.`);
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';

        if(score > bestscore){
            bestscore = score;
            document.querySelector('.bestscore').textContent = `En Yüksek Skor : ${bestscore}`;
        }

        againEnabled();
        checkDisabled();
        
    }

    //Giriş uygun şekilde yapılmış fakat tahmin yanlış!
    else if(guess !== secretNumber){
        if(score>1){
            displayMessage(guess>secretNumber ? 'Düşük' : 'Yüksek');
            score = score - 1;
            document.querySelector('.score').textContent = `Skor : ${score}`;
        }
        //Oyun Bitti!
        else{
            displayMessage('Oyun Bitti!');
            score = score - 1;
            document.getElementById("scoreid").textContent = `Skor : ${score}`;
            againEnabled();
            checkDisabled();
        }
    }

    document.querySelector('.guess').value = '';

    console.log(guess,typeof guess);
    console.log(secretNumber, typeof secretNumber);
})

document.querySelector('.again').addEventListener('click',function(){

    displayMessage('Tahmin ediliyor...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    againDisabled();
    checkEnabled();

    secretNumber = Math.trunc((Math.random() * 20) + 1);
    score = 20;
    document.querySelector('.score').textContent = `Skor : ${score}`;

})