import React, {useEffect, useContext} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalState from './context/global/globalState';
import {CircularProgress, Typography, Link, Box, CssBaseline} from '@mui/material';
import GlobalContext from './context/global/globalContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Home = React.lazy(() => import('./pages/home'));
const Podcast = React.lazy(() => import('./pages/podcast'));
const Episode = React.lazy(() => import('./pages/episode'));
const Header = React.lazy(() => import('./components/Header'));

const Copyright = () =>  {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
          {`Copyright © Byron Samaniego ${new Date().getFullYear()}.`}
          <br/>
          <Link color="inherit" href="https://mui.com/">Powered By Material UI</Link>
        </Typography>
  );
}

const GettingRoutes = () => {
  
  const globalContext = useContext(GlobalContext);

  const { 
    reloadPodcastList,
    setLoading
  } = globalContext;

    useEffect(() => {
      const init = async () =>{
        await setLoading();
        await reloadPodcastList();
      }
      
      init();
    }, []);
  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/podcast/:podcastId" element={<Podcast />} />
      <Route path="/podcast/:podcastId/episode/:episodeId" element={<Episode />} />
    </Routes>
    
  )
}

const App = () => {

    const theme = createTheme();
  return (
    <GlobalState>
      
        <ThemeProvider theme={theme}>
          <CssBaseline />
          
            <Router>
              <Header/>
              <React.Suspense fallback={<CircularProgress size={30} />}>
                <GettingRoutes />
              </React.Suspense>
            </Router>

            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Copyright />
          </Box>
        </ThemeProvider>
      
    </GlobalState>
  );
}

export default App;
