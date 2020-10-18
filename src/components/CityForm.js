import React from "react";

class CityForm extends React.Component {
  state = {
    city: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label>
          City: <input value={this.state.city} onChange={this.handleChange} type="text" name="city" />
        </label>{" "}
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default CityForm;
