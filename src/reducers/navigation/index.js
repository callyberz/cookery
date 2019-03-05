import { NavigationActions } from "react-navigation";
import includes from "lodash/includes";

import AppNavigator from "../../navigations/RootNavigation";

export default function NavigatorReducer(state, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
