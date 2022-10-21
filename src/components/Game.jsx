import AsideMenu from './AsideMenu';

function Game () {
    return (
        <>
            <div className="home-container">
                <AsideMenu />
                <article>
                <section class="info2">
                <h2><center>PLAY AND WIN</center></h2>               
                                <h3><center>Looking for REAL MONEY rewards? MONEY LAND is the right place to EARN MONEY.</center></h3>
    
                                <img 
                                className="derecha2"
                                src='./images/gana.png'
                                alt="Money Land" 
                                title="Money Land" />
                <div class="contenedorfarm">  
                </div>    
            </section>  
            <br>
            </br>
             <div className="cartos-farm">
        <div className="cartosgame">
        <img 
                                className="game"
                                src='./images/flappygame.webp'
                                alt="Money Land" 
                                title="Money Land" /> 
         <br></br>
        <button className="buttonnft">Go!</button>
                </div>   
                <div className="cartosgame">
        <img 
                                className="game"
                                src='./images/flappygame.webp'
                                alt="Money Land" 
                                title="Money Land" /> 
         <br></br>
        <button className="buttonnft">Go!</button>
                </div>       

       </div>
      </article>
                </div>     
        </>
    );
}

export default Game;