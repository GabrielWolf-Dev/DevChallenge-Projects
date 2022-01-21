import { BrowserRouter, Switch, Route  } from 'react-router-dom';
import { ThemeProvider } from './context/theme';

import Home from './components/Home';
import UserPage from './components/UserPage';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/user-page" render={() => <UserPage />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
