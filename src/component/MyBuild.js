import React from "react";
import "./MyBuild.css";
import Footer from './Footer';
import AppBanner from './AppBanner';
import { Link, Switch, Route, onChange, useParams } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

function MyBuild(){

    const { product5 } = useParams();

    const [mouse, setMouse] = useState({
        name:"Mouse",
        pic:"/image/iconmouse.png"
    });
    const [keyboard, setKeyboard] = useState({
        name:"Keyboard",
        pic:"/image/iconkeyboard.png"
    });
    const [headset, setHeadset] = useState({
        name:"Headset",
        pic:"/image/iconheadset.png"
    });
    const [mousepad, setMousepad] = useState({
        name:"Mousepad",
        pic:"/image/iconmousepad.png"
    });
    const [microphone, setMicrophone] = useState({
        name:"Microphone",
        pic:"/image/iconmicrophone.png"
    });

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
                            <img src={mouse.pic} height="60px" width="60px"/>
                            <p>{mouse.name}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content-mb">
                            <img src={keyboard.pic} height="60px" width="60px"/>
                            <p>{keyboard.name}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content-mb">
                            <img src={headset.pic} height="60px" width="60px"/>
                            <p>{headset.name}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content-mb">
                            <img src={mousepad.pic} height="60px" width="60px"/>
                            <p>{mousepad.name}</p>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content-mb">
                            <img src={microphone.pic} height="60px" width="60px"/>
                            <p>{microphone.name}</p>
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
                                <p>{product5.mouseName}</p>
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