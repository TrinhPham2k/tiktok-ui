import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';


function App(props) {
  return (
     <div>
        <Header/>
         {props.children}
        <Footer/>
     
     </div>
   
  );
}

export default App;
