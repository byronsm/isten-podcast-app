import React from 'react';
import Template from "./template.jsx";
import { useNavigate } from "react-router-dom";

const EpisodesList = ({podcast}) => {

	const navigate = useNavigate();

	const loadEpisodeDetail =  (episodeId) =>{
		navigate(`/podcast/${podcast.id.attributes["im:id"]}/episode/${episodeId}`)
	}

 	return (
    	<Template {
      		...{podcast, loadEpisodeDetail}}
    	/>
  	)
}

EpisodesList.displayName = "EpisodesList";

export default EpisodesList;
