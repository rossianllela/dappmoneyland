import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../state/slices/toggleSlice';

function Header () {
    
    const toggleState = useSelector((state) => state?.toggleSlice?.value);
    const dispatch = useDispatch();
    const [toggleButton, setToggleButton] = useState(toggleState);

    useState(() => {
        console.log(toggleState);
    }, []);

    const changeStateToggle = () => {
        
        setToggleButton(!toggleButton);
        dispatch(toggle(!toggleButton));

        console.log(!toggleButton);

    }

    return (
        <>
            <header>
                <div className="container-flags">
                    <div className="items-flags">
                        <div className="assets-flags" onClick={ changeStateToggle }>
                            <ion-icon name="reorder-three-outline"></ion-icon>
                        </div>
                        <div className="logo-img">
                        <img 
                                className="logo"
                                src='./images/New_logo_moneyland-01.png'
                                alt="Money Land" 
                                title="Money Land" /> 
                        </div>
                    </div>
                    <div className="items-flags">
                        <div className="assets-flags">
                            <button className="connect-button">Connect</button>
                        </div>
                        <div className="assets-flags">
                            <ion-icon name="radio-button-off-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;