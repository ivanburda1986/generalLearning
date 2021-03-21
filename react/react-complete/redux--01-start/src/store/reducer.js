import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) =>{
  switch(action.type){
    case actionTypes.INCREMENT: return{
      ...state,
      counter: state.counter + 1
    };
    case actionTypes.DECREMENT: return{
      ...state,
      counter: state.counter -1
    }
    ;
    case actionTypes.ADD: return{
      ...state,
      counter: state.counter + action.val
    }
    ;
    case actionTypes.SUBTRACT: return{
      ...state,
      counter: state.counter - action.val
    };
    case actionTypes.STORE_RESULT: return{
      ...state,
      results: state.results.concat({id: new Date(), value: state.counter}) //contact(), unlike push(), returns a new array rather than manipulating the original one.
    }
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1);
      const updateArray = state.results.filter((result)=> result.id !== action.resultElementId);
    return{
      ...state,
      results: updateArray
    }
  }
  return state;
}

export default reducer;