import { Typography } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { CreateEvent } from './features/categories/CreateEvent';
import { EditEvent } from './features/categories/EditEvent';
import { ListEvent } from './features/categories/ListEvent';

function App() {
  return(
  <ThemeProvider theme={appTheme}>
    <Box 
      component="main"
      sx={{
        height: "100vh",
        backgroundColor: (theme) => theme.palette.grey[900],
      }}
    >
      <Header />
      <Layout>
        <Routes>  
          <Route path="/" element={<ListEvent />} />
          <Route path="/events" element={<ListEvent />} />
          <Route path="/event/create" element={<CreateEvent />} />
          <Route path="/event/edit/:id" element={<EditEvent />} />

          <Route path="*" element={
            <Box>
              <Typography variant="h1">
                <strong>404</strong> </Typography>
              <Typography variant="h2">Page not Found</Typography>
            </Box>
          }> 
          </Route>
        </Routes>
      </Layout>
    </Box>
  </ThemeProvider>
  );
}

export default App
