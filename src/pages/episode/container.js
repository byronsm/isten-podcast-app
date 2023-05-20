import React, {useEffect, useContext} from 'react';
import Template from "./template.jsx";
import { useParams } from "react-router-dom";
import GlobalContext from '../../context/global/globalContext';

const Episode = () =>  {
 	const { podcastId, episodeId } = useParams();

	const globalContext = useContext(GlobalContext);
	const { 
		setLoading,
	} = globalContext;
 	return (
    	<Template {
      		}
    	/>
  	)
}

Episode.displayName = "Episode";

export default Episode;