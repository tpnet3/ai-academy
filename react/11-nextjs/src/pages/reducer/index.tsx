import { useReducer } from "react";

type State = {
  count: number;
};

type Action = { type: "INCREMENT"; payload?: number };

const ACTION_TYPES = {
  INCREMENT: "INCREMENT",
};

function todoReducer(state: State, action: Action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const initialState: State = { count: 0 };

const increment = () => {
  return {
    type: ACTION_TYPES.INCREMENT,
  } as Action;
};

export default function ReducerPage() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div>
      <h1>Reducer Page</h1>
      {JSON.stringify(state)}
      <button onClick={() => dispatch(increment())}>Add Todo</button>
    </div>
  );
}
