import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/index';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    const { users } = this.props;
    return users.map(({ id, name }) => (
      <li key={id}>
        {name}
      </li>
    ))
  };

  render() {
    return (
      <div>
        Heres is a big list of users
        <h1>
          {this.renderUsers()}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) =>  ({ users });

const loadData = (store) => store.dispatch(fetchUsers());

export default {
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
  loadData
};