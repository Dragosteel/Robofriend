import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
    render() {
        const { robots } = this.props;
        const cardsArray = robots.map(robot => {
            return <Card
                key={robot.id}
                id={robot.id}
                name={robot.name}
                email={robot.email}
            />
        });
        return (
            <div>
                {cardsArray}
            </div>
        );
    }
}

export default CardList;