import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

function AsideMenu() {

    const toggleState = useSelector((state) => state?.toggleSlice?.value);
    const [toggle, setToggle] = useState(toggleState);

    useEffect(() => {
        
        setToggle(toggleState);
        console.log(toggleState);

    }, [toggleState]);

    return (
        <aside>
            <div className="">
                <ul>
                    <li>
                        <ion-icon name="home-sharp"></ion-icon>
                        { toggle && <Link to={'/'}>Home</Link> }                        
                    </li>
                    <li>
                        <ion-icon name="analytics-sharp"></ion-icon>
                        { toggle && <Link to={'/Trad'}>Money Trade</Link>}                        
                    </li>
                    <li>
                        <ion-icon name="storefront-sharp"></ion-icon>
                        { toggle && <Link to={'/Farm'}>Money Farm</Link> }                        
                    </li>

                    <li>
                         <ion-icon name="card-sharp"></ion-icon>
                        { toggle && <Link to={'/Banks'}>Banks</Link> }                        
                    </li>
                   <li>
                         <ion-icon name="dice-sharp"></ion-icon>
                        { toggle && <Link to={'/Game'}>Play and win</Link> }                        
                    </li>
                    <li>
                        <ion-icon name="ticket-sharp"></ion-icon>
                        { toggle &&<Link to={'/Lottery'}>Lottery</Link> }                        
                    </li>
                    <li>
                        <ion-icon name="cart-sharp"></ion-icon>
                        { toggle && <Link to={'/marketplace'}>NFT Market</Link> }                        
                    </li>
                    <li>
                        <ion-icon name="person-add-sharp"></ion-icon>
                        { toggle && <Link to={'/Invite'}>Invite & Earn</Link> }                        
                    </li>
                    <li>
                        <ion-icon name="people-sharp"></ion-icon>
                        { toggle && <Link to={'/Perfil'}>Teams & Profile</Link> }                        
                    </li>
                    <li>
                        <ion-icon name="bar-chart-sharp"></ion-icon>
                        { toggle && <p>Analytics</p> }                        
                    </li>
                </ul>
            </div>
            <div className="aside-footer">
                <div className="fields-footer">
                <div className="">
                <ul>
                    <li>
                    <ion-icon name="logo-whatsapp"></ion-icon>                            
                    </li>
                    <li>
                    <ion-icon name="logo-twitter"></ion-icon>                 
                    </li>
                    <li>
                    <ion-icon name="logo-instagram"></ion-icon>          
                    </li>
                    <li>
                    <ion-icon name="logo-facebook"></ion-icon>    
                    </li>
                </ul>
                </div>
                </div>
            </div>
        </aside>
    );
}

export default AsideMenu;