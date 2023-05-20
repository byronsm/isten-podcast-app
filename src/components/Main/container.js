import React, {useContext} from 'react';
import Template from "./template.jsx";
import GlobalContext from '../../context/global/globalContext';

const Main = () => {

	const globalContext = useContext(GlobalContext);

	const { 
		filteredPodcastList,
	} = globalContext;

 	return (
    	<Template {
      		...{filteredPodcastList}}
    	/>
  	)
}

Main.displayName = "Main";

export default Main;