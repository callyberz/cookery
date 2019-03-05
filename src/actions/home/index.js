// Actions
export const GETSURVEY_SUCCESS = "ActionState/GETSURVEY_SUCCESS";
export const GETSURVEY_FAILED = "ActionState/GETSURVEY_FAILED";

// Action creators
export function getPosts() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          response.json().then(console.log);
        } else {
          response.json().then(data => {
            console.log(data);
            dispatch(getsurveySuccess(1236969));
            // dispatch(listCoupons(coupons));
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
}

export function getsurveySuccess(data) {
  console.log(data);
  return {
    type: GETSURVEY_SUCCESS,
    payload: data
  };
}
