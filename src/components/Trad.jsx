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
                                <div className="tradeexchange"><h2>EXCHANGE</h2>
                                <h4>TRADE TOKENS IN AN INSTANT</h4></div>
                                
                            </div>
                            <div className="cards-trade-body">
                                <p>FROM</p>
                                <p>0.0</p>
                            </div>  
                            <div className="cards-trade-body">
                                <p>TO</p>
                                <p>0.0</p>
                            </div>                                                                                                          
                            <div className="cards-trade-footer">
                                <button className="unlock-button">Unlock Wallet</button>    
                            </div>
                            </div>  
                            </div>   

       </center>
      </article>
                </div>     
        </>
    );
}

export default Nft;