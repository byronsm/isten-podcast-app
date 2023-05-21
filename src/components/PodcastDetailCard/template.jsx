import React from "react";
import {Card,
	CardMedia,
	CardContent,
	Grid,
	Typography,
	Divider
} from '@mui/material';

export default function PodcastDetailCard ({podcast, loadPodcastDetail}) {


	return (
		<Grid item  xs={12} sm={4} md={4} 
		sx={{ 
        	}}> 
        	<Card 
        		sx={{ 
        			height: '100%', 
        			display: 'flex', 
        			flexDirection: 'column',
        			alignItems: 'center',
        			overflow :'visible',
        			cursor: "pointer",
        		}}
        		onClick= {loadPodcastDetail}
        	>

        		<CardMedia
        			component="img"
        			sx={{
        				pt: '0.00%',
        				width: '60%',
        				marginTop : "10%"
        			}}

        			image={podcast["im:image"][2]?.label}
        			alt="random"
        		/>
        		<CardContent sx={{ flexGrow: 1}}>
        			<Typography 
        				gutterBottom 
        				variant="h6" 
        				align="left"
        				style={{ fontWeight: 600  }} 
        			>
        				{podcast["im:name"]?.label}
        			</Typography>
        			<Typography 
        				align="left"  
        				sx={{
        					fontStyle: "italic",
      					}}
        			>
        				by: {podcast["im:artist"]?.label}
        			</Typography>
        			<br/>
        			<Divider variant="middle" />
        			<br/>
        			<Typography 
        				align="left"  
        				style={{ fontWeight: 600  }}
        			>
        				Description:
        			</Typography>
        			<Typography 
        				gutterBottom 
        				variant="" 
        				align="left"
        				sx={{
        					fontStyle: "italic",
      					}}
        			>
        			{podcast.summary?.label}
        				
        			</Typography>
        			
        		</CardContent>
        	</Card>
        </Grid>
	);
};

