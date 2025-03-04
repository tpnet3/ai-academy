/* eslint-disable  @typescript-eslint/no-explicit-any */

import { useEffect, useReducer } from "react";

interface State {
  isLoading: boolean;
  error: any;
  data: object | undefined;
}

interface Action {
  type: string;
  payload?: object;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true, error: null };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, data: action.payload };
    case "FETCH_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

const initialState = {
  isLoading: false,
  error: null,
  data: undefined,
};

export function useFetchReducer<T>(url: string) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let isCancelled = false;

    async function fetchData() {
      dispatch({ type: "FETCH_START" });

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (!isCancelled) {
          dispatch({
            type: "FETCH_SUCCESS",
            payload: data,
          });
        }
      } catch (error: any) {
        if (!isCancelled) {
          dispatch({
            type: "FETCH_ERROR",
            payload: error.message,
          });
        }
      }
    }

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, [url]);

  return {
    loading: state.isLoading,
    error: state.error,
    data: state.data as T,
  };
}
