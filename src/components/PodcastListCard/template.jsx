import React from "react";
import{
	Card,
	CardMedia,
	CardContent,
	Grid,
	Typography, 
	useMediaQuery 
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function PodcastListCard ({podcast, loadPodcastDetail}) {

	const theme = useTheme();
	const isMajorXS = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Grid item  xs={12} sm={4} md={3} 
		sx={{ 
			marginBottom:'10%'
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
        		onClick={loadPodcastDetail}
        	>
        		<CardMedia
        			component="img"
        			sx={{
        				// 16:9
        				pt: '0.00%',
        				width: isMajorXS ? '70%' : '50%',
        				borderRadius: '50%',
        				marginTop : isMajorXS ?"-30%" : "-10%"
        			}}

        			image={podcast["im:image"][2]?.label}
        			alt="random"
        		/>
        		<CardContent sx={{ flexGrow: 1}}>
        			<Typography 
        				gutterBottom 
        				variant="h6" 
        				align="center"
        				style={{ fontWeight: 600  }} 
        			>
        				{podcast["im:name"]?.label}
        			</Typography>
        			<Typography align="center"  style={{ color: '#808080'}} >
        				Author: {podcast["im:artist"]?.label}
        			</Typography>
        		</CardContent>
        	</Card>
        </Grid>
	);
};

