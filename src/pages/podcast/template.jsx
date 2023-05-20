import React from 'react';
import PodcastDetailCard from '../../components/PodcastDetailCard';
import EpisodesList from '../../components/EpisodesList';
import {Container, Grid} from '@mui/material';

const renderCard = (currentPodcast) => {
	if (currentPodcast)	return (<PodcastDetailCard podcast={currentPodcast}/>)
	return null;
}

const renderEpisodesTable = (currentPodcast) =>{
	if (currentPodcast?.episodes) return (<EpisodesList podcast={currentPodcast}/>)
	return null;
}
export default function Podcast ({loading, currentPodcast}) {
	return (
		<main> 
       		<Container sx={{ py: 12 }} maxWidth="lg">
          		<Grid container spacing={6}>
					{renderCard(currentPodcast)}
					{renderEpisodesTable(currentPodcast)}
				</Grid>
        	</Container>
    	</main>
	);
};



