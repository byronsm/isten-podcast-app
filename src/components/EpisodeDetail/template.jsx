import React from "react";
import {
	Card,
	CardContent,
	Grid,
	Typography,
	Divider
} from '@mui/material';

export default function EpisodeDetail ({episode}) {

	return (
		<Grid item  xs={12} sm={8} md={8} 
		sx={{ 
        	}}> 
        	<Card sx={{  
        		display: 'flex', 
        		flexDirection: 'column',
        		marginBottom:'2em',
        		overflow :'visible',
        	}}
        	align="center">
        		
        		<CardContent sx={{ flexGrow: 1}}>
        		
        			<Typography 
        				gutterBottom 
        				variant="h6" 
        				align="left"
        				style={{ fontWeight: 600  }} 
        			>
        				{episode.trackName}
        			</Typography>
        			<Typography 
        				align="left"  
        				sx={{
        					fontStyle: "italic",
      					}}
        			>
        				{episode.description}
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
        				align="left"
        				sx={{
        					fontStyle: "italic",
      					}}
      					
      					dangerouslySetInnerHTML={{ __html: episode.description}}
        			>
        			</Typography>
        			<br/>
        			<audio src={episode.episodeUrl} style={{ width: "100%"  }} />
        				<audio controls="controls">
  					<source src={episode.episodeUrl} type="audio/ogg" />
					
					</audio>

        		</CardContent>

        	</Card>
    		
        </Grid>
	);
};

