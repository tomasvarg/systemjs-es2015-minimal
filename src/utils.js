export const showMessage = (message, elemSelector) => {
    var elem = document.querySelector(elemSelector);
    if (elem) elem.innerHTML = message;
};
