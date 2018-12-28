import React from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { resetResults } from "../../reducer/reducer";

class Menu extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li>
            <NavLink
              className="nav__link"
              onClick={() => this.props.resetResults()}
              activeClassName="is-active"
              to="/films/"
            >
              Films
            </NavLink>
          </li>
          <li>
            <NavLink
              className="nav__link"
              onClick={() => this.props.resetResults()}
              activeClassName="is-active"
              to="/tv-series/"
            >
              TV Series
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => ({
  resetResults: () => dispatch(resetResults())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
