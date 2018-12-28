import React from "react";
import queryString from "query-string";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";
import { fetchFullData } from "../../reducer/actions/fetchFullData";

class FullMovie extends React.Component {
  componentDidMount(props) {
    const params = queryString.parse(this.props.id.location.search);
    this.props.getFullData(params.id);
  }

  render() {
    if (!this.props.state.fullContent) {
      return <Loader />;
    } else {
      const webSite =
        this.props.state.fullContent.Website === "N/A"
          ? null
          : this.props.state.fullContent.Website;
      const poster =
        this.props.state.fullContent.Poster !== "N/A"
          ? this.props.state.fullContent.Poster
          : "https://images.pexels.com/photos/65128/pexels-photo-65128.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";

      return (
        <div className="full-movie">
          <div className="full-movie__image">
            <img src={poster} alt={this.props.state.fullContent.Title} />
          </div>

          <div className="full-movie__content">
            <h2 className="full-movie__title">
              {this.props.state.fullContent.Title}{" "}
              <span>({this.props.state.fullContent.Year})</span>
            </h2>

            <ul className="full-movie__entry-list">
              <li>{this.props.state.fullContent.Runtime}</li>
              <li>
                {this.props.state.fullContent.Released},{" "}
                {this.props.state.fullContent.Country}
              </li>
              <li>{this.props.state.fullContent.Genre}</li>
            </ul>

            <p className="full-movie__description">
              {this.props.state.fullContent.Plot}
            </p>

            <p className="full-movie__sub">
              <span className="bold">Director: </span>{" "}
              {this.props.state.fullContent.Director}
            </p>
            <p className="full-movie__sub">
              <span className="bold">Writer: </span>{" "}
              {this.props.state.fullContent.Writer}
            </p>
            <p className="full-movie__sub">
              <span className="bold">Actors: </span>{" "}
              {this.props.state.fullContent.Actors}
            </p>
            <p className="full-movie__sub">
              <span className="bold">Awards: </span>{" "}
              {this.props.state.fullContent.Awards}
            </p>

            {webSite && (
              <p className="full-movie__website">
                <a
                  href={this.props.state.fullContent.Website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {this.props.state.fullContent.Website}
                </a>
              </p>
            )}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => ({
  getFullData: id => dispatch(fetchFullData(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullMovie);
