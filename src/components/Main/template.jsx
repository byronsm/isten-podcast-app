import React from 'react';
import {Container, Grid} from '@mui/material';
import Searcher from '../Searcher';

export default function Main({filteredPodcastList}) {

  	return (
    	<>
      		<Searcher/>
      		<main> 
        		<Container sx={{ py: 12 }} maxWidth="lg">
          			<Grid container spacing={4}>
          			</Grid>
        		</Container>
      		</main>
      	</>
  	);
}