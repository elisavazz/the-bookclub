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

		this.state = {
			collapsed: true
		};
		this.toggleNavbar = this.toggleNavbar.bind(this);
	}
	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	//const Navigation = (props) => {
	render() {
		return (
			<div>
				<Navbar color="faded" light expand="sm">
					<NavbarBrand href="/" className="navBarBrand">
						the Bookclub
					</NavbarBrand>

					<NavbarToggler onClick={this.toggle} />
					{this.props.user && (
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink tag={Link} to="/books">
										bookshelf
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={Link} to="/add">
										add a book
									</NavLink>
								</NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										more
									</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem>
											<NavLink tag={Link} to="/profile">
												profile
											</NavLink>
										</DropdownItem>

										<DropdownItem>
											<NavLink tag={Link} to="/auth/logout">
												log out
											</NavLink>
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							</Nav>
						</Collapse>
					)}
					{!this.props.user && (
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink tag={Link} to="/auth/sign-up">
										Join
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink tag={Link} to="/auth/sign-in">
										Sign in
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					)}
				</Navbar>
			</div>
		);
	}
}

export default Navigation;
