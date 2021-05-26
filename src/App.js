import logo from './logo.svg';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import ColorBox from './components/ColorBox';
import { Redirect, Route } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link, NavLink, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <p><NavLink to="/todos" activeClassName="active-menu" >Todos</NavLink></p>
      <p><NavLink to="/albums" activeClassName="active">Albums</NavLink></p>

      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/post/:postId" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
