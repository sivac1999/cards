import {Component} from "react"
class Card extends Component{
    render(){
        const {details}=this.props
        const storedData=details.map((e)=>{
            return(
                <div className="card-col">
                    <div className="card-card">
                        <h1 className="food-name">{e.name}</h1>
                        <p className="foot-rate"><i class="fa fa-star" aria-hidden="true"></i> {e.rating}</p>
                        <p className="food-para">{e. model}</p>
                        <p className="food-amt"> Rs.{e.price}</p>
                        <p className="food-type">{e.typ}</p>
                    </div>
                </div>
            )
        })

        return(
            <div>
               <section id="card-section">
                <div className="container">
                    <div className="card-row">
                        {storedData}

                    </div>
                </div>
                </section> 
            </div>
        )
    }

}
export default Card