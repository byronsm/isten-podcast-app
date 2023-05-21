import React from 'react';
import PodcastDetailCard from '../../components/PodcastDetailCard';
import EpisodeDetail from '../../components/EpisodeDetail';
import {Container, Grid} from '@mui/material';

const renderCard = (currentPodcast) => {
	if (currentPodcast)	return (<PodcastDetailCard podcast={currentPodcast}/>)
	return null;
}

const renderEpisodesTable = (currentPodcast, currentEpisode) =>{
	if (currentPodcast?.episodes && currentEpisode) return (<EpisodeDetail podcast={currentPodcast} episode={currentEpisode}/>)
	return null;
}
export default function Episode ({currentPodcast, currentEpisode}) {
	return (
		<main> 
       		<Container sx={{ py: 12 }} maxWidth="lg">
          		<Grid container spacing={6}>
					{renderCard(currentPodcast)}
					{renderEpisodesTable(currentPodcast, currentEpisode)}
				</Grid>
        	</Container>
    	</main>
	);
};
