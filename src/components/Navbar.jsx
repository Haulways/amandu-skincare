import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import Search from '../assets/custom-icons/Search';
import ProfileLight from '../assets/custom-icons/ProfileLight';
import Cart from '../assets/custom-icons/Cart';
import Signin from '../pages/auth/Signin';
import GlobalAuthModal from '../pages/auth/GlobalAuthModal';

export default function Navbar(){
    const location = useLocation();
    const hideNavSearchbar = location.pathname === '/brands' 
    || location.pathname === '/face'
    || location.pathname.startsWith('/face/')
    || location.pathname === '/bath-and-body'
    || location.pathname === '/perfumes-and-scents';

    const seeAccount = () => {
        window.xuiModalShow('auth-modal');
    }
    
    return(
        <>
        <section className='asc-top-nav xui-d-flex xui-flex-ai-center xui-flex-jc-space-between xui-container xui-h-70'>
            {!hideNavSearchbar && (
                <div className='xui-d-flex xui-flex-ai-center xui-bdr-rad-half asc-top-nav-search xui-pl-1' style={{borderBottom: '1px solid #000'}}>
                    <span className='xui-w-30'><Search /></span>
                    <input className='xui-font-sz-85 xui-w-250' type="text" placeholder='Search product...' style={{ border: 'none', outline: 'none'}} />
                </div>
            )}
            <div className="asc-top-nav-brand xui-h-fluid-100 xui-py-half">
                <NavLink className="xui-text-dc-none xui-h-fluid-100 xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to={'/'}>
                    <img className='xui-img-150 xui-h-fluid-100' src={Logo} alt="" />
                </NavLink>
            </div>
            <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-1'>
                <div onClick={seeAccount} className='xui-text-dc-none xui-cursor-pointer xui-text-black xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                    <span><ProfileLight /></span>
                    <p className='xui-font-sz-85 xui-font-w-600'>Account</p>
                </div>
                <Link to={'/'} className='xui-text-dc-none xui-text-black xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                    <span><Cart /></span>
                    <div className='xui-d-flex xui-flex-ai-center xui-grid-gap-half'>
                        <p className='xui-font-sz-85 xui-font-w-600'>Cart</p>
                        <span className='xui-w-20 xui-h-20 xui-d-flex xui-flex-jc-center xui-flex-ai-center xui-font-sz-75 xui-bg-black xui-text-white xui-bdr-rad-circle'>0</span>
                    </div>
                </Link>
            </div>
        </section>
        {!hideNavSearchbar && (
            <nav className={`xui-navbar asc-navbar `} brand="true" layout="2" menu="2">
                <div className="links" placed="center">
                    <div className="main dark-color primary bg-navyblue">
                        <ul className='xui-grid-gap-2'>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'active-link xui-font-sz-90 nav-links xui-md-font-sz-100 xui-lg-font-sz-85 xui-font-w-600' : 'xui-font-sz-90 nav-links xui-md-font-sz-100 xui-lg-font-sz-85 xui-font-w-400'} to={"/"}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'active-link xui-font-sz-90 nav-links xui-md-font-sz-100 xui-lg-font-sz-85 xui-font-w-600' : 'xui-font-sz-90 nav-links xui-md-font-sz-100 xui-lg-font-sz-85 xui-font-w-400'} to={"about"}>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'active-link xui-font-sz-90 nav-links xui-md-font-sz-100 xui-lg-font-sz-85 xui-font-w-600' : 'xui-font-sz-90 nav-links xui-md-font-sz-100 xui-lg-font-sz-85 xui-font-w-400'} to={"brands"}>Brands</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'active-link xui-font-sz-90 nav-links xui-md-font-sz-100 xui-lg-font-sz-85 xui-font-w-600' : 'xui-font-sz-90 nav-links xui-md-font-sz-100 xui-lg-font-sz-85 xui-font-w-400'} to={"face"}>Face</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'active-link xui-font-sz-90 nav-links xui-md-font-sz-100 xui-lg-font-sz-85 xui-font-w-600' : 'xui-font-sz-90 nav-links xui-md-font-sz-100 xui-lg-font-sz-85 xui-font-w-400'} to={"bath-and-body"}>Bath & Body</NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => isActive ? 'active-link xui-font-sz-90 nav-links xui-md-font-sz-100 xui-lg-font-sz-85 xui-font-w-600' : 'xui-font-sz-90 nav-links xui-md-font-sz-100 xui-lg-font-sz-85 xui-font-w-400'} to={"perfumes-and-scents"}>Perfumes & Scents</NavLink>
                            </li>
                        
                        </ul>
                    </div>
                    {/* <div className="menu">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div> */}
                </div>
            </nav>
        )}
        <GlobalAuthModal />
        </>
    );
}