import * as HomeActions from "../../actions/home";

// Initial state
const initialState = {
  getSurveySuccess: false,
  count: 0
};

// Reducer
export default function HomeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case HomeActions.GETSURVEY_SUCCESS:
      return Object.assign({}, state, {
        getSurveySuccess: true,
        count: action.payload
      });
    case HomeActions.GETSURVEY_FAILED:
      return Object.assign({}, state, {
        getSurveySuccess: false
      });
    default:
      return state;
  }
}
