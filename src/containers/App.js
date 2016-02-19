import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as NewGameActions from '../actions/settingsActions';
import Form from '../components/settings/Form';


export default class App extends Component {
  render() {
    const { settings, actions } = this.props;
    const started = settings.get('started');
    return started ? <div>asdsd</div> :
      <Form settings={settings} actions={actions}/>;
  }
}

App.propTypes = {
  settings: PropTypes.instanceOf(Map),
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    settings: state.settings
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NewGameActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
