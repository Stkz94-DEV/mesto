const date = new Date();
const year = date.getFullYear();
document.getElementById("currentYear").innerHTML = year;

const content = document.querySelector(".content");
const profileEditButton = content.querySelector(".profile__edit-btn");
const profileAddButton = content.querySelector(".profile__add-btn");
const popups = Array.from(document.querySelectorAll(".popup"));
const popupEdit = document.querySelector(".popup-edit");
const popupAdd = document.querySelector(".popup-add");
const popupImage = document.querySelector(".popup-img");
const popupCloseButtons = popups.map((item) => item.querySelector(".popup__close-btn"));
const fromEditElement = popups.find((item) => item.querySelector(".popup__form-edit"));
const fromAddElement = popups.find((item) => item.querySelector(".popup__form-add"));
const nameInput = popupEdit.querySelector(".popup__input_type_name");
const descriptionInput = popupEdit.querySelector(".popup__input_type_description");
const titleInput = popupAdd.querySelector(".popup__input_type_title");
const linkInput = popupAdd.querySelector(".popup__input_type_link");
const profileTitle = content.querySelector(".profile__title");
const profileSubtitle = content.querySelector(".profile__subtitle");
const elementsContainer = document.querySelector(".elements__list");
const elementTemplate = document.querySelector("#element-template").content;
const fullImage = popupImage.querySelector(".popup__fulled-img");
const fullImageTitle = popupImage.querySelector(".popup__title-img");

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function addElement(titleValue, imgValue) {
  const createCard = elementTemplate.cloneNode(true);
  createCard.querySelector(".element__title").textContent = titleValue;
  createCard
    .querySelector(".element__like")
    .addEventListener("click", function (event) {
      event.target.classList.toggle("element__like_active");
    });
  createCard
    .querySelector(".element__trash")
    .addEventListener("click", function (event) {
      event.target.closest(".element").remove();
    });
  const cardImage = createCard.querySelector(".element__img");
  cardImage.src = imgValue;
  cardImage.alt = titleValue;
  cardImage.addEventListener("click", () => openPopupImg(titleValue, imgValue));
  return createCard;
}

initialCards.forEach((item) =>
  elementsContainer.append(addElement(item.name, item.link))
);

function openPopupEdit() {
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileSubtitle.textContent;
  openPopup(popupEdit);
}

function openPopupAdd() {
  titleInput.value = "";
  linkInput.value = "";
  openPopup(popupAdd);
}

function openPopupImg(titleValue, imgValue) {
  fullImage.src = imgValue;
  fullImageTitle.textContent = titleValue;
  openPopup(popupImage);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function formEditSubmitHandler(event) {
  event.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = descriptionInput.value;
  closePopup(popupEdit);
}

function formAddSubmitHandler(event) {
  event.preventDefault();
  const title = titleInput.value;
  const link = linkInput.value;
  elementsContainer.prepend(addElement(title, link));
  closePopup(popupAdd);
}

profileEditButton.addEventListener("click", openPopupEdit);
profileAddButton.addEventListener("click", openPopupAdd);
popupCloseButtons.forEach((item) => item.addEventListener("click", () => closePopup(item.closest(".popup"))));
popupEdit.addEventListener("submit", formEditSubmitHandler);
popupAdd.addEventListener("submit", formAddSubmitHandler);
