import "./components.css"
import { useEffect, useState, useRef} from "react"
import { Link, useLocation, useParams, useNavigate} from "react-router-dom";
export default ()=> {
    const location = useLocation()
    var name = 0
    switch (location.pathname) {
        case "/Home":
            name = 0
            break;
        case "/Page1":
            name = 1
            break;
        case "/Page2":
            name = 2
            break;
        case "/Page3":
            name = 3
            break;
        case "/Page4":
            name = 4
            break;
    }
    let [barN, setBar]=useState(name)
    let [barN_old, setBar_old]=useState(0)
    console.log(location)
    useEffect(()=>{
        let bar = document.querySelector("#bar")
        let list = document.querySelectorAll(".navItems")
        // let bar def to first one
        bar.style.left = `${list[barN].offsetLeft - list[barN].offsetWidth/2}px`
        // let current item add active
        list[barN].classList.add("active")
        if (barN != barN_old) list[barN_old].classList.remove("active")
        // resize rechange
        window.addEventListener("resize", ()=>{
            bar.style.left = `${list[barN].offsetLeft - list[barN].offsetWidth/2}px`
        })
    })
    let switchBar = (n) =>{
        setBar_old(barN)
        setBar(n)
    }
    return (
        <nav className="navBar">
            <div className="bar" id="bar"></div>
            <ul className="navList">
                <li className="navItems" id="navItem1" onClick={()=>switchBar(0)}>
                    <Link to="/Home">HOME</Link>
                </li>
                <li className="navItems" id="navItem2" onClick={()=>switchBar(1)}>
                    <Link to="/Page1">PAGE1</Link>
                </li>
                <li className="navItems" id="navItem3" onClick={()=>switchBar(2)}>
                    <Link to="/Page2">PAGE2</Link>
                </li>
                <li className="navItems" id="navItem4" onClick={()=>switchBar(3)}>
                    <Link to="/Page2">PAGE3</Link>
                </li>
                <li className="navItems" id="navItem5" onClick={()=>switchBar(4)}>
                    <Link to="/Page2">PAGE4</Link>
                </li>
            </ul>
            
        </nav>
    )
}