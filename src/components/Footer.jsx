import "./components.css"
export default () => {
    let foot_list = [
        {name: "1"},
        {name: "2"},
        {name: "3"},
        {name: "4"},
        {name: "5"},
    ]
    // let foot = foot_list.map((val)=>{
    //     return <li className="footer_list">{val.name}</li>
    // })
    foot_list.sort(()=>{
        return -1
    })
    foot_list.filter((val)=>val.name === "1")
    let foot = foot_list.map((val)=>{
        return <li className="footer_list">{val.name}</li>
    })
    return (
    <div className="footer">
        <ul>
            {foot}
        </ul>
    </div>)
}