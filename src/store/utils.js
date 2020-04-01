const spreadArgs = (...args) => ({ payload: [...args] });

const multipleArgsReducer = reducer => ({ reducer: reducer, prepare: spreadArgs });

export { multipleArgsReducer };
