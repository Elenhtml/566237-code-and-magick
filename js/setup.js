'use strict';

var userShow = document.querySelector('.setup');
userShow.classList.remove('hidden');

var heroNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var heroSurNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var chooseRandom = function (arr) {
  var choice = arr[Math.floor(Math.random() * arr.length)];
  return choice;
};

var massHeroes = [];
var fillMassHeroes = function () {  
  for (var i=0; i < 4; i++) {
    massHeroes[i] = {
      name: chooseRandom(heroNames) + ' ' + chooseRandom(heroSurNames),
      coatColor: chooseRandom(coatColors),
      eyesColor: chooseRandom(eyesColors)
    }
  }
  return massHeroes;
};
fillMassHeroes();
  
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var createWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i=0; i < massHeroes.length; i++) {
  fragment.appendChild(createWizard(massHeroes[i]));
}
similarListElement.appendChild(fragment);
userShow.querySelector('.setup-similar').classList.remove('hidden');
