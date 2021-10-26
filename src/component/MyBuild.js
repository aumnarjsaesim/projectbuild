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

    const [products, setProducts] = useState([
      {
          
            _id: "",
            key: "",
            name: "",
            category: "",
            advice: [],
            banana: [],
            mercular: [],
         
      },
    ]);

    

    return(
        <div className="App">
            <div className="all-content-mb">
                <h3 className="title-1">Your Gear</h3>
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
                <div className="content-details">
                    <h3 className="title">DETAILS/PRICE LIST</h3>
                    <table className="table">
                        <tr className="table-title">
                            <th>
                                <p>PART</p>
                            </th>
                            <th>
                                <p>NAME</p>
                            </th>
                            <th>
                                <p>BANANA</p>
                            </th>
                            <th>
                                <p>ADVICE</p>
                            </th>
                            <th>
                                <p>MERCULAR</p>
                            </th>
                        </tr>
                        <tr className="table-mouse">
                            <td>
                                <p>mouse</p>
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                        <tr className="table-keyboard">
                            <td>
                                <p>keyboard</p>
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                        <tr className="table-headset">
                            <td>
                                <p>headset</p>
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                        <tr className="table-mousepad">
                            <td>
                                <p>mousepad</p>
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                        <tr className="table-microphone">
                            <td>
                                <p>microphone</p>
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                            <td>
                                
                            </td>
                        </tr>
                    </table>
                </div>
                    

            </div>

        </div>

    )
}

export default MyBuild;