import './App.css';
import {useState} from 'react'
import logo from './logo.svg';
import VideoStore from './components/VideoStore';
import { Card, Segment, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const handleMenu = (menuName) => {
  switch(menuName){
    case 'Accueil':
      console.log("Go to home Page");
    case 'Animes':
      console.log('Go to Dessins Animés')
    case 'Series':
      console.log('Go to Séries')
    case 'Documentaires':
      console.log('Go to Documentaires');
    default: console.log(`${menuName} n'existe pas`)
  }
}

function App() {
  const [activeItem, setActiveItem] = useState('home')
  return (
    <div className="App">
      <Segment className='Navbar' size = 'large'>
                <h1>Essim'Flix</h1>
                <Menu pointing secondary>
                  <Menu.Item
                    className='Menu'
                    name='Accueil'
                    active={activeItem === 'home'}
                    onClick = {
                        () => {
                          setActiveItem('home');
                          handleMenu('Accueil');
                        }
                    }
                  />
                  <Menu.Item
                    className='Menu'
                    name='Séries'
                    active={activeItem === 'series'}
                    onClick = {
                        () => {
                          setActiveItem('series');
                          handleMenu('Series');
                        }
                    }
                  />
                  <Menu.Item
                    className='Menu'
                    name='Animés'
                    active={activeItem === 'Animes'}
                    onClick = {
                        () => {
                          setActiveItem('Animes');
                          handleMenu('Animes');
                        }
                    }
                  />
                </Menu>
      </Segment>
      <VideoStore />
    </div>
  );
}

export default App;
