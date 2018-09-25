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
				<Navbar color="light" light expand="sm">
					<NavbarBrand href="/" className="navBarBrand">
						the Bookclub
					</NavbarBrand>

					<NavbarToggler onClick={this.toggle} />
					{this.props.user && (
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<Link to="/books">
										<NavLink>bookshelf</NavLink>
									</Link>
								</NavItem>
								<NavItem>
									<NavLink href="/add">add a book</NavLink>
								</NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										more
									</DropdownToggle>
									<DropdownMenu right>
										<DropdownItem>
											<Link to="/profile">
												<NavLink>profile</NavLink>
											</Link>
										</DropdownItem>
										<DropdownItem>
											<Link to="/chat">
												<NavLink>messages</NavLink>
											</Link>
										</DropdownItem>
										<DropdownItem>
											<Link to="/auth/logout">
												<NavLink>log out</NavLink>
											</Link>
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
									<Link to="/auth/sign-up">
										<NavLink>Join</NavLink>
									</Link>
								</NavItem>
								<NavItem>
									<Link to="/auth/sign-in">
										<NavLink>Sign in</NavLink>
									</Link>
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
