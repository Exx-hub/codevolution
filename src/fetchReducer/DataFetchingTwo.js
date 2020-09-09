import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (currState, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Oops, something went wrong!",
      };
    default:
      return currState;
  }
};

function DataFetchingTwo() {
  const [stateObj, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ERROR",
        });
      });
  }, []);

  return (
    <div>
      {stateObj.loading ? "Loading..." : stateObj.post.title}
      {stateObj.error ? stateObj.error : null}
    </div>
  );
}

export default DataFetchingTwo;
