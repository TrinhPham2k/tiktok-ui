import MenuLeft from './MenuLeft'
import UpdateUser from './Member/UpdateUser'

function App(props){
    return(
        <>
        <section>
           <div class="container">
             <div class="row">
                   <MenuLeft />

               <div class="col-sm-9">
             
                 {props.children}
                 
               </div>
             </div>
           </div>
     </section>
   
   
   </>
    )
}
export default App;