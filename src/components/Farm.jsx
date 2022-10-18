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
                                src='./images/logobnb.png'
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
                                <p>In Wallet</p>
                                <br />
                                <p>Locked</p>
                            </div>                                                                                                          
                            <div className="cards-farms-footer">
                                <button className="unlock-button">Unlock Wallet</button>    
                            </div>                                        
                        </div>

                        <div className="cartes">
                            <div className="header-card-farm">
                                <div className=""> <img 
                                className="cofrelotery"
                                src='./images/cofre5.png'
                                alt="Money Land" 
                                title="Money Land" /><p>Money Farms</p>
                                <h2> FARMS AND STAKING</h2></div>
                                
                            </div>
                            <div className="cards-farms-body">
                                <p>ONI TO HARVEST</p>
                                <br />
                                <p>Locked</p>
                            </div>  
                            <div className="cards-farms-body">
                                <p>In Wallet</p>
                                <br />
                                <p>Locked</p>
                            </div>                                                                                                          
                            <div className="cards-farms-footer">
                                <button className="unlock-button">Unlock Wallet</button>    
                            </div>                                        
                        </div>
                        <div className="cartes">
                            <div className="header-card-farm">
                                <div className=""><p>Money Farms</p>
                                <h2> FARMS AND STAKING</h2></div>
                                
                            </div>
                            <div className="cards-farms-body">
                                <p>ONI TO HARVEST</p>
                                <br />
                                <p>Locked</p>
                            </div>  
                            <div className="cards-farms-body">
                                <p>In Wallet</p>
                                <br />
                                <p>Locked</p>
                            </div>                                                                                                          
                            <div className="cards-farms-footer">
                                <button className="unlock-button">Unlock Wallet</button>    
                            </div>                                        
                        </div>

                    </div>
       
      </article>
                </div>     
        </>
    );
}

export default Farm;