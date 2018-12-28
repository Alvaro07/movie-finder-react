import React from "react";
import { connect } from "react-redux";

class SearchField extends React.Component {
  handleKeyPress = e => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      this.props.onClick();
    } else {
      this.props.onKeyUp(e);
    }
  };

  render() {
    const typeSearch = this.props.typeSearch;
    const isDisabled = this.props.state.dataSearch
      ? ""
      : "search-field__button--disabled";

    return (
      <div className="search-field">
        <div className="search-field__wrap">
          <input
            className="search-field__input"
            placeholder={`Search ${typeSearch}...`}
            type="text"
            onKeyUp={e => this.handleKeyPress(e)}
          />
          <button
            className={`search-field__button ${isDisabled}`}
            onClick={this.props.onClick}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ state });

export default connect(
  mapStateToProps,
  null
)(SearchField);
