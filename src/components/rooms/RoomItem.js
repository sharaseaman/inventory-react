import React, { Component } from 'react'

class RoomItem extends Component {
state = {
    id: 1,
    room_id: 3,
    name: "Lamp",
    description: "Blanditiis tempora iste dolores cumque incidunt maiores. Voluptatum dolorem amet aliquid minima.",
    image: "https://via.placeholder.com/80.png?text=Item",
    quantity: 1
};


    render() {
        const { image, name, description, quantity } = this.state;

        return (
            <div className="card rounded mx-auto d-block text-center">
                <img class="card-img-top" src={image} alt="placeholder" style={{ width: '80px' }}/>
                <div class="card-body">
                    <h3 class="card-title"> {name} </h3>
                    <div class="card-text"> Description: {description} </div>
                    <div class="card-text"> Quantity: {quantity} </div>
                </div>
            </div>
        )
    }
}

export default RoomItem
