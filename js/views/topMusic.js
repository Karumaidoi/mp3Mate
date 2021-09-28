class TopMusic {
    #parentEl = document.querySelector('.cards');
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
            <li style="list-style: none;">
                <div class="container-content__body-top-list">
                    <div class="container-content__body-top-list-card">
                        <div class="duration">
                            <p>${results.musicDuration}</p>
                        </div>
                        <div class="container-content__body-top-list-card-img">
                            <img src="${results.musicThumbnail}" alt="music">
                        </div>

                        <div class="container-content__body-top-list-card-text">
                            <h3 class="heading-tertially">${results.musicTitle}</h3>
                        </div>

                        <div class="container-content__body-top-list-card-download">
                            <a href="${results.audioFile}">
                                <button>
                                    <i class="fa fa-download" aria-hidden="true"></i>
                                    <p>Download</p>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </li>

        `
    }

    renderSpinner() {
        const markup =  `
                <li style="height: 20rem; list-style: none;"></li>
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

export default new TopMusic();