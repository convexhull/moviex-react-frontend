import React from 'react';
import Header from "./components/Header/Header";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { setCurrentUser } from "./Redux/User/user-actions";
import { selectCurrentUser } from "./Redux/User/user-selectors";

import './App.css';

function App() {
  return (
    <div>
      <Header currentRoute={this.props.location.pathname} />
      {/* <Switch>
        <Route exact path="/" component={Movies} />
        <Route path="/movies/:title" component={MovieItemPage} />
        <Route path="/movies" component={Movies} />
        <Route path="/tvshows/:name" component={TVShowItemPage} />
        <Route path="/tvshows" component={TvShow} />
        <Route
          exact
          path="/signin"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <SignIn />
          }
        />
        <Route
          exact
          path="/signup"
          render={() =>
            this.props.currentUser ? <Redirect to="/" /> : <SignUp />
          }
        />
        <Route exact path="/searchresults" component={SearchPage} />
        <Route exact path="/mylist" component={ListOverview} />
      </Switch> */}
    </div>
  );
}



const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);

