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
                <h3>
                sfdsfsd
                    </h3> 
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
       <h4><center>Spend ONI to buy tickets, contributing to the lottery pot. Win prizes if 2, 3, or 4 of your ticket numbers match the winning numbers and their exact order!</center></h4>
       <br>
       </br>
       <h4><center>READ MORE</center></h4>
       <br>
       </br>
       <div className="cartitas">
                    <h3>
                       EARN UP TO
                    </h3>
                    <h1>124.67% APR</h1>
                    <h3>
                    IN MONEY FARMS
                    </h3>
                </div>  
        </article>
                </div>       
        </>
    );
}

export default Lottery;