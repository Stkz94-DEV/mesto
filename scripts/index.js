const date = new Date();
const year = date.getFullYear();
document.getElementById("currentYear").innerHTML = year;

let profileEditButton = document.querySelector(".profile__edit-btn");
let popup = document.querySelector(".popup");
let popupCloseButton = document.querySelector(".popup__close-btn");
let formElement = document.querySelector(".popup__form");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let nameInput = document.querySelector(".popup__input_type_name");
let descriptionInput = document.querySelector(".popup__input_type_description");

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileSubtitle.textContent;
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = descriptionInput.value;
  closePopup();
}

profileEditButton.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);
