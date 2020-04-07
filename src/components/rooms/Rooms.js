import React, { Component } from 'react'
// import RoomItem from './RoomItem';

class Rooms extends Component {


    render() {
        return (
            <div className="container">
                {this.props.rooms.map(room => (
                    <div key={room.id} room={room}>{room.name}</div>
                ))}
                
            </div>
            
        )
    }
}

export default Rooms
