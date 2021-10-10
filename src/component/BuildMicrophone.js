import "./BuildSomething.css";
import Footer from './Footer'
import AppBanner from './AppBanner'
import { Link } from "react-router-dom";


function BuildMicrophone() {
    return (
        <div className="App">
            <AppBanner/>
            <div className="content-all">
                <div className="grid">

                    {/* <header class="page-header">
                        <div class="content">
                            <p>Header</p> 
                        </div>
                    </header> */}

                    <aside className="page-leftbar">
                        <div className="content">

                            <div className="flexbox">
                                <div className="item30">
                                    <div className="content-leftbar1">
                                        <Link to="/BuildSomethingMouse" className="content-cate">
                                            <img src="/image/iconmouse.png" className="pic-cate"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/BuildSomethingMouse" className="content-cate">
                                            <h4>Mouse</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox">
                                <div className="item30">
                                    <div className="content-leftbar1">
                                        <Link to="/BuildSomethingKeyboard" className="content-cate">
                                            <img src="/image/iconkeyboard.png" className="pic-cate"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/BuildSomethingKeyboard" className="content-cate">
                                            <h4>Keyboard</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox">
                                <div className="item30">
                                    <div className="content-leftbar1">
                                        <Link to="/BuildSomethingHeadset" className="content-cate">
                                            <img src="/image/iconheadset.png" className="pic-cate"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/BuildSomethingHeadset" className="content-cate">
                                            <h4>Headset</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox">
                                <div className="item30">
                                    <div className="content-leftbar1">
                                        <Link to="/BuildSomethingMousepad" className="content-cate">
                                            <img src="/image/iconmousepad.png" className="pic-cate"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/BuildSomethingMousepad" className="content-cate">
                                            <h4>Mousepad</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox">
                                <div className="item30">
                                    <div className="content-leftbar1">
                                        <Link to="/BuildSomethingMicrophone" className="content-cate">
                                            <img src="/image/iconmicrophone.png" className="pic-cate"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/BuildSomethingMicrophone" className="content-cate">
                                            <h4>Microphone</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <button className="btn-buildnow" type="button">Build Now</button>
                            
                        </div>
                    </aside>


                    <main className="page-main">
                        <div className="content">
                            <div class="grid-main">
                                <div class="item-main">
                                    <div class="content-main">
                                    <p>11111</p>
                                    </div>
                                </div>
                                <div class="item-main">
                                    <div class="content-main">
                                    <p>22222</p>
                                    </div>
                                </div>
                                <div class="item-main">
                                    <div class="content-main">
                                    <p>33333</p>
                                    </div>
                                </div>
                                <div class="item-main">
                                    <div class="content-main">
                                    <p>44444</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    
                    

                </div>
                
            </div>
            
            <Footer/>
        </div>
        
    );
}



export default BuildMicrophone;