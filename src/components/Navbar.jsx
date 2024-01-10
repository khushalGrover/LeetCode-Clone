// import Button from "./helperCompenents/Button";
import {  useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants"; 
const Navbar = () => {
    const [active, setActive] = useState("");
    // const [toggle, setToggle] = useState(false); 

    return (
        <nav className='w-full flex items-center py-5 fixed top-0 z-20 bg-transparent'>
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src="" alt='logo' className='w-9 h-9 object-contain' />
                    <p className='text-secondary-text text-[18px] font-bold cursor-pointer flex hover:text-quinary-text'>
                        Khushal Grover &nbsp;
                        <span className='sm:block hidden'> | 3D Generalist </span>
                    </p>
                </Link>

                <ul className='list-none hidden sm:flex flex-row gap-10'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title ? "text-quinary-text font-extrabold" : "text-secondary-text"
                            } hover:text-quinary-text text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`${nav.id}`}>{nav.title}</a>
                            console.log(nav.title);
                        </li>
                    ))}
                </ul>
            </div>
        </nav>


    );
};

export { Navbar };