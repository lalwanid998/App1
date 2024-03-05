import {Link} from "react-router-dom";
function Menu(){
    return(
        <>
        <div className="header_section">        
         <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
               <img src="images/logo.png" alt=""/>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse">
                  <ul className="navbar-nav ml-auto">
                     <li className="nav-item active">
                        <Link to='/' className="nav-link">Home</Link>
                     </li>
                     <li className="nav-item">
                        <Link to='/about' className="nav-link">About</Link>
                     </li>
                     <li className="nav-item">
                     <Link to='/coffee' className="nav-link">Coffee</Link>
                     </li>
                     <li className="nav-item">
                     <Link to='/contact' className="nav-link">Contact</Link>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>
            <div className="container">
               <div id="banner_slider" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="banner_taital_main">
                                 <h1 className="banner_taital">Coffee <br />Shop</h1>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="banner_taital_main">
                                 <h1 className="banner_taital">Coffee <br />Shop</h1>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-md-12">
                              <div className="banner_taital_main">
                                 <h1 className="banner_taital">Coffee <br />Shop</h1>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </>
    )
}
export default Menu;