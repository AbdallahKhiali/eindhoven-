import React from 'react'
import "../style/Navbar.css"
function Navbar() {
    return (
        <div className="navbar" >

            <li className="nav_item item1" >
                <h1 class="title">
                        <div class="span-container s1">
                            <span>back to home</span>
                        </div>
                        <div class="span-container s2">
                            <span>back to home</span>
                        </div>
                </h1>

            </li>
            {/* <li className="nav_item item2" >
                Studio
            </li> */}
            <li className="nav_item item3" >
                 <h1 class="title">
                        <div class="span-container s1">
                            <span>about</span>
                        </div>
                        <div class="span-container s2">
                            <span>about</span>
                        </div>
                </h1>
            </li>
        </div>
    )
}

export default Navbar
