import React from 'react';
import Template from "./template.jsx";

const EpisodeDetail = ({podcast, episode}) => {

 	return (
    	<Template {
      		...{podcast, episode}}
    	/>
  	)
}

EpisodeDetail.displayName = "EpisodeDetail";

export default EpisodeDetail;
