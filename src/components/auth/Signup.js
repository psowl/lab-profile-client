import React from "react";
// // import axios from "axios";


class Signup extends React.Component {
  
  render() {
    return (
        <div className="signup">
          <h1>Signup</h1>
        <form>
          <label>Username
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange()}></input>
          </label>

          <label>Password
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange()}></input>
          </label>

          <label>Course
          <input type="text" name="course" value={this.state.course} onChange={this.handleChange()}></input>
          </label>

          <label>Campus
          <input type="text" name="campus" value={this.state.campus} onChange={this.handleChange()}></input>
          </label>
        </form>
        </div>
    )
  }
}

export default Signup;