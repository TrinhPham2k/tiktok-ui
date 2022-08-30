import { Link } from "react-router-dom";

function MenuLeft(){
    return(
        <div className="col-sm-3">
        <div className="left-sidebar">
          <h2>Account</h2>
          <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                    <span className="badge pull-right"><i className="fa fa-plus" /></span>
                    ACCOUNT
                  </a>
                </h4>
              </div>
            
            </div>
            <div className="panel panel-default">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <Link data-toggle="collapse" data-parent="#accordian" to="/account/add">
                    <span className="badge pull-right"><i className="fa fa-plus" /></span>
                    MY PRODUCT
                  </Link>
                </h4>
              </div>
           
            </div>

          </div>{/*/category-products*/}
        
        </div>
      </div>
    )
}
export default MenuLeft;