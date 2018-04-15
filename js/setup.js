'use strict';

var userShow = document.querySelector('.setup');
userShow.classList.remove('hidden');

var HEROES_COUNT = 4;
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
  for (var i=0; i < HEROES_COUNT; i++) {
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

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var show = document.querySelector('.setup');
var block = document.querySelector('.setup-open');
var close = show.querySelector('.setup-close');
var userName = show.querySelector('.setup-user-name');

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE && evt !== userName) {
    closePopup();
  }
};

var openPopup = function () {
  show.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  show.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

block.addEventListener('click', function () {
  openPopup;
});

var iconUser = block.querySelector('.setup-open-icon');
iconUser.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

close.addEventListener('click', function() {
  closePopup();
});

close.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var userNameInput = show.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var chooseEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
var inputEyes = document.querySelector('.setup-wizard [eyes-color]');
chooseEyesColor.addEventListener('click', function () {
  inputEyes.value = chooseRandom(eyesColors);
});

var fireballColor = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var chooseFireballColor = document.querySelector('.setup-fireball-wrap');
var inputFireball = document.querySelector('.setup-fireball [fireball-color]');
chooseFireballColor.addEventListener('click', function () {
  inputFireball.value = chooseRandom(fireballColor);
});
