import {useEffect, useState} from "react"
import { Link, useLocation, useParams, useNavigate} from "react-router-dom";
import "./css/Page2.css"
export default ()=>{
    let [random_no, setNo] = useState(0)
    let [img, setimg] = useState(null)
    const navigate = useNavigate()
    let _list = [
        "",
        "Ikigai Concepts", 
        "新記冰室（荃灣）",
        "ÔDELICE Tsuen Wan West - 海之戀 OP Mall",
        "轉角‧見",
        "Sol House Oyster Bar and Restaurant",
        "Peko Peko Eatery (海之戀商場)",
        "Deer Kitchen (荃新天地)",
        "Espresso Alchemy",
        "WM Café & Bar (海之戀商場) ",
        "The BASE nature",
    ]
    let _list2 = [
        "",
        "src/assets/rest_image/1.png", 
        "src/assets/rest_image/2.png",
        "src/assets/rest_image/3.png",
        "src/assets/rest_image/4.png",
        "src/assets/rest_image/5.png",
    ]
    useEffect(()=>{
        navigate('/Page2', {state:{name:2}})
    },[])
    let random_rest = ()=>{
        const min = 1;
        const max = _list.length;
        const rand = min + Math.random() * (max - min);
        setNo(parseInt(rand))
        let str = `src/assets/rest_image/${parseInt(rand)}.png`
        setimg(<img className="_img" src={str} alt="" />)
    }

    return (
        <div className="content">
            <div className="hero item">
                <h1>Page 2</h1>
                <video autoPlay loop muted>
                    <source src="src/assets/mov_bbb.mp4"/>
                </video>

            </div>
            <div className="rest">
                <button className="random" onClick={random_rest}>Click me!!!</button>
                <div>{_list[random_no]}</div>
                {img}
            </div>
        </div>
    )
}