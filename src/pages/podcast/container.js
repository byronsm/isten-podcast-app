import React, {useContext, useEffect} from 'react';
import Template from "./template.jsx";
import { useParams } from "react-router-dom";
import GlobalContext from '../../context/global/globalContext';

const Podcast = () =>  {

	const { podcastId } = useParams();

	const globalContext = useContext(GlobalContext);
	const { 
		getPodcastDetail,
		loading,
		setLoading,
		podcastList
	} = globalContext;

	const currentPodcast = podcastList?.entry.find(podcast => podcast.id.attributes["im:id"] === podcastId);

	const fetch = async  () => {
		setLoading();
   		getPodcastDetail(podcastId);
	}

	useEffect(() => {
		fetch()
   	}, [podcastList]);

   	useEffect(() => {
		fetch()
   	}, []);

 	return (
    	<Template {
      		...{loading, currentPodcast}
      		}
    	/>
  	)
}

Podcast.displayName = "Podcast";

export default Podcast;