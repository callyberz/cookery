import { connect } from "react-redux";
import NavigatorView from "../../navigations/Navigation";

export default connect(state => ({
  navigatorState: state.navigation
}))(NavigatorView);
