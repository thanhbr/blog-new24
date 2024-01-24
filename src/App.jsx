import { Provider } from 'react-redux';
import './App.css'
import Home from "./pages/Home/Home.jsx"
import configureStore from './redux/store/configureStore.js';
import { DarkModeProvider } from './context/DarkModeContext.jsx';

const store = configureStore();

function App() {

  return (
    <Provider store={store}>
      <DarkModeProvider className="app">
        <div>
          <Home />
        </div>
      </DarkModeProvider>
    </Provider>
  )
}

export default App
