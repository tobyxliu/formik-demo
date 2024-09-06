import './App.css';
import PartnerInfoForm from './components/PartnerInfoForm';
import { ThemeProvider } from 'pcln-design-system';

function App() {
  return (
    <div className='App'>
      <ThemeProvider>
        <PartnerInfoForm accountID={1234} />
      </ThemeProvider>
    </div>
  );
}

export default App;
