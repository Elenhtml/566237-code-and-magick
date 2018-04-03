'use strict';

var CLOUD_X = 150;
var CLOUD_Y = 220;
var GAP = 50;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var BAR_INITIAL_Y = 130;

window.renderStatistics = function (ctx, NAMES, times) {
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetX = 10;
  ctx.shadowOffsetY = 10;
  
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(100, 10);
  ctx.lineTo(520, 10);
  ctx.moveTo(520, 10);
  ctx.lineTo(490, 145);
  ctx.moveTo(490, 145);
  ctx.lineTo(520, 280);
  ctx.moveTo(520, 280);
  ctx.lineTo(100, 280);
  ctx.moveTo(100, 280);
  ctx.lineTo(130, 145);
  ctx.moveTo(130, 145);
  ctx.lineTo(100, 10);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
  
  ctx.fillStyle = 'black';
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Ура вы победили!', 230, 30);
  ctx.font = 'bold 16px PT Mono';
  ctx.fillText('Список результатов:', 210, 60);
  
  NAMES.unshift = ['Катя'];
  var times = [105, 210, 300, 150];
  
  /*var getMaxElement = function (times) {
    var maxElement = times[0];
  
    for (var i = 0; i < times.length; i++) {
      if (times[i] > maxElement) {
        maxElement = arr[i];
      }
    }
  
    return maxElement;
  };
  
  var maxTime = getMaxElement(times);*/
  
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillText(times[0], CLOUD_X, 150);
  ctx.fillRect(CLOUD_X, 180, BAR_WIDTH, 52);
  ctx.fillText('Катя', CLOUD_X, 260);
  
  /*for (var i=0; i < NAMES.length; i++) {
    ctx.fillStyle = 'blue';
    if (i=0) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';  
    }
    ctx.fillText(times[i], CLOUD_X + (BAR_WIDTH + GAP)*i, 150);
    ctx.fillRect(CLOUD_X + (BAR_WIDTH + GAP)*i, BAR_INITIAL_Y + (BAR_MAX_HEIGHT - ((BAR_MAX_HEIGHT * times[i]) / maxTime)), BAR_WIDTH, ((BAR_MAX_HEIGHT * times[i]) / maxTime));
    ctx.fillText(NAMES[i], CLOUD_X + (BAR_WIDTH + GAP)*i, 260);
  }*/
};
