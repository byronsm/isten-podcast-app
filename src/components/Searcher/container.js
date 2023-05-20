import React, {useContext} from 'react';
import Template from "./template.jsx";
import GlobalContext from '../../context/global/globalContext';


const Searcher = () => {
	const globalContext = useContext(GlobalContext);
	const { 
		filterPodcastByText,
		podcastListLength
	} = globalContext;

 	return (
    	<Template {
      		...{filterPodcastByText, podcastListLength}}
    	/>
  	)
}

Searcher.displayName = "Searcher";

export default Searcher;
