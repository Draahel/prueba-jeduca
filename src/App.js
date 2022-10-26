
import './App.css';
import { ContextProvider } from './context/reactContext';
import { Form } from './components/Form';

function App() {

  return (
    <ContextProvider>
      <Form />
    </ContextProvider>
  );
}

export default App;
