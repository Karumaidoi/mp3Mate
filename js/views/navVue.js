class NavVue {
    _btn = document.querySelector('.sub');

    addHandlerClick() {
        this._btn.addEventListener('click', function() {
            const parentElement = document.querySelector('.ally').style.display = 'none';
        })
    }
}

export default new NavVue();