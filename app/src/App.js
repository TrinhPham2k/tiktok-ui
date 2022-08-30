import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App(props) {
  return (
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
  );
}

export default App;
