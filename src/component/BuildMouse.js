import "./BuildSomething.css";
import Footer from './Footer'
import AppBanner from './AppBanner'
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

function BuildMouse() {

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
    const [page, setPage] = useState({});
    
  
  
    useEffect(async () => {
      const res = await axios.get(
        `http://localhost:3001/products/Mouse/?page=${page}`
      );
      const dataProduct = res.data.data;
      const dataPage = {
        totalPage: res.data.totalPage,
        currentPage: res.data.currentPage,
      };
      setProducts(dataProduct);
      setPage(dataPage);
    }, [sort]);

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

                        <div class="grid-filter">
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
                        </div>

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
                                                <span><input type="button" value="ADD TO LIST"/></span>
                                            </div>
                                       
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </main>

                    
                    

                </div>
                
            </div>
            
            <Footer/>
        </div>
        
    );
}



export default BuildMouse;