import React, { Component } from 'react'

export class CardsList extends Component {

    constructor(){
        super();

        this.data = "";

        this.state = {
            listCards : []
        }
    }

    setData = (e)=>{
        this.data = e.target.value
    }

    addData = ()=>{
        const dataArray = Object.assign([], this.state.listCards);

        dataArray.push({"data":this.data});

        this.setState({listCards:dataArray});
    }

    render() {
        return (
            <div>
                {this.state.listCards.map((card,index)=>{
                    return (<div key={index}>
                        {card.data}
                    </div>)
                })}
                <input type="text" onBlur={this.setData} placeholder="add another card"/>
                <br></br>
                <button class="btn btn-info" onClick={()=>this.addData()}>+ Add another Card</button>
                <br></br>
            </div>
        )
    }
}

export default CardsList;