import React, { Component } from "react";
import SearchBox from "./SearchBox";
import CardList from "./CardList";
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => Response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    }

    render() {

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        if (this.state.robots.length === 0) {
            return (
                <div className="v-mid mr-auto ml-auto lds-roller">
                    <div></div><div></div>
                    <div></div><div></div>
                    <div></div><div></div>
                    <div></div><div></div>
                </div>
            );
        } else {
            return (
                <div className="tc">
                    <div>
                        <h1>Robofriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                        <hr></hr>
                    </div>
                    <div className='cardList'>
                        <CardList robots={filteredRobots} />
                    </div>
                </div>
            );
        }
    }
}

export default App;