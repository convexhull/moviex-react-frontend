import React , { Component }from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Header.scss";
import { withRouter } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavMenu from './Navmenu';


class Header extends Component {

    render() {
        return (
            <div className="header">
                <div className="header__logo-box" onClick={() => this.props.history.push("/movies")}>
                    <img src={Logo} alt="logo" className="header__logo" />
                </div>

                <div className="header__options">
                    <div className="header__options-primary">
                        <Link className="header__option" to="/movies">
                            Movies
                  </Link>
                        <Link className="header__option" to="/tvshows">
                            TV Shows
                  </Link>

                        <Link className="header__option" to="/mylist">
                            My List
                  </Link>
                    </div>

                    <div className="header__searchbar">
                        <SearchBar currentRoute={this.props.currentRoute} />
                    </div>

                    {/* {this.props.currentUser ? (
                        <div className="header__options-secondary">
                            <Link className="header__option" to="">
                                Hi, {this.props.currentUser.displayName}
                            </Link>
                            <div
                                className="header__option header__option--signout"
                                onClick={() => auth.signOut()}
                            >
                                Sign Out
                    </div>
                        </div>
                    ) : (
                            <div className="header__options-secondary">
                                <Link className="header__option" to="">
                                    Hi, Guest
                    </Link>
                                <Link
                                    className="header__option header__option--signin"
                                    to="/signin"
                                >
                                    Sign In
                    </Link>
                            </div>
                        )} */}
                </div>
                <FontAwesomeIcon
                    icon={faBars}
                    className="header__nav-menu-icon"
                    onClick={this.props.ToggleMenuHidden}
                />
                {this.props.hidden ? null : <NavMenu />}
            </div>
        );
    }
}



export default Header;

