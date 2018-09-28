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
			collapsed: true
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	render() {
		const Naviga = (props) => {
			const isLoggedIn = this.props.user;
			if (!isLoggedIn)
				return (
					<div>
						<Navbar color="faded" light expand="sm">
							<NavbarBrand href="/" className="navBarBrand">
								the <span className="underlined-text">Bookish.</span>
							</NavbarBrand>

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
						</Navbar>
					</div>
				);

			return (
				<div>
					<Navbar color="faded" light expand="sm">
						<NavbarBrand href="/" className="navBarBrand">
							<span className="underlined-text">Bookish.</span>
						</NavbarBrand>
						<NavbarToggler onClick={this.toggleNavbar} />
						<Collapse isOpen={this.state.collapsed} navbar>
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
					</Navbar>
				</div>
			);
		};
		return (
			<div>
				<Naviga />
			</div>
		);
	}
}

export default Navigation;
