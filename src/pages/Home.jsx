import { Link, useLocation, useParams, useNavigate} from "react-router-dom";
import { useEffect } from "react";
import "./css/Home.css"
export default () => {
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/Home', {state:{name:0}})
    },[])
    return(
        <div className="content">
            <div className="hero item">
                <h1>Home</h1>
                <video autoPlay loop muted>
                    <source src="src/assets/mov_bbb.mp4"/>
                </video>

            </div>
            <div className="card item">
                <img src="https://source.unsplash.com/random/200x200?sig=1" />
                <img src="https://source.unsplash.com/random/200x200?sig=2" />
                <img src="https://source.unsplash.com/random/200x200?sig=3" />
                <img src="https://source.unsplash.com/random/200x200?sig=4" />
            </div>
            <div>
                <article>
                    <div>
                        <img src="https://source.unsplash.com/random/400x200?sig=5" />
                        <div>

                            <h2>
                                FIFA
                            </h2>
                            <p>
                                Argentina's national team will celebrate their World Cup triumph on Tuesday in Buenos Aires at the Obelisk, the monument that is the traditional epicentre of sporting celebrations, the federation said on Monday.

                                "The world champion squad will leave on Tuesday at noon for the Obelisk to celebrate the world title with the fans," the Argentine Football Association (AFA) said on its official Twitter account.

                                The Argentine government declared Tuesday would be a bank holiday so that the entire country "can express their deepest joy for the national team".

                                The national team, who beat France on Sunday, will arrive in the country in the early hours of Tuesday on a state airline flight and spend the night at the federation's training centre located near the airport, according to local media reports.

                                The Standard Channel

                                "Argentina, here we come," AFA president Claudio Tapia said on his Twitter account.

                                Argentina beat France 4-2 on penalties after a 3-3 draw in a pulsating game that was labelled by many as one of the best finals in World Cup history.

                                Argentines, who took to the streets in every corner of the country after winning their third World Cup, are eagerly awaiting the team's arrival to continue the celebrations.

                                "I want to be in Argentina to see how crazy it is. I want them to wait for me, I can't wait to go there and enjoy it with them," the team's talismanic captain Lionel Messi said.

                                (Reuters)
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}