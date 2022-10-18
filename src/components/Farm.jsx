import AsideMenu from './AsideMenu';

function Farm () {
    return (
        <>
            <div className="home-container">
                <AsideMenu />
                <article>
                <section class="info2">
                <h2><center>Money Farm</center></h2>
                <h3><center>Stake Liquidity Pool (LP) tokens to earn.</center></h3>
                <br>
                </br>
                <div class="switch-button">
            <input type="checkbox" name="switch-button" id="switch-label" class="switch-button__checkbox"></input>
            <label for="switch-label" class="switch-button__label"></label>
                <div class="contenedorfarm">  
                </div>
                </div>    
                <div id="inputWrapper">
                <input id="input" type="search" autocomplete="off" spellcheck="false" role="combobox" placeholder="Buscar" aria-live="polite">
                    </input>
                </div>
            </section>
        <br>
        </br>
        <div className="cards-dapps-container">
                        <div className="cartes">
                            <div className="header-card-farm">
                                <div className=""> <img 
                                className="cofrelotery"
                                src='./images/Simbolo_moneyland.png'
                                alt="Money Land" 
                                title="Money Land" /> <img 
                                className="cofrelotery"
                                src='./images/logobusd.png'
                                alt="Money Land" 
                                title="Money Land" /><p>MONEY-BUSD</p>
                                <button className="button5">CORE</button><button className="button6">40X</button>
                                </div>
                            </div>
                            <div className="cards-farms-body">
                                <p>ONI TO HARVEST</p>
                                <br/>
                                <p>Locked</p>
                            </div>  
                            <div className="cards-farms-body">
                                <h4>In Wallet</h4>
                                <p>0</p>
                                <br />
                                <button className="unlock-button">Harvest</button>
                                <br></br>
                                <h4>ONI-BUSD LP STAKED</h4>
                            </div>                                                                                                          
                            <div className="cards-farms-footer">
                                <button className="unlock-button">Unlock Wallet</button>    
                            </div>  
                            <button class="redondo">
                            <ion-icon name="caret-down-outline"></ion-icon>
                        </button>                                      
                        </div>


                        <div className="cartes">
                            <div className="header-card-farm">
                                <div className=""><img 
                                className="cofrelotery"
                                src='./images/Simbolo_moneyland.png'
                                alt="Money Land" 
                                title="Money Land" /> <img 
                                className="cofrelotery"
                                src='./images/logobnb.png'
                                alt="Money Land" 
                                title="Money Land" /><p>MONEY-BNB</p>
                                <button className="button5">CORE</button><button className="button6">24X</button>
                                </div>
                            </div>
                            <div className="cards-farms-body">
                                <p>ONI TO HARVEST</p>
                                <br />
                                <p>Locked</p>
                            </div>  
                            <div className="cards-farms-body">
                            <h4>In Wallet</h4>
                                <p>0</p>
                                <br />
                                <button className="unlock-button">Harvest</button>
                                <br></br>
                                <h4>ONI-BNB LP STAKED</h4>
                            </div>                                                                                                          
                            <div className="cards-farms-footer">
                                <button className="unlock-button">Unlock Wallet</button>    
                            </div> 
                            <button class="redondo">
                            <ion-icon name="caret-down-outline"></ion-icon>
                        </button>                                              
                        </div>
                        
                        
                        
                        <div className="cartes">
                            <div className="header-card-farm">
                                <div className=""><img 
                                className="cofrelotery"
                                src='./images/logobnb.png'
                                alt="Money Land" 
                                title="Money Land" /> <img 
                                className="cofrelotery"
                                src='./images/logobusd.png'
                                alt="Money Land" 
                                title="Money Land" /><p>BNB-BUSD</p>
                                <button className="button5">CORE</button><button className="button6">1X</button>
                             </div>         
                            </div>
                            <div className="cards-farms-body">
                                <p>ONI TO HARVEST</p>
                                <br />
                                <p>Locked</p>
                            </div>  
                            <div className="cards-farms-body">
                            <h4>In Wallet</h4>
                                <p>0</p>
                                <br />
                                <button className="unlock-button">Harvest</button>
                                <br></br>
                                <h4>BNB-BUSD LP STAKED</h4>
                            </div>                                                                                                          
                            <div className="cards-farms-footer">
                                <button className="unlock-button">Unlock Wallet</button>    
                            </div>   
                            <button class="redondo">
                            <ion-icon name="caret-down-outline"></ion-icon>
                        </button>                                      
                        </div>
                    </div>
       
      </article>
                </div>     
        </>
    );
}

export default Farm;