'use strict';

var CLOUD_X = 150;
var CLOUD_Y = 220;
var GAP = 50;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 110;
var BAR_INITIAL_Y = 130;
var arr = [1, 2, 0];

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  
  return maxElement;
};

window.renderStatistics = function (ctx, NAMES, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.beginPath();
  ctx.moveTo(110, 20);
  ctx.lineTo(530, 20);
  ctx.lineTo(500, 155);
  ctx.lineTo(530, 290);
  ctx.lineTo(110, 290);
  ctx.lineTo(140, 155);
  ctx.lineTo(110, 20);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(520, 10);
  ctx.lineTo(490, 145);
  ctx.lineTo(520, 280);
  ctx.lineTo(100, 280);
  ctx.lineTo(130, 145);
  ctx.lineTo(100, 10);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  
  ctx.fillStyle = 'black';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', 230, 40);
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Список результатов:', 210, 60);
   
  var maxTime = getMaxElement(times);  
    
  for (var i=0; i < NAMES.length; i++) {
    ctx.fillStyle = 'black';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + (BAR_WIDTH + GAP)*i, 110 + (BAR_INITIAL_Y - (BAR_MAX_HEIGHT * times[i]) / maxTime) - 10);
    
    ctx.fillStyle = 'blue';
    if (NAMES[i] ==='Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';  
    }
    ctx.fillRect(CLOUD_X + (BAR_WIDTH + GAP)*i, BAR_INITIAL_Y + (BAR_MAX_HEIGHT - (BAR_MAX_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_MAX_HEIGHT * times[i]) / maxTime);
    
    ctx.fillStyle = 'black';
    ctx.fillText(NAMES[i], CLOUD_X + (BAR_WIDTH + GAP)*i, 260);
  }
};
