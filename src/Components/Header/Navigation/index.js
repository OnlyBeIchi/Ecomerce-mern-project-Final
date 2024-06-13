import { Button } from "@mui/material";
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Navigation = () => {
        return(
            <nav>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-3 navPart1'>
                                <div className="cartWrapper">
                                <Button className='allCatTab align-items-center'>
                                    <span className="icon1 mr-2"><IoIosMenu/></span>
                                    <span class='text'>Danh mục</span>
                                    <span className="icon2 ml-2"><FaAngleDown/></span>
                                </Button>
                                <div className="sidebarNav">
                                        <ul>
                                            <li>
                                            <Link to="/"><Button>Fashion</Button></Link>
                                            <Link to="/"><Button>Electronic</Button></Link>
                                            <Link to="/"><Button>Food</Button></Link>
                                            <Link to="/"><Button>Grocery</Button></Link>
                                            <Link to="/"><Button>Mobile</Button></Link>
                                            <Link to="/"><Button>Mobile</Button></Link>
                                            </li>
                                        </ul>
                                </div>
                                </div>
                            </div>

                            <div className='col-sm-10 navPart2 d-flex align-items-center'>
                                <ul className="list list-inline ml-auto">
                                    <li className="list-inline-item"><Link to="/"><Button>Home</Button></Link></li>
                                    <li className="list-inline-item">
                                        <Link to="/"><Button>Fashion</Button></Link>
                                        <div className="submenu shadow">
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        </div>
                                    </li>
                                    <li className="list-inline-item"><Link to="/"><Button>Electronic</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        </div>
                                    </li>
                                    <li className="list-inline-item"><Link to="/"><Button>Food</Button></Link>
                                    <div className="submenu shadow">
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        <Link to="/"><Button>Footwear</Button></Link>
                                        <Link to="/"><Button>Watches</Button></Link>
                                        <Link to="/"><Button>Clothing</Button></Link>
                                        </div>
                                    </li>
                                    <li className="list-inline-item"><Link to="/"><Button>Grocery</Button></Link></li>
                                    <li className="list-inline-item"><Link to="/"><Button>Mobile</Button></Link></li>
                                    <li className="list-inline-item"><Link to="/"><Button>Blog</Button></Link></li>
                                    <li className="list-inline-item"><Link to="/"><Button>Contact</Button></Link></li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </nav>
        )
}

export default Navigation;