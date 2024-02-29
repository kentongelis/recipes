import { NavLink } from 'react-router-dom'
import Random from './Random'

function Title() {
    return (
        <div>
            <header>
                <h1>Recipe Book</h1>
                <div>
                    <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to='/about'>About</NavLink>
                    <Random />
                </div>
            </header>
        </div>
    )
}

export default Title