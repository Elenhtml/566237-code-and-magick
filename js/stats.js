'use strict';

var GAP = 50;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;

window.renderStatistics = function (ctx, NAMES, times) {
  var canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  //ctx.fillStyle = '#ffffff';
  //ctx.fillRect(100, 10, 420, 270);
  
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
  ctx.fill('#ffffff');
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowOffsetX(10);
  ctx.shadowOffsetY(10);
  
  ctx.font = "bold 16px PT Mono";
  ctx.fillText("Ура вы победили!", 110, 30);
  ctx.font = "bold 16px PT Mono";
  ctx.fillText("Список результатов:", 140, 60);
  
  NAMES.unshift = ['Катя'];
  var times = [105, 210, 300, 150];
  
  var getMaxElement = function (times) {
    var maxElement = times[0];
  
    for (var i = 0; i < times.length; i++) {
      if (times[i] > maxTime) {
        maxTime = arr[i];
      }
    }
  
    return maxTime;
  };
  
  for (var i=0; i < NAMES.length; i++) {
    ctx.fillRect(BAR_WIDTH + GAP, (BAR_MAX_HEIGHT * times[i]) / maxTime);
    ctx.fillText(NAMES[i], (BAR_MAX_HEIGHT * times[i]) / maxTime, times[i]);
  }
};
