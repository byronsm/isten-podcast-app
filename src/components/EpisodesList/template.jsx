import React from "react";
import {
	Card,
	CardContent,
	Grid,
	Typography
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';

const formatTime = (milliseconds) => {
	const hours = Math.floor(milliseconds / (1000 * 60 * 60));
	const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
	return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

}

export default function EpisodesList ({podcast, loadEpisodeDetail}) {

	const handleClick = (event) => {
    	loadEpisodeDetail(event.id);
  	};

	const columns = [
	
		{ field: 'title', headerName: 'Title' , width: 400, 
			renderCell: (params) => (
            	<span
                	style={{ cursor: 'pointer' , color:'primary'}}
                	onClick={() => handleClick(params)}
              	>
                	{params.value}
              	</span>
        )},
		{ field: 'date', headerName: 'Date' , width: 140},
		{ field: 'duration', headerName: 'Duration' , width: 140},
	];


	const rows = podcast.episodes?.results?.map((episode) => ({
		id: episode.trackId,
		title: episode.trackName,
		date: moment(episode.releaseDate).format('DD/MM/YYYY'),
		duration: episode.trackTimeMillis ? formatTime(episode.trackTimeMillis) : "No INFO"
	})) || [];

	return (
		<Grid item  xs={12} sm={8} md={8} 
		sx={{ 
        	}}> 
        	<Card sx={{ 
        		display: 'flex', 
        		flexDirection: 'column',
        		marginBottom:'2em',
        		overflow :'visible',
        	}}>
        		
        		<CardContent sx={{ flexGrow: 1}}>
        			<Typography 
        				gutterBottom 
        				variant="h4" 
        				align="left"
        				style={{ fontWeight: 600  }} 
        			>
        			Episodes: {podcast.episodes?.resultCount}
        			</Typography>
        			
        		</CardContent>
        	</Card>
        	
    		<DataGrid
    			rows={rows}
    		 	columns={columns}
    		/>
    		
        </Grid>
	);
};

