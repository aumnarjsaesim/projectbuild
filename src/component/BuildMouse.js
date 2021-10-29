import "./BuildSomething.css";
import { Link, Switch, Route, onChange } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

function BuildMouse(cate,url) {

    const [url5, setUrl5] = useState("");

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

    const [allBrand, SetAllbrand] = useState([]);
    const [brand, setBrand] = useState("");
    const [sort , setSort ] = useState('');
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

    const [model,setModel]= useState({
        mouse:"",
        
    });

    const [page, setPage] = useState([]);
    const allPage = [1, 2, 3, 4, 5, 6, 7];
    const [chagePage, setChangePage] = useState();

    let currentPage = chagePage || 1;
  
  

    useEffect(async () => {
      const res = await axios.get(
        // `http://localhost:3001/products/${url}/?page=${currentPage}${sort}`
        `http://localhost:3001/products/${url5}/?page=${currentPage}${sort}${brand}`
      );
      const dataBrand = res.data.allBrand;
      const dataProduct = res.data.data;
      const dataPage = {
        totalPage: res.data.totalPage,
        currentPage: res.data.currentPage,
      };

        setProducts(dataProduct);
        setPage(dataPage);
    }, [sort, brand,currentPage,url,url5]);

    useEffect(async () => {
        const res = await axios.get(`http://localhost:3001/products/${url}/`);
        const dataBrand = res.data.allBrand;
    
        SetAllbrand(dataBrand);
      }, []);

    return (
        <div className="App">
            <div className="content-all">
                <div className="grid">

                    <header class="page-header">
                        {/* <div class="grid-filter">
                            <div class="item">
                                <div class="content-filter">
                                    <div className="content-band-filter">
                                        <h4>Brand</h4>
                                        <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                            <option selected>All</option>
                                            <option value="Logitech">Logitech</option>
                                            <option value="Razer">Razer</option>
                                            <option value="Steelseries">Steelseries</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="content-filter">
                                <h4>Price</h4>
                                </div>
                            </div>
                        </div> */}
                    </header>

                    <aside className="page-leftbar">
                        <div className="content">

                            <div className="flexbox">
                                <div className="item30">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Mouse" className="content-cate">
                                            <img src={mouse.pic} className="pic-cate" onClick={() => setUrl5("Mouse")}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Mouse" className="content-cate">
                                            <h4 onClick={() => setUrl5("Mouse")}>{mouse.name}</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox">
                                <div className="item30">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Keyboard" className="content-cate">
                                            <img src={keyboard.pic} className="pic-cate" onClick={() => setUrl5("Keyboard")}/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Keyboard" className="content-cate">
                                            <h4 onClick={() => setUrl5("Keyboard")}>{keyboard.name}</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox">
                                <div className="item30">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Headset" className="content-cate">
                                            <img src={headset.pic} className="pic-cate"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Headset" className="content-cate">
                                            <h4>{headset.name}</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox">
                                <div className="item30">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Mousepad" className="content-cate">
                                            <img src={mousepad.pic} className="pic-cate"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Mousepad" className="content-cate">
                                            <h4>{mousepad.name}</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flexbox">
                                <div className="item30">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Microphone" className="content-cate">
                                            <img src={microphone.pic} className="pic-cate"/>
                                        </Link>
                                    </div>
                                </div>
                                <div className="item70">
                                    <div className="content-leftbar1">
                                        <Link to="/Build/Microphone" className="content-cate">
                                            <h4>{microphone.name}</h4>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <button className="btn-buildnow" type="button">Build Now</button>
                            
                        </div>
                    </aside>

                    <Route path="/Build/Mouse/">
                    <main className="page-main">

                        <div className="content-data-category">
                            <div className="grid-category-filter">
                        
                                {products.map((item) => {
                            
                                    return (
                                        <div className="item" key={item._id}>
                                
                                            <div className="card-content">
                                                <img className="card-img"
                                                    src={
                                                    item.advice[0]
                                                        ? item.advice[0].data[0].image
                                                        : item.banana[0]
                                                        ? item.banana[0].data[0].image
                                                        : item.mercular[0]
                                                        ? item.mercular[0].data[0].image
                                                        : ""
                                                    }
                                                    height="250"
                                                    width="10"
                                                />
                                                <p className="category-box">{item.name}</p>
                                                <div className="container">
                                                    <table className="card-box">
                                                        <tr>
                                                            <td>
                                                                <img className="img-recommend"
                                                                    src="https://notebookspec.com/laravel/public//images/component-shop-advice.jpg"
                                                                    width="110"
                                                                    height="40"
                                                                />
                                                            </td>
                                                            <td>
                                                                {item.advice[0]
                                                                    ? item.advice[0].data[0].price
                                                                    : "N/A"}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img className="img-recommend"
                                                                    src="https://www.mercular.com/img/careers/logo.jpg"
                                                                    width="110"
                                                                    height="40"
                                                                />
                                                            </td>
                                                            <td>
                                                                {item.mercular[0]
                                                                    ? item.mercular[0].data[0].price
                                                                    : "N/A"}
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <img className="img-recommend"
                                                                    src="https://notebookspec.com/laravel/public//images/component-shop-banana.png"
                                                                    width="110"
                                                                    height="40"
                                                                />
                                                            </td>

                                                            <td>
                                                                {item.banana[0]
                                                                    ? item.banana[0].data[0].price
                                                                    : "N/A"}
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <span>
                                                    <input type="button" value="ADD TO LIST" 
                                                        onClick={(e) => setMouse({name:item.name,
                                                            pic:item.advice[0]
                                                            ? item.advice[0].data[0].image
                                                            : item.banana[0]
                                                            ? item.banana[0].data[0].image
                                                            : item.mercular[0]
                                                            ? item.mercular[0].data[0].image
                                                            : ""})}
                                                    />
                                                </span>
                                            </div>
                                       
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </main>
                    </Route>

                    <Route path="/Build/Keyboard/">
                    <main className="page-main">

                        <div className="content-data-category">
                            <div className="grid-category-filter">
                        
                                {products.map((item) => {
                            
                                    return (
                                        <div className="item" key={item._id}>
                                
                                            <div className="card-content">
                                                <img className="card-img"
                                                    src={
                                                    item.advice[0]
                                                        ? item.advice[0].data[0].image
                                                        : item.banana[0]
                                                        ? item.banana[0].data[0].image
                                                        : item.mercular[0]
                                                        ? item.mercular[0].data[0].image
                                                        : ""
                                                    }
                                                    height="250"
                                                    width="10"
                                                />
                                                <p className="category-box">{item.name}</p>
                                                <div className="container">
                                                    <table className="card-box">
                                                        <tr>
                                                            <td>
                                                                <img className="img-recommend"
                                                                    src="https://notebookspec.com/laravel/public//images/component-shop-advice.jpg"
                                                                    width="110"
                                                                    height="40"
                                                                />
                                                            </td>
                                                            <td>
                                                                {item.advice[0]
                                                                    ? item.advice[0].data[0].price
                                                                    : "N/A"}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img className="img-recommend"
                                                                    src="https://www.mercular.com/img/careers/logo.jpg"
                                                                    width="110"
                                                                    height="40"
                                                                />
                                                            </td>
                                                            <td>
                                                                {item.mercular[0]
                                                                    ? item.mercular[0].data[0].price
                                                                    : "N/A"}
                                                            </td>
                                                        </tr>

                                                        <tr>
                                                            <td>
                                                                <img className="img-recommend"
                                                                    src="https://notebookspec.com/laravel/public//images/component-shop-banana.png"
                                                                    width="110"
                                                                    height="40"
                                                                />
                                                            </td>

                                                            <td>
                                                                {item.banana[0]
                                                                    ? item.banana[0].data[0].price
                                                                    : "N/A"}
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <span>
                                                    <input type="button" value="ADD TO LIST" 
                                                        onClick={(e) => setKeyboard({name:item.name,
                                                            pic:item.advice[0]
                                                            ? item.advice[0].data[0].image
                                                            : item.banana[0]
                                                            ? item.banana[0].data[0].image
                                                            : item.mercular[0]
                                                            ? item.mercular[0].data[0].image
                                                            : ""})}
                                                    />
                                                </span>
                                            </div>
                                       
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </main>
                    </Route>
                    
                    

                </div>
                
            </div>
            
        </div>
        
    );
}



export default BuildMouse;