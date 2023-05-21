import React, {useEffect, useContext} from 'react';
import Template from "./template.jsx";
import { useParams } from "react-router-dom";
import GlobalContext from '../../context/global/globalContext';

const Episode = () =>  {
 	const { podcastId, episodeId } = useParams();

	const globalContext = useContext(GlobalContext);
	const { 
		getPodcastDetail,
		setLoading,
		podcastList
	} = globalContext;

	const fetch = async () => {
		await setLoading();
   		await getPodcastDetail(podcastId);
	}

	useEffect(() => {
		fetch()
   	}, [podcastList]);

   	useEffect(() => {
		fetch()
   	}, []);

   	const currentPodcast = podcastList?.entry.find(podcast => podcast.id.attributes["im:id"] === podcastId);
   	const currentEpisode = currentPodcast?.episodes?.results?.find(episode => episode.trackId === parseInt(episodeId))
 	return (
    	<Template {
      		...{currentPodcast, currentEpisode}
      		}
    	/>
  	)
}

Episode.displayName = "Episode";

export default Episode;