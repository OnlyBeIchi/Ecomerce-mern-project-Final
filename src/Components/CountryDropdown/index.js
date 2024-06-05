import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from 'react-icons/io5';
import { MdClose } from "react-icons/md";
import React, { useState } from 'react';
import Slide from '@mui/material/Slide';


const Transition = React.forwardRef(function Transition(props,ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  

const CountryDropdown =()=>{

    const [isOpenModal, setisOpenModal] = useState(false);

    return (
        <>
            <Button className ='countryDrop' onClick={()=>setisOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Vị trí</span>
                    <span className='name'>Hà Nội</span>
                </div>
                <span className='ml-auto'><FaAngleDown/></span>
            </Button>

            <Dialog open={isOpenModal}  onClose={()=>setisOpenModal(false)} className='locationModal' TransitionComponent={Transition}>
                <h4 className='mb-0'>Chọn vị trí của bạn</h4>
                <p>Chọn địa chỉ chúng tôi sẽ hiện ưu đãi khu vực</p>
                <Button className='close_'  onClick={()=>setisOpenModal(false)}><MdClose/></Button>

                <div className='headerSearch w-100'>
                    <input type='next' placeholder='Tìm kiếm khu vực....'/>
                    <Button><IoSearch/></Button>
                </div>

                <ul className='countryList mt-3'>
                    <li><Button onClick={()=>setisOpenModal(false)}>Hà Nội</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Thanh Hóa</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Huế</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>TP Hồ Chí Minh</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Hà Nội</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Thanh Hóa</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Huế</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>TP Hồ Chí Minh</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Hà Nội</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Thanh Hóa</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Huế</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>TP Hồ Chí Minh</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Hà Nội</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Thanh Hóa</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Huế</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>TP Hồ Chí Minh</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Hà Nội</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Thanh Hóa</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Huế</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>TP Hồ Chí Minh</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Hà Nội</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Thanh Hóa</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>Huế</Button></li>
                    <li><Button onClick={()=>setisOpenModal(false)}>TP Hồ Chí Minh</Button></li>
                </ul> 
            </Dialog>
        </>
    )
}

export default CountryDropdown;