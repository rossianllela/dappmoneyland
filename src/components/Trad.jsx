import AsideMenu from './AsideMenu';

function Nft () {
    return (
        <>
            <div className="home-container">
                <AsideMenu />
                <article>
                <center>
                <div className="cards-trade-container">
                        <div className="cartes-home">
                            <div className="header-trade-dapp">
                                <div className="tradeexchange">
                                <h2>EXCHANGE</h2>
                                    <div className='textotrade'>
                                <ion-icon name="sync-outline"></ion-icon>
                                <ion-icon name="settings-outline"></ion-icon></div>
                                
                                
                                
                                <h4>TRADE TOKENS IN AN INSTANT</h4></div>
                                
                            </div>
                            <div className="cards-trade-body">
                                <h4>FROM</h4>
                                <p>0.0</p>
                                <div class="caja">
  <select>
    <option>La primera opción</option>
    <option>La segunda opción</option>
    <option>La tercera opción</option>
  </select>
</div>
                            </div>  
                            <button class="redondo">
                            <ion-icon name="caret-down-outline"></ion-icon>
                            </button>
                            <div className="cards-trade-body">
                                <h4>TO</h4>
                                <p>0.0</p>  
                                <div class="caja">
  <select>
    <option>La primera opción</option>
    <option>La segunda opción</option>
    <option>La tercera opción</option>
  </select>
</div>       
                            </div>                                                                                                        
                            <div className="cards-trade-footer">
                            <center><button className="unlock-button">Unlock Wallet</button></center>    
                            </div>
                            <br>
                            </br>
                            <br>
                            </br>
                            </div>  
                            </div>   

       </center>
      </article>
                </div>     
        </>
    );
}

export default Nft;