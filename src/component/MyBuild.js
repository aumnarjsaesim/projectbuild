import React from "react";
import "./MyBuild.css";
import Footer from './Footer';
import AppBanner from './AppBanner';
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

function MyBuild(props){

    const [mouse, setMouse] = useState("Mouse");
    const [keyboard, setKeyboard] = useState("Keyboard");
    const [headset, setHeadset] = useState("Headset");
    const [mousepad, setMousepad] = useState("Mousepad");
    const [microphone, setMicrophone] = useState("Microphone");

    

    return(
        <div className="App">
            <AppBanner/>
            <div className="all-content-mb">
                <div className="grid-mb">
                    <div className="item">
                        <div className="content-mb">
                            <img src="/image/iconmouse.png" height="60px" width="60px"/>
                            <p>{mouse}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content-mb">
                            <img src="/image/iconkeyboard.png" height="60px" width="60px"/>
                            <p>{keyboard}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content-mb">
                            <img src="/image/iconheadset.png" height="60px" width="60px"/>
                            <p>{headset}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content-mb">
                            <img src="/image/iconmousepad.png" height="60px" width="60px"/>
                            <p>{mousepad}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content-mb">
                            <img src="/image/iconmicrophone.png" height="60px" width="60px"/>
                            <p>{microphone}</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>

    )
}

export default MyBuild;