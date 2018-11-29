var scores,roundscores,activePlayers,dice;
scores=[0,0];
roundscores=0;
activePlayers=0;



document.querySelector(".dice").style.display="none";
document.getElementById("score-0").textContent="0";
document.getElementById("current-0").textContent="0";
document.getElementById("score-1").textContent="0";
document.getElementById("current-1").textContent="0";
//document.querySelector(".btn-roll")

document.querySelector(".btn-roll").addEventListener("click",function(){
    
    
    dice=Math.floor(Math.random()*6)+1;
    var diceDom=document.querySelector(".dice");
    diceDom.style.display='block';
    diceDom.src='dice-'+dice+'.png';
    if(dice>1){
        roundscores +=dice;
        
        document.querySelector("#current-"+activePlayers).textContent=roundscores;
        }
    else{
       nextplayer();
        
    }
    
})
document.querySelector('.btn-hold').addEventListener('click',function(){
    
    scores[activePlayers] +=roundscores;
    document.querySelector("#score-"+activePlayers).textContent=scores[activePlayers];
  
    if(scores[activePlayers]>=100){
        document.querySelector("#name-"+activePlayers).textContent="winner";
        document.querySelector(".player-" +activePlayers+'-panel').classList.add("winner")
        document.querySelector(".player-" +activePlayers+'-panel').classList.remove("active")
    }
    else{
        
    }
     nextplayer();
})
function nextplayer(){
     activePlayers===0?activePlayers=1:activePlayers=0;
        roundscores=0;
        document.getElementById("current-1").textContent="0";
        document.getElementById("current-0").textContent="0";
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
         diceDom.style.display='none';
}
document.querySelector(".btn-new").addEventListener('click',function(){
    
    scores=[0,0];
roundscores=0;
activePlayers=0;
    
    document.querySelector(".dice").style.display="none";
document.getElementById("score-0").textContent="0";
document.getElementById("current-0").textContent="0";
document.getElementById("score-1").textContent="0";
document.getElementById("current-1").textContent="0";
    document.querySelector('#name-1').textContent='player-1';
    document.querySelector('#name-2').textContent='player-2';
    
    
})


















