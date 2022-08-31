// get dom elements
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// button dom elements
const addBtnEl = document.getElementById("addBtn");
const resetBtnEl = document.getElementById("resetBtn");

// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// initial state
const initialState = {
  value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// update ui initially
render();

// subscribe for changes
store.subscribe(render);

// functions
const addBtnClickListener = () => {
  console.log("Hello");
};

const resetBtnClickListener = () => {
  console.log("Hello");
};

// button click listeners
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});

addBtnEl.addEventListener("click", addBtnClickListener);
resetBtnEl.addEventListener("click", resetBtnClickListener);
