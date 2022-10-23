import AsideMenu from './AsideMenu';

function Perfil () {
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
                                <img class="circular--square" src="./images/perfil.png" />
                                <div className='textotrade'>
                                    <button class="redondo"><ion-icon name="download-outline"></ion-icon></button>
                                    <br></br>
                                    <button class="redondo"><ion-icon name="send-outline"></ion-icon></button>
                                </div>
                                            <h1><strong>NAME</strong></h1>
                                            <p>0x000000000000000000000000000000000000</p>
         </div>
</div>
                            <div className="cards-trade-body">
                                <h4>Team</h4>
                                <label for="file">File progress:</label>
                                <progress id="file" max="100" value="10"> 10% </progress>
                            </div>  
                            <center>
                            <h2>Historico</h2>
                            <button class="redondo">
                            <ion-icon name="file-tray-full-outline"></ion-icon>
                            </button></center>                                                                                                      
            
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

export default Perfil;