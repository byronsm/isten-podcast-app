import React from "react";
import {AppBar, CircularProgress, Toolbar, Typography, Button} from '@mui/material';

const renderLoading = (loading) => {
	if(loading){
		return <CircularProgress size={30} />
	}
	return null
}

export default function Header ({loading, onTitleClick}) {
 
	return (
		<AppBar color="transparent" position="relative">
        	<Toolbar>
          		<Typography
              		component="h1"
              		variant="h6"
              		color="inherit"
              		noWrap
              		sx={{ flexGrow: 1 }}
            	>
              		<Button 
              			size="large" 
              			style={{ fontWeight: 600 }} 
              			onClick={onTitleClick} 
              		>
              			Podcaster
              		</Button>
            	</Typography>
            	{renderLoading(loading)}
        	</Toolbar>
      	</AppBar>
	);
};
