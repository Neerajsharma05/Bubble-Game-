var timer = 60;
var score = 0;
var  hitrn = 0;



function MakeBubble(){
    var clutter = "";

for(var i = 1 ; i<=110 ; i++ ){
    var rn = Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rn}</div>`
}

document.querySelector('.p-btm').innerHTML = clutter;
}

function increaseScore(){
    score += 10;
    document.querySelector('#score').textContent = score;
} 

function getNewHit(){
    hitrn  = Math.floor(Math.random()*10);
    document.querySelector('#hitVal').textContent = hitrn;
}

function runTimer(){
   var timerint =  setInterval(()=>{
        if(timer >0){
            timer--;
        document.querySelector('#timerval').textContent = timer;  
        }
        else{
            clearInterval(timerint);
            document.querySelector('.p-btm').innerHTML = ` <div class="r-container">
                    <h1>Game Over</h1>
                    <h2>Score is : ${score}</h2>
                </div>
            `;
        }
      
    },1000)
}

document.querySelector('.p-btm').addEventListener('click',function (dets){
        // console.log(Number(dets.target.textContent));
        var clicknumber = Number(dets.target.textContent);
        if(hitrn == clicknumber ){
            increaseScore();
            MakeBubble();
            getNewHit();
        }
})

MakeBubble();
runTimer();
getNewHit();

