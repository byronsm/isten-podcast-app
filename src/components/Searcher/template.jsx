import React from 'react';
import {Grid, Container, FormControl, OutlinedInput, Box, Chip} from '@mui/material';

export default function Searcher ( {filterPodcastByText, podcastListLength})  {

	return (
		<Box sx={{ pt: 2, pb: 2 }}>
			<Container maxWidth="sx">
				<Grid container direction="row" alignItems="center" justifyContent="flex-end">
					<Chip color="primary" label={podcastListLength}/>
					<Grid item xs={12} sm={8} md={5} lg={4} >
						<Box component="form" noValidate autoComplete="off">
							<FormControl sx={{ width: '100%' }}>
								<OutlinedInput 
									placeholder="Filter Podcast"
									onChange={(ev) => {filterPodcastByText(ev.target.value)}}
								/>
							</FormControl>
						</Box>
					</Grid>
				</Grid>     
			</Container>
		</Box>
	);
};
