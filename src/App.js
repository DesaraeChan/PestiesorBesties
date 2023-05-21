/* https://www.youtube.com/watch?v=F_QAgrKkR2Y&ab_channel=CarmelleCodes */
/* ui elemnts from Chakra UI */
/* https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fpng%2F9384209-realistic-leaf-clipart-design-illustration&psig=AOvVaw3P5hi549RKX_Fo78LBhfS4&ust=1684767174495000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjw7fnUhv8CFQAAAAAdAAAAABAD*/

import MagGlass from './MagGlass.png';
import ant from "./Ants.png";
import cock from "./Cockroach.png";
import beetle from "./Beetle.png";
import leaf from "./leafArtboard.png";
import spider from "./spider.png";
import './App.css';
import { ChakraProvider, Button } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { useState } from 'react'
import Switch from './Components/Switch';
import { Input } from '@chakra-ui/react'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavBar from "./Navbar";
function App() {
  return (
    
    <ChakraProvider>
    
    <div class = "Wrapper">
      <div class = "spooder"> 
        <img src={spider} alt="Spider" />
      </div>
      <div class = "leaf"> 
        <img src={leaf} alt="Leaf" />
      </div>
      <div class = "mag"> 
        <img src={MagGlass} alt="MagGlass" />
      </div>
    </div>

    <div className="App">
      <div className = "Menu1"> 
        <Menu>
          <MenuButton className='material-symbols-outlined'>Menu</MenuButton>
            <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>Directory</MenuItem>
            <MenuItem>History</MenuItem>
          </MenuList>
        </Menu>
      </div>    
        
      <div className="Switch">
        <Switch rounded={true}/>
      </div>
        
      <div className="App-header">
        <h1>
        pestie or bestie?
        </h1>
      </div>
      <div className = "SearchBar">
        <Input placeholder='Search' />
      </div>

      <div className="QuickSelect">
          <label>
            Quick Selection
          </label>
      </div>

      <div class="box">
          <div class = "col"> 
          <img src={ant} alt="Ant" />
          </div>

          
          <div class = "col"> 
          <img src={beetle} alt="Beetle" />
          </div>

          <div class = "col"> 
          <img src={cock} alt="Cockroaches" />
          </div>

      </div>
    </div>

    </ChakraProvider>
  );
}

export default App;