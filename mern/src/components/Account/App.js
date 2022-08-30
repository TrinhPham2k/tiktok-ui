import React from 'react'
import MenuLeft from './MenuLeft'

export default function App(props) {
  return (
    <>
        <section>
            <div class="container">
              <div class="row">
                    <MenuLeft />

                <div class="col-sm-9">
              
                    {/* <Update/> */}
                    {props.children}
                  
                </div>
              </div>
            </div>
      </section>
    
    </>
  )
}
