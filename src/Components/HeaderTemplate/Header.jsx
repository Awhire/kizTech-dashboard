import { useContext } from "react"
import "./Header.css"
import { ThemeContext } from "../../ThemeContext"
import { BsSearch } from 'react-icons/bs'
import { AiOutlineUser } from "react-icons/ai"
import { TbMessages } from "react-icons/tb"
import { HiOutlineLogout, HiOutlineMoon } from "react-icons/hi"
import { RiSettingsLine } from "react-icons/ri"
import { DiGoogleAnalytics } from "react-icons/di"
import Misfits from '../../assets/Misfits.jpg'
import { signOut } from "firebase/auth"
import { auth } from "../../Firebase"

const Header = () => {
    const { DarkTheme, setDarkTheme } = useContext(ThemeContext)

    const logout = () => {
        signOut(auth);
        delete localStorage.username;
        delete localStorage.email;
        
    }

  return (
    <header className={`top-navbar ${DarkTheme && 'dark'}`}>
        <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <BsSearch className='icon' />
        </div>

        <div className="tools">
            <AiOutlineUser className='icon small-size' />
            <TbMessages className='icon small-size' />
            <DiGoogleAnalytics className='icon small-size' />

            <div className="divider small-size"></div>

            <HiOutlineMoon className='icon' onClick={() => setDarkTheme(!DarkTheme)} />
            <RiSettingsLine className='icon' />
            <HiOutlineLogout className='icon' onClick={logout} />

            <div className="divider small-size"></div>

            <div className="user">
                <img src={Misfits} alt="" className="profile-img" />
            </div>
        </div>
    </header>
  )
}

export default Header
