import React from 'react';
import { Link } from 'react-router-dom';
class AllBooks extends React.Component {
	componentDidMount() {
		this.props.updateSearch();
	}
	render() {}
}
export default AllBooks;
