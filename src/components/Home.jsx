import AsideMenu from './AsideMenu';

function Home () {
    return (
        <>
            <div className="home-container">
                <AsideMenu />
                <article>
                    <div className="div-time">
                        <div className="">
                        <button className="button2">Collect winnings</button>
                        </div>
                        <span class="textohome">Massive burn in:</span>
                        <div className="circulos">
                            <div className="circles">
                                <div className="circle-back">
                                    <h4>10</h4>
                                    <p>Hours</p>
                                </div>
                            </div>
                            <div className="circles">
                                <div className="circle-back">
                                    <h4>10</h4>
                                    <p>Hours</p>
                                </div>
                            </div>
                            <div className="circles">
                                <div className="circle-back">
                                    <h4>10</h4>
                                    <p>Hours</p>
                                </div>
                            </div>

                            <div className=""><button className="button3">BUY MONEY</button></div>
                            <div className=""><button className="button3">+ADD MONEY TO</button></div>
                            <div className=""></div>
                        </div>
                    </div>
                <br>
                </br>
                <center>  <img 
                                className="tesoro"
                                src='./images/cofre1.png'
                                alt="Money Land" 
                                title="Money Land" />
                <h3>Intelligent AMM and yield farm on Binance Smart Chain</h3>
                </center>     
                <br>
                </br>
                    <div className="cards-dapps-container">
                        <div className="cartes-home">
                            <div className="header-card-dapp">
                                <div className="home-farm"><p1>Money Farms</p1>               
                                <img 
                                className="cof"
                                src='./images/cofre3.png'
                                alt="Money Land" 
                                title="Money Land" /> 
               
                                <h2> FARMS AND STAKING</h2></div>
                                
                            </div>
                            <div className="cards-dapps-body">
                                <p>ONI TO HARVEST</p>
                                <p>Locked </p>
                            </div>  
                            <div className="cards-dapps-body">
                                <p>In Wallet</p>
                                <p>Locked</p>
                            </div>                                                                                                          
                            <div className="cards-dapps-footer">
                                <button className="unlock-button">Unlock Wallet</button>    
                            </div>  
                            <br>
                            </br>                                     
                        </div>
                

                        <div className="cartes-home">
                            <div className="header-card-dapp">
                                <div className="home-lottery">
                                    <p1>Lottery <img 
                                      className="cof"
                                      src='./images/cofre3.png'
                                      alt="Money Land" 
                                      title="Money Land" /> </p1>
                                     
                                    <h1>YOUR LOTTERY WINNINGS</h1>
                            </div>       
                            </div>
                            <div className="cards-dapps-body"> 
                                <p>To Collect</p>
                                <p>Locked</p>
                            </div>    
                            <div className="cards-dapps-body">
                                <p>TOTAL JACKPOT THIS ROUND:</p>
                                <p>Locked</p>
                                </div>                                                                   
                            <div className="cards-dapps-footer">
                            <div className='textohome'>
                            <button className="unlock-button">COLLECT WINNINGS</button> 
                            <button className="unlock-button">APROVE MONEY</button>
                            </div>
                            </div> 
                            <br>
                            </br>   
                        </div> 
                        
                    </div>   
                 

                    <div className="cartas-home">  
                        <div className="carts">
                            <h3>
                                EARN UP TO
                            </h3>
                            <h1>124.67% APR</h1>
                            <h3>
                                IN MONEY FARMS
                            </h3>
                           <center><button class="redondo">
                            <ion-icon name="chevron-forward"></ion-icon>
                            </button></center>
                        </div>     
                        <div className="carts">
                            <h3>
                                EARN
                            </h3>
                            <h1>MONEY</h1>
                            <h3>
                                IN POOLS
                            </h3>
                            <center><button class="redondo"><ion-icon name="chevron-forward"></ion-icon>
                            </button></center>
                        </div> 
                    <div className="carts">
                        <h3>
                            LOTTERY WITH
                        </h3>
                        <h1>$4</h1>
                        <h3>
                            UP FOR GRABS
                        </h3>
                        <center><button class="redondo">
                        <ion-icon name="chevron-forward"></ion-icon>
                        </button></center>
                    </div>  
                    
                </div>  
                <br>
                </br>
                    <div className="cards-dapps-container">
                        <div className="cartes-home">
                            <div className="header-card-dapp">
                                <div className="home-info"><p1>Info <img 
                                className="cof"
                                src='./images/cofre3.png'
                                alt="Money Land" 
                                title="Money Land" /> </p1>
                                <h2>MONEY STATS</h2></div>
                                
                            </div>
                            <div className="cards-dapps-body">
                            <div className='textohome'>
                                <p>TOTAL SUPPLY</p><p>0</p>
                                </div>
                               <div className='textohome'><p>TOTAL BURNED</p><p>0</p></div>
                               <div className='textohome'><p>NEW BLOCK</p><p>0</p></div>
                            </div>                                        
                        </div>


                        <div className="cartes-home">
                            <div className="header-card-dapp">
                                <div className="home-value">
                                    <p1>Value <img 
                                className="cof"
                                src='./images/cofre3.png'
                                alt="Money Land" 
                                title="Money Land" /> </p1>
                                    <h1>TOTAL VALUE LOCKED</h1>
                                </div>
                            </div> 
                            <p>$00</p>
                                <p>ACROSS ALL LPS AND FUEL POOLS</p>                 
                        </div>
                    </div>
  

                      
                </article>
            </div>
        </>
    );
}

export default Home;