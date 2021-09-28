import * as model from '../models/model.js';

//Imports from the Views
import navView from "../views/navView.js"
import navVue from "../views/navVue.js";
import searchView from "../views/searchView.js";
import resultsView from '../views/resultsView.js';
import channelDetails from '../views/channelDetails.js';
import musicView from '../views/musicView.js';
import topRMusic from '../views/topMusic.js';


//Controllers 
const controlMusic = async () => {
    try{
        resultsView.renderSpinner();
        channelDetails.renderSpinner();
        musicView.renderSpinner();
        topRMusic.renderSpinner();

        const query = searchView.getQuery();
        if(!query) return;


        await model.getMusic(query);
        
        //Rendering the main view
        resultsView.render(model.state.news[0]);
        console.log(model.state.news)

        //Rendering for the channel details
        channelDetails.render(model.state.news[0]);

        //Rendering all Music
        musicView.render(model.state.news)

        //Rendering recommended music
        const [a,b,c,d,e] = [...model.state.news];
        const [...topMusic] = [a,b,c,d,e];

        topRMusic.render(topMusic);

    } catch(err) {
        //Renders error of the entire main pages body/// No more data can be queried when errors occur
        resultsView.renderErrorMessage();

        //Renders error of the channels  details nav
        channelDetails.renderErrorMsg();
    }
}


//Initializing handlers (publisher-subscriber pattern)
const init = function() {
    navView.addHandlerClick();
    navVue.addHandlerClick();
    searchView.addHandlerSearch(controlMusic);
}

init();