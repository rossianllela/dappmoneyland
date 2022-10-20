import AsideMenu from './AsideMenu';

function Lottery () {
    return (
        <>
              <div className="home-container">
                <AsideMenu />
                <article>
                <section class="info">
                <h2><center>The Money Lottery</center></h2>
                <h3><center>Buy tickets with Money</center></h3>
                <h3><center>Win if 2, 3, or 4 of your ticket numbers match!</center> </h3>
                <img 
                                className="derecha"
                                src='./images/loteria.png'
                                alt="Money Land" 
                                title="Money Land" />
                <div class="contenedorfarm">  
                </div>
            </section>
        <br>
        </br>
        <div className="cartes-farm">
        <div className="cartes">
        <div className="header-card-dapp">
                                <div className="carta-lotery"><h5>              
                               
                                <img 
                                className="cofrelotery"
                                src='./images/cofre5.png'
                                alt="Money Land" 
                                title="Money Land" />Total Pot:
                                </h5> 
                <h2>47.972 Money</h2>
                            </div>
                </div>  
                <div className='textolottery'><p>NO. MATCHED</p><p>PRIZE POT</p></div>
                <div className='textolottery'><h4>4</h4><p>0</p></div>
                <div className='textolottery'><h4>3</h4><p>0</p></div>
                <div className='textolottery'><h4>2</h4><p>0</p></div>
                <div className='textolottery'><h4>To burn:</h4><p>0</p></div>
                </div> 
                <div className="cartes">
                               <center><img 
                                className="cofrelotery2"
                                src='./images/cofre1.png'
                                alt="Money Land" 
                                title="Money Land" /> 
                   <div className=""><button className="buttonlotery">UNLOCK WALLET TO ACCESS LOTTERY</button></div>
                   </center> 
                </div> 
                </div> 
       <br>
       </br>
       <center>  <img 
                                className="tesoro"
                                src='./images/tesoroml.png'
                                alt="Money Land" 
                                title="Money Land" />
        </center> 
       <h2><center>HOW IT WORKS</center></h2>
       <h4><center>Spend MONEY to buy tickets, contributing to the lottery pot. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their exact order!</center></h4>
       <br>
       </br>
       <h4><center>READ MORE</center></h4>
       <br>
       </br>
       <div className="cartitas">
       <div className='botonlottery'>
        <button className="buttonlot1">0</button>
        </div>
        <div className='botonlottery'>
        <button className="buttonlot2">0</button>
        </div>
        <div className='botonlottery'>
        <button className="buttonlot3">0</button>
        </div>
        <div className='botonlottery'>
        <button className="buttonlot4">0</button>
        </div>
                </div>            
        </article>
                </div>       
        </>
    );
}

export default Lottery;