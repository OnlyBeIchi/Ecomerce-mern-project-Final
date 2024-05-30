import { Button, Link } from '@mui/material';
import Logo from '../../assets/images/Logo.png';
import CountryDropdown from '../CountryDropdown';
import { IoSearch } from 'react-icons/io5';

const Header = ()=>{
    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-purple">
                    <div className="container">
                    <p className= "mb-0 mt-0 text-center">NGO <b>ONLY BE ICHI</b> NAM </p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                        </div>
                        <div className='col-sm-10 d-flex align-items-center part2'>
                            <CountryDropdown/>

                            {/* Search start */}
                                <div className='headerSearch ml-3 mr-3'>
                                    <input type='next'/>
                                    <Button><IoSearch/></Button>
                                </div>
                            {/* Search end */}
                        </div>
                    </div>
                    </div>
                </header>
            </div>
        </>
    )
};

export default Header;