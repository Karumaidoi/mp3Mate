class NavView {
    _btn = document.querySelector('.main');

    addHandlerClick() {
        this._btn.addEventListener('click', function() {
            const parentElement = document.querySelector('.container-nav__content').style.display = 'none';
        })
    }
}

export default new NavView();