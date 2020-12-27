import React from 'react';

class Customer extends React.Component {
    render() {
        return(
            <div>
                <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo age={this.props.age} gender={this.props.gender} live={this.props.live}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.age}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.live}</p>
            </div>
        )
    }
}

export default Customer;