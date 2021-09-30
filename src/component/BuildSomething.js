import "./BuildSomething.css";

function BuildSomething() {
    return (
        <div className="content-all">
            <div className="grid">

                {/* <header class="page-header">
                    <div class="content">
                        <p>Header</p> 
                    </div>
                </header> */}

                <aside className="page-leftbar">
                    <div className="content">
                    {/* <p>Leftbar</p> */}
                        <div className="grid-leftbar">
                            <div className="item">
                                <div className="content-leftbar">
                                    <p><img src="/image/iconmouse.png" className="pic-cate"/>
                                    MOUSE</p>
                                </div>
                            </div>
                            <div className="item">
                                <div class="content-leftbar">
                                    <p><img src="/image/iconkeyboard.png" className="pic-cate"/>
                                    KEYBOARD</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content-leftbar">
                                    <p><img src="/image/iconheadset.png" className="pic-cate"/>
                                    HEADSET</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content-leftbar">
                                    <p><img src="/image/iconmousepad.png" className="pic-cate"/>
                                    MOUSEPAD</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="content-leftbar">
                                    <p><img src="/image/iconmicrophone.png" className="pic-cate"/>
                                    MICROPHONE</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </aside>


                <main className="page-main">
                    <div className="content">
                    <p>Main</p>
                    </div>
                </main>


                {/* <footer className="page-footer">
                    <div className="content">
                        <div className="copyright">
                            <p>Made in YunWang Group</p>
                            <p>Copyright © 2021 YunWang Group All rights reserved</p>
                        </div>
                    </div>
                </footer> */}


            </div>
        </div>
        
    );
}



export default BuildSomething;