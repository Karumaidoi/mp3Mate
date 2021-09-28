class ChannelDetails {
    #parentEl = document.querySelector('.container-classic__center-card');
    _data;


    render(data) {
        this._data = data;
        const markup = this._generateMarkup();
        this.#parentEl.innerHTML = '';
        this.#parentEl.insertAdjacentHTML('afterbegin', markup);
    }

   _generateMarkup() {
        this.#parentEl.style.backgroundColor = '#fff';
        this.#parentEl.style.boxShadow = '-2px 2px 6px #9e97973a';
       return `
            <div class="container-classic__center-card__img" style="background-image: linear-gradient(to right bottom, #1a1919, #44434331),url(${this._data.musicThumbnail})">
                <div class="top">
                    <a href="https://www.youtube.com${this._data.chanellUrl}" target="_blank" rel="noopener noreferrer">
                        <div class="youtube">
                            <img src="/assets/youtube.svg" alt="tube">
                        </div>
                    </a>
                    
                    <div class="title">
                        <p class="long-details3" style="text-align: center;, margin-bottom: 1rem">${this._data.channelName}</p>
                    </div>
                    </div>
                </div>
                
                <div class="container-classic__center-card__details">
                    <h2 class="heading-secondary">
                        More about author
                    </h2>
                    <p class="long-copy">
                        Tap the youtube button to learn more about artist with Youtube Express
                    </p>
            </div>
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
                    <p class="long-copy" style="text-align: center;">
                    We are working on this at  the moment, please try again.
                    </p>
                </div>
        </div>
    `

    this.#parentEl.innerHTML = '';
    this.#parentEl.insertAdjacentHTML('afterbegin', markup);
}
}

export default new ChannelDetails();