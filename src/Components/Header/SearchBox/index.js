import { Button } from "@mui/material";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
    return (
        <div className='headerSearch ml-3 mr-3'>
            <input type='next' placeholder='Tìm kiếm vật phẩm....'/>
            <Button><IoSearch/></Button>
        </div>
    )
}

export default SearchBox;