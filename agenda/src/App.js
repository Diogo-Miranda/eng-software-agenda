import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home'

function App() {
  return (
    <>
      <div className='mainContainer'
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >

        <HomePage />
      </div>
    </>
  )
}

export default App;
