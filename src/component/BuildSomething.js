import React from "react";
import "./BuildSomething.css";
import Footer from './Footer'
import AppBanner from './AppBanner'
import { Link } from "react-router-dom";


function BuildSomething() {
    return (
        <div className="App">
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
                                        <Link to="/Build/Mouse" cate="Mouse" url="Mouse" className="content-cate">
                                            <img src="/image/iconmouse.png" className="pic-cate"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Mouse" cate="Mouse" url="Mouse" className="content-cate">
                                            <h4>Mouse</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox">
                                <div className="item30">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Keyboard" cate="Keyboard" url="Keyboard" className="content-cate">
                                            <img src="/image/iconkeyboard.png" className="pic-cate"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Keyboard" cate="Keyboard" url="Keyboard" className="content-cate">
                                            <h4>Keyboard</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox">
                                <div className="item30">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Headset" className="content-cate">
                                            <img src="/image/iconheadset.png" className="pic-cate"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Headset" className="content-cate">
                                            <h4>Headset</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox">
                                <div className="item30">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Mousepad" className="content-cate">
                                            <img src="/image/iconmousepad.png" className="pic-cate"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Mousepad" className="content-cate">
                                            <h4>Mousepad</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox">
                                <div className="item30">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Microphone" className="content-cate">
                                            <img src="/image/iconmicrophone.png" className="pic-cate"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Microphone" className="content-cate">
                                            <h4>Microphone</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <button className="btn-buildnow" type="button">Build Now</button>
                            
                        </div>
                    </aside>


                    <main className="page-main-bst">
                        <div className="content-bst">
                            <div class="grid-main1">
                                <div className="text-mid">
                                    <h1>Build Something ?</h1>
                                </div>
                            </div>
                        </div>
                    </main>

                    
                    

                </div>
                
            </div>
        </div>
        
    );
}



export default BuildSomething;