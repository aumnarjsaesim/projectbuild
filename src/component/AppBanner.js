import React from "react";
import "./AppBanner.css";
import $ from "jquery";
import {useState} from "react";
import { Link } from "react-router-dom";

function AppBanner() {

    const [searchText, setSearchText] =useState("");

    return (
        <div>
            <nav className="nav">
                <div className="container">
                    <div className="logo">
                        <Link to="/BuildSomething">
                            <img class="logo-img" src="/image/Logo.png" width="50" height="50"/>
                        </Link>
                    </div>
                    <div id="mainListDiv" className="main_list">
                        <ul className="navlinks">
                
                            <li>
                                <Link to="/BuildSomething">
                                    Build your gear
                                </Link>
                            </li>
                            <li>
                                <Link to="/MyBuild">
                                    MyBuild
                                </Link>
                            </li>
                            <li>
                                <Link to="/Favorite">
                                    Favorite
                                </Link>
                            </li>
                            <li>
                                <a href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                    <span className="navTrigger">
                        <i></i>
                        
                        <i></i>
                        <i></i>
                    </span>

                </div>
            </nav>
        
            <div className="home">
                
                <div className="app-search-in-box">
                    <div className="app-search">
                        <p>What do you want to find ?</p>
                        {/* <form> */}
                            <input
                                className="app-search-input"
                                type="text"
                                value={searchText}
                            />
                            <img src="/image/search.png" width="25px" height="25px"/>
                            {/* <input
                                className="app-search-button"
                                type="submit"

                            />
                        </form> */}
                    </div>
                </div>

            </div>
        
        
        </div>
    );
}

$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $(".nav").addClass("affix");
    console.log("OK");
  } else {
    $(".nav").removeClass("affix");
  }
});

$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

export default AppBanner;