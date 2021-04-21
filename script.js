const canvas = document.getElementById("canvas");
const play = document.getElementById("playBtn");
const endingScoreInput = document.getElementById("endingScore");
canvasContext = canvas.getContext('2d');
colorRect(0,0,canvas.width,canvas.height,'brown');

play.addEventListener('click', ()=>{
    if(endingScoreInput.value > 0){
        localStorage.clear();
        localStorage.setItem('winningScore', endingScoreInput.value);
        window.location.assign('game.html');
    }else alert("winning score cannot be less than 1")

})
function colorRect(leftX,topY, width,height, drawColor) {
	canvasContext.fillStyle = drawColor;
	canvasContext.fillRect(leftX,topY, width,height);
}