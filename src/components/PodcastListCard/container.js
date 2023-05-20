import React from 'react';
import Template from "./template.jsx";
import { useNavigate } from "react-router-dom";

const PodcastListCard = ({podcast}) => {

	const navigate = useNavigate();

	const loadPodcastDetail =  () =>{
		navigate(`/podcast/${podcast.id.attributes["im:id"]}`)
	}
 	return (
    	<Template {
      		...{podcast, loadPodcastDetail}}
    	/>
  	)
}

PodcastListCard.displayName = "PodcastListCard";

export default PodcastListCard;
