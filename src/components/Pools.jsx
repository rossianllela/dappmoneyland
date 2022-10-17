import AsideMenu from './AsideMenu';

function Pools () {
    return (
        <>
            <div className="home-container">
                <AsideMenu />
                <article>
                <section class="info">
                <h2><center>PLAY AND WIN </center></h2>
                
                <div class="contenedorfarm"> 
                
                </div>
            </section>
        <br>
        </br>

        <div className="cartis-farm">
        <div className="cartis">
                    <h3>
                       Flappy
                    </h3>
                    <img   className="Flappy"
                            src='./images/flappy.png'
                             alt="" />
                </div>  
                <div className="cartis">
                    <h3>
                    EARN
                    </h3>
                    <h1>MONEY</h1>
                    <h3>
                    IN POOLS
                    </h3>
                </div>  
                </div> 
      </article>
                </div> 
        </>
    );
}

export default Pools;