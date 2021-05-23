import CardsList from './CardsList.js';
import './NewListButton.css';

import React, { Component } from 'react'

export class NewListButton extends Component {

    constructor(){
        super();

        this.index = 0;

        this.state = {
            newList : []
        }
    }

    clicked = ()=>{
        const temp = Object.assign([],this.state.newList);

        this.index += 1;
        
        temp.push(this.index);

        this.setState({newList:temp});
    }
    
    render() {
        return (
            <div>
                {
                    this.state.newList.map((data)=>{
                        return (
                            <div className="list-list" key={data}>
                                <CardsList/>
                            </div>
                        )
                    })
                }
            <button class="d-inline-flex p-2 btn btn-info" onClick={()=>this.clicked()}>+ Add another list</button>
            </div>
        )
    }
}

export default NewListButton;
