import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";

const CountryDropdown =()=>{
    return (
        <>
            <Button className ='countryDrop'>
                <div className='info d-flex flex-column'>
                    <span className='label'>Vị trí</span>
                    <span className='name'>Hà Nội</span>
                </div>
                <span className='ml-auto'><FaAngleDown/></span>
            </Button>
        </>
    )
}

export default CountryDropdown;