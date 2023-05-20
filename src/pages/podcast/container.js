import React, {useContext, useEffect} from 'react';
import Template from "./template.jsx";
import { useParams } from "react-router-dom";
import GlobalContext from '../../context/global/globalContext';

const Podcast = () =>  {

	const { podcastId } = useParams();

	const globalContext = useContext(GlobalContext);
	const { 
		loading,
		setLoading,
		podcastList
	} = globalContext;
 	return (
    	<Template {
      		}
    	/>
  	)
}

Podcast.displayName = "Podcast";

export default Podcast;