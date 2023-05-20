const get = async (endpoint) => {
    const data = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(endpoint)}`);
    const result = await data.json();
    if (data.ok) {
      return JSON.parse(result.contents);
    }
};


const getLastPodcastList = async () => {
 	try {
    	return await get(`https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`);
  	} catch (err) {
    	return err;
  	}
}

const getPodcastDetail = async (id) => {
 	try {
    	return await get(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`)
  	} catch (err) {
    	return err;
  	}
}
const exportedObject = {
	getLastPodcastList,
 	getPodcastDetail
};

export default exportedObject;