import { Link } from '@mui/material';
import Logo from '../../assets/images/Logo.png';

const Header = ()=>{
    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-purple">
                    <div className="container">
                    <p className= "mb-0 mt-0 text-center">NGO <b>ONLY BE ICHI</b> NAM </p>
                    </div>
                </div>

                <div className="header">
                    <div className="container">
                    <div className="row">
                        <div className="logoWrapper col-sm-3">
                            <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Header;