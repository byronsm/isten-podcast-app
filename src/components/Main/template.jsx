import React from 'react';
import {Container, Grid} from '@mui/material';
import Searcher from '../Searcher';
import PodcastListCard from '../PodcastListCard';


const renderPodcastList = (filteredPodcastList) =>  {
	if (filteredPodcastList?.length){
		return filteredPodcastList?.map((podcast, key) => (
        	<PodcastListCard podcast={podcast} key={key} />
        ))
	}
	return null
}

export default function Main({filteredPodcastList}) {

  	return (
    	<>
      		<Searcher/>
      		<main> 
        		<Container sx={{ py: 12 }} maxWidth="lg">
          			<Grid container spacing={4}>
            			{renderPodcastList(filteredPodcastList)}
          			</Grid>
        		</Container>
      		</main>
      	</>
  	);
}