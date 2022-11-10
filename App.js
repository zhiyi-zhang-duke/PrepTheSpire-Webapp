import NewRun from './components/NewRun';
import RunPrep from './components/RunPrep';
import Menu from './components/Menu';
import Settings from './components/Settings';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AppRegistry } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:8080/graphql',
    fetchOptions: {
      mode: 'no-cors',
    },
  }),
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Menu />} />
            <Route exact path="/newrun" element={<NewRun />} />
            <Route exact path="/runprep" element={<RunPrep />} />
            {/* <Route exact path="/continuerun" element={<ContinueRun />} /> */}
            <Route exact path="/settings" element={<Settings />} />           
          </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}
AppRegistry.registerComponent('prepthespire-webapp', () => App)