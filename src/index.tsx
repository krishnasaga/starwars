import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { CharactersList } from "./Components/CharactorList";
import { CharacterDetails } from './Components/CharacterDetails';
import { CharacterContextProvider} from './Components/CharacterContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import {Grid,Box, Text, ThemeProvider} from "theme-ui";
import dark  from './themes/dark';
import swiss from './themes/default';

import { Switch } from 'theme-ui'

const App =  () => {
    const [ darkTheme, setDarkTheme ] = useState(false);

    return <ThemeProvider theme={ darkTheme ? dark : swiss }>
        <Router>
            <Grid columns={['10fr 2fr']} bg={'background'}>
                <Text sx={{textAlign: 'center'}} as={'h1'}> X Men</Text>
               <Box> <Switch onChange={() => {
                    setDarkTheme((state) => !state);
                }}/>
                { darkTheme ? 'DARK THEME' : 'DEFAULT THEME' }
                   </Box>
            </Grid>
            <CharacterContextProvider>
                <Routes>
                    <Route path="/xmen" element={<CharactersList />} />
                    <Route path="/xmen/:id" element={<CharacterDetails/>} />
                </Routes>

            </CharacterContextProvider>
        </Router>
    </ThemeProvider>;
}

ReactDOM.render(
  <App/> ,
  document.getElementById('root')
);
