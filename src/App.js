import logo from './logo.svg';
import './App.css';
import TopHeader from './components/header/TopHeader';
import MiddleHeader from './components/header/MiddleHeader';
import BottomHeader from './components/header/BottomHeader';
import Carusel from './components/Carusel/Carusel';
import CardCarusel from './components/card/CardCarusel';
import CardCarusel2 from './components/card/CardCarusel2';
import CardCarusel3 from './components/card/CardCarusel3';
import RightButton from './components/Carusel/RightButton';
import CaruselBrand from './components/Carusel/CaruselBrand';
import Footer from './components/Carusel/Footer';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
      <Carusel />
      <CardCarusel />
      <CardCarusel2 />
      <CardCarusel3 />
      <RightButton />
      <CaruselBrand />
      <Footer />
    </div>
  );
}

export default App;
