class MusicView {
    #parentEl = document.querySelector('.cardsList');
    _data;

    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this.#parentEl.innerHTML = '';
        this.#parentEl.insertAdjacentHTML('afterbegin', markup);
    }

    _generateMarkup() {
        this.#parentEl.innerHTML = '';
        return this._data.map(this._generateMarkupPreview).join('');
    }

    _generateMarkupPreview(results) {
        return `
            <li class="container-content__body-top-other-list-cnt">
                <div class="container-content__body-top-other-list-cnt__img">
                    <img src="${results.thumbnail}" alt="music">
                </div>
                <p class="long-details2">${results.musicTitle}</p>
                <p>${results.musicDuration}</p>
                <a href="${results.audioFile}">
                    <div class="icon-dnld">
                        <i class="fa fa-download"></i>
                    </div>
                </a>
            </li>

        `
    }

    renderSpinner() {
        const markup =  `
                 <img src="/assets/icons8-loading-circle (1).gif" alt="spinner" class="spinner">
         `


        this.#parentEl.innerHTML = '';
        this.#parentEl.insertAdjacentHTML('afterbegin', markup);
    }

    renderErrorMsg() {
        const markup = `
             <div class="errorMessage">
                    <div class="errorMessage-icon">
                        <img src="/css/SVG/bug.svg" alt="error">
                        <h2 class="heading-secondary">Unexpected bug appeared</h2>
                        <p class="long-copy">
                        We are working on this at  the moment, please try again.
                        </p>
                    </div>
            </div>
        `

        this.#parentEl.innerHTML = '';
        this.#parentEl.insertAdjacentHTML('afterbegin', markup);
    }
}

export default new MusicView();