

import Header  from './components/Header';
import  Sidebar from './components/Sidebar';
import  Main from './components/Main';
import  Rightbar from './components/Rightbar';
import { Stack } from '@mui/system';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';


function App() {

  const [mode, setMode] = useState("light");

  const darkTheme = createTheme ({
    palette:{
      mode: mode,
    },
  });
  
  return (

    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"} >

  <Header />
   <Stack  direction="row" spacing={2} justifyContent={'space-between'}>
     <Sidebar setMode={setMode} mode={mode} />
     <Main />
     <Rightbar />
   </Stack>
  
    </Box>
    </ThemeProvider>
  );
}

export default App;
