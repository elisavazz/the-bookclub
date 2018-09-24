import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	//const Navigation = (props) => {
	render() {
		return (
			<Navbar className="navigation">
				<div className="container nav-content">
					<div>
						<NavbarBrand href="/">The Bookclub</NavbarBrand>
						<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
						{this.props.user && (
							<Collapse isOpen={!this.state.collapsed} navbar>
								<Nav navbar>
									<NavItem>
										<Link className="link nav-link" to="/add">
											Add a book
										</Link>
									</NavItem>
									<NavItem>
										<Link className="link nav-link" to="/profile">
											Profile
										</Link>
									</NavItem>
									<NavItem>
										<Link className="link nav-link" to="/books">
											see all books
										</Link>
									</NavItem>
									<NavItem>
										<Link className="link nav-link" to="/chat">
											Messages
										</Link>
									</NavItem>
								</Nav>
							</Collapse>
						)}

						{this.props.user ? (
							<Link className="link nav-link" to="/auth/logout">
								Logout
							</Link>
						) : (
							<span>
								<Link className="link nav-link" to="/auth/sign-in">
									Sign in
								</Link>
								&nbsp; &nbsp; &nbsp;
								<Link className="link nav-link" to="/auth/sign-up">
									Sign up
								</Link>
							</span>
						)}
					</div>
				</div>
			</Navbar>
		);
	}
}

export default Navigation;
