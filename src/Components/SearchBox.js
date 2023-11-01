import React, { Component } from "react";

class SearchBox extends Component {
    render() {
        const { searchChange } = this.props;
        return (
            <input className="b--gray bg-light-gray pa3 ba br3"
                type="search"
                placeholder="Search Robots"
                onChange={searchChange}
            />
        );
    }
}

export default SearchBox;