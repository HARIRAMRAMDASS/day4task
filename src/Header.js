import react from "react";
import './Header.css'
const Header = () =>{
    return(
        <header>
            <h1>welcome to my website</h1>
            <nav class="red">
                <button>
                    <li><a href="/">Home</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                </button>
                </nav>
        </header>
    )
}
export default Header;