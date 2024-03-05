import Footer from "./Footer";
import Menu from "./Menu";

function Home(){
    return(
        <>
        <Menu/>
        <div id="content">
			<div className="post">
				<h2 className="title">Home</h2>
		    </div>
        </div>
        <div className="coffee_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="coffee_taital">OUR Coffee OFFER</h1>
                    </div>
                </div>
            </div>
            <div className="coffee_section_2">
                <div id="main_slider" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="coffee_img"><img src="images/img-1.png" alt="" /></div>
                                            <div className="coffee_box">
                                                <h3 className="types_text">TYPES OF COFFEE</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6">
                                            <div className="coffee_img"><img src="images/img-2.png" alt="" /></div>
                                                <div className="coffee_box">
                                                    <h3 className="types_text">BEAN VARIETIES</h3>
                                                </div>
                                            </div>
                                        <div className="col-lg-3 col-md-6">
                              <div className="coffee_img"><img src="images/img-3.png" alt="" /></div>
                              <div className="coffee_box">
                                 <h3 className="types_text">COFFEE & PASTRY</h3>
                              </div>
                           </div>
                           <div className="col-lg-3 col-md-6">
                              <div className="coffee_img"><img src="images/img-4.png" alt="" /></div>
                              <div className="coffee_box">
                                 <h3 className="types_text">COFFEE TO GO</h3>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </div>
    <Footer/>
        </>
    )
}
export default Home;