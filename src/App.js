import React, { Component } from "react";
import { FormBuilder } from "react-formio";

import "./App.css";

export default class FormIOBuilderPage extends Component {
  render() {
    return (
      <div className="ui container">
        <FormBuilder form={{ display: "form" }} />
      </div>
    );
  }
}
