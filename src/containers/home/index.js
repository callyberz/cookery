import { connect } from "react-redux";
import { compose, withState } from "recompose";
import { bindActionCreators } from "redux";

import HomeScreen from "../../screens/home";
import * as HomeActions from "../../actions/home";

export default compose(
  connect(
    state => ({
      homeState: state.home
    }),
    dispatch => ({
      HomeActions: bindActionCreators(HomeActions, dispatch)
    })
  ),
  withState("isExtended", "setIsExtended", false)
)(HomeScreen);
