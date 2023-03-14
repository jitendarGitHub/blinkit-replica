import React, { Component } from 'react'
import { useNavigate } from 'react-router'

class Location extends Component {

    constructor(props) {
        super(props)
        this.state = {
            latitude: null,
            longitude: null,
        }
    }

    position = async () => {
        const navigate = useNavigate()
        await navigator.geolocation.getCurrentPosition(
            position => this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            err => console.log(err)
        );
        console.log(this.state.latitude)
    }

    render() {
        return (
            <div>
                <button onClick={this.position} className='Filter'>Filter</button>
            </div>
        );
    }
}

export default Location;