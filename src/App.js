import './App.css';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import imgLogo from './assets/bgfor.png';
import Header from './components/Header';
import About from './components/About';
import Slider from './components/Slider';

const AppContainer = styled.div`
  margin: 0 auto;
  height: 30rem;
  background-image: url(${imgLogo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media(max-width: 768px){
    height: auto;
 }
`;

const App = () => {
  return (
    <div>
      <AppContainer>
        <Navbar/>
      </AppContainer>

      <Header/>
      <About/>
      <Slider/>
    </div>
  );
};

export default App;