import './App.scss'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home';
import Middle from './Component/Middle/Middle';
import Destination from './Component/Destination/Destination';
import Portfolio from './Component/Portfolio/Portfolio';
import Reviews from './Component/Reviews/Reviews';
import Question from './Component/Question/Question';
import Subscribe from './Component/Subscribe/Subscribe';
import Footer from './Component/Footer/Footer';

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <Middle />
      <Destination />
      <Portfolio />
      <Reviews />
      <Question />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App
