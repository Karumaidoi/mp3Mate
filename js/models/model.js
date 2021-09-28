export const state = {
    news: {},
};


export const loadData = async function(query) {
   try{ 
    const res = await fetch(`https://youtube-advanced-search.p.rapidapi.com/video/${query}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "youtube-advanced-search.p.rapidapi.com",
            "x-rapidapi-key": "c5ec9f1441msh6f2026e00b0436cp157e77jsn0b66bfb1be2c"
        }
    });

    if(!res.ok) throw new Error('Unable to subscribe to your query')

    const data = await res.json();
    const dataMusic = data.Data;
   


    state.news = dataMusic.map(el => {
        return {
            channelName: el.channel_details.name,
            thumbnail: el.channel_details.thumbnail,
            chanellUrl: el.channel_details.url,
            musicDescription: el.description,
            musicDuration: el.duration,
            liveStaus: el.is_live,
            musicDate: el.published,
            musicThumbnail: el.thumbnail,
            musicTitle: el.title,
            videoId: [el.video_id],
            musicViews: el.views,
            audioFile: "",
        }
    })} catch(err) {
        throw err;
    }
}


export const getMusic = async function(query) {
    try{

    await loadData(query);

    await state.news.map(async (el)  => {
        const res =  await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${el.videoId}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "youtube-mp36.p.rapidapi.com",
                "x-rapidapi-key": "c5ec9f1441msh6f2026e00b0436cp157e77jsn0b66bfb1be2c"
            }
            
        })

        if(!res.ok) throw new Error('Unable to reach our servers')

        const dataAudio = await res.json();
        el.audioFile = dataAudio.link;
        
    })} catch(err) {
        throw err;
    }
    
}

console.log(typeof state.news);


