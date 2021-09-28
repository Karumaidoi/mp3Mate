class ResultsView {
    #parentElement = document.querySelector('.container-content__body-channel');
    #subel = document.querySelector('.bodyContent');
    _data;

    render(data) {
        this._data = data;
        console.log(this._data.audioFile);
        const markup = this._generateMarkup();
        this.#parentElement.innerHTML = '';
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    
    #clear() {
        this.#parentElement.innerHTML = '';
    }
    
    _generateMarkup() {
        this.#parentElement.style.backgroundImage = `linear-gradient(to right bottom, rgb(7, 7, 7), #3232322a),url(${this._data.musicThumbnail})`;
        return  `
        <div class="container-content__body-channel-txt">
            <h1 class="heading-primary">${this._data.channelName}</h1>
            <div class="details">
                <p class="long-details">Artist: <span>${this._data.channelName}</span></p>
                <p class="long-details">Published: <span> ${this._data.musicDate}</span></p>
                <p class="long-details">Views: <span>${this._data.musicViews}</span></p>
            </div>
            <p class="long-details" style="margin-top: 2rem;font-size: 1.4rem;">
                Music by ${this._data.musicTitle} published ${this._data.musicDate} ago with ${this._data.musicViews} views. Download to 
                listen more by Artist.
            </p>

            <a href="https://www.youtube.com${this._data.chanellUrl}" target="_blank" rel="noopener noreferrer">
                <button style="margin-top: 2rem;" class="btn">Go Tube</button>
            </a>
        </div>

        <div class="container-content__body-channel-download">
            <a href="${this._data.audioFile}">
                <div class="icon-dwnd">
                    <img src="/css/bootstrap-icons/icons/download.svg" alt="download">
                </div>
            </a>
        </div>
    
        `;
    }

    renderSpinner() {
        this.#parentElement.style.backgroundImage = `linear-gradient(to right bottom, #fff, #fff)`;
        const markup =  `
                 <img src="/assets/icons8-loading-circle (1).gif" alt="spinner" class="spinner">
         `


        this.#parentElement.innerHTML = '';
        this.#parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderErrorMessage() {
        const markup = `
            <div class="errorMessage margin">
                <div class="errorMessage-icon">
                    <img src="/css/SVG/bug.svg" alt="error">
                    <h2 class="heading-secondary">Unexpected bug appeared</h2>
                    <p class="long-copy" style="text-align: center;">
                       We are working on this at  the moment, please try
                        again.
                    </p>
                </div>
            </div>
        `

        this.#subel.innerHTML = '';
        this.#subel.insertAdjacentHTML('afterbegin', markup);
    }


}

export default new ResultsView();