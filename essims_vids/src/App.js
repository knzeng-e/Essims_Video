import './App.css';
import { useState } from 'react'
import logo from './logo.svg';
import Home from './components/Home';
import Animes from './components/Animes';
import 'semantic-ui-css/semantic.min.css';
import { renderPage, rubriques } from './utils/layoutUtils';
import { Card, Segment, Menu } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [activeItem, setActiveItem] = useState('home')
  return (
    <div className="App">
      <Router>
        <Segment className='Navbar' size='large'>
          <h1>Essim'Flix</h1>
          <Menu pointing secondary stackable>
            {rubriques.map(onglet => {
              return (
                <Link to = {renderPage(onglet)}>
                  <Menu.Item
                    className='Menu'
                    name = {onglet}
                    active = {activeItem === onglet}
                    onClick = {
                      () => {
                        setActiveItem(onglet);
                      }
                    }
                  />
                </Link>
              )
            })}
          </Menu>
        </Segment>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/animes' component = {Animes} />
          {/* <Route path = 'series' component = {Series} />
          <Route path = '/Film' component = {} />
          <Route path = '' component = {} />
          <Route path = '' component = {} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
