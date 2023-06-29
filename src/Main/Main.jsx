import { useContext } from 'react'
import './Main.css'
import { ThemeContext } from '../ThemeContext'
import { Routes, Route } from "react-router-dom";
import Header from '../Components/HeaderTemplate/Header'
import Content from '../Components/Content/Content'
import Performance from '../Scene/Performance/Performance';

const Main = () => {
    const { DarkTheme } = useContext(ThemeContext)


  return (
    
      <div className={`main ${DarkTheme && 'dark'}`}>
        <Header />
        
        <Routes>
          <Route path="/" element={<Content />} />
            
          <Route path='/analytics' element={<Performance />} />
            
        </Routes>

      </div>
    
  )
}

export default Main
