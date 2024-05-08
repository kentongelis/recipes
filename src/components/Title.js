import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import Random from './Random'
import './Title.css'

function Title() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((open) => !open)
    };

    return (
            <header>
                <li className='menu-item-trigger' onClick={toggleMenu}>≡</li>
                <h1 className={`Title ${isOpen ? "is-open" : ""}`}>Recipe Book</h1>
                <nav class={`buttons ${isOpen ? "is-open" : ""}`}>
                    <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to='/about'>About</NavLink>
                    <Random />
                </nav>
            </header>
    )
}

export default Title