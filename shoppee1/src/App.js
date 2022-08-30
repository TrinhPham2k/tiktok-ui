import './App.css';
import Header from './components/Layout/Header';
import MenuLeft from './components/Layout/MenuLeft';
import Footer from './components/Layout/Footer';
import {useLocation} from "react-router-dom"
function App(props) {
  let  location  = useLocation();
 

  return (
   <>
   <Header />
   <section>
     <div class="container">
       <div class="row">
         {location['pathname'].includes("account") ? " "  : <MenuLeft/>}

         <div class="col-sm-9">
              
             {props.children}
           
         </div>
       </div>
     </div>
   </section>

   <Footer />
 </>
  );
}

export default App;
