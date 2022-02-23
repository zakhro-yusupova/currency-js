var elForm = document.querySelector(".site-form");
var elFormInput = document.querySelector(".site-form__input");
var elFormSelect = document.querySelector(".site-form__select");
var elFormResult = document.querySelector(".site-form__result");

elForm.addEventListener("submit" , function(e){

  e.preventDefault();

  var elFormInputVal = Number(elFormInput.value);
  var elFormSelectVal = Number(elFormSelect.value);

  elFormResult.textContent = (elFormInputVal * elFormSelectVal);
  console.log(elFormInputVal * elFormSelectVal);
});
