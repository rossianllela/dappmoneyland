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
                        { toggle && <Link to={'/Pools'}>Play and win</Link> }                        
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
                        <ion-icon name="shield-sharp"></ion-icon>
                        { toggle && <p>Audit</p> }                        
                    </li>
                    <li>
                        <ion-icon name="person-add-sharp"></ion-icon>
                        { toggle && <Link to={'/Invite'}>Invite & Earn</Link> }                        
                    </li>
                    <li>
                        <ion-icon name="people-sharp"></ion-icon>
                        { toggle && <p>Teams & Profile</p> }                        
                    </li>
                    <li>
                        <ion-icon name="bar-chart-sharp"></ion-icon>
                        { toggle && <p>Analytics</p> }                        
                    </li>
                    <li>
                        <ion-icon name="bulb-sharp"></ion-icon>
                        { toggle && <Link to={'/Invite'}>IFO</Link>}                        
                    </li>
                    <li>
                        <ion-icon name="ellipsis-horizontal-sharp"></ion-icon>
                        { toggle && <p>MORE</p> }                        
                    </li>
                </ul>
            </div>
            <div className="aside-footer">
                <div className="fields-footer">
                    <div className="">
                        <ion-icon name="stats-chart-sharp"></ion-icon>
                    </div>
                    <div className="">
                        <div className="">
                            <ion-icon name="logo-whatsapp"></ion-icon>
                        </div>
                        <div className="">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="fields-footer">
                    <div className=""></div>
                </div>
            </div>
        </aside>
    );
}

export default AsideMenu;