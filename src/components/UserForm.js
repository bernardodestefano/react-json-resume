import React from 'react';
import { connect } from 'react-redux';
import { Field, Form, actions, Control } from 'react-redux-form';

class UserForm extends React.Component {
  handleSubmit(user) {
    let { dispatch } = this.props;

    // Do whatever you like in here.
    // You can use actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }
  render() {

    return (
      <Form model="user" onSubmit={v => console.log(v)}>
        <div className="field">
          <label>First name:</label>
          <Control.text model=".firstName" />
        </div>

        <div className="field">
          <label>Last name:</label>
          <Control.text model=".lastName" />
        </div>

        <div className="field">
          <label>Email:</label>
          <Control.text model=".email" type="email" />
        </div>

        <Field model=".sex" className="field">
          <label>
            <input type="radio" value="male" />
            Male
          </label>
          <label>
            <input type="radio" value="female" />
            Female
          </label>
        </Field>

        <div className="field">
          <label>Favorite Color:</label>
          <Control.select model=".favoriteColor">
            <option></option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Control.select>
        </div>

        <div className="field">
          <label>
            <Control.checkbox model=".employed" value={true} />
            I am employed
          </label>
        </div>

        <div className="field">
          <label>Notes:</label>
          <Control.textarea model=".notes" />
        </div>

        <button type="submit">
          Submit
        </button>

        <Control.reset model="user" type="reset">
          Reset
        </Control.reset>
      </Form>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps)(UserForm);
