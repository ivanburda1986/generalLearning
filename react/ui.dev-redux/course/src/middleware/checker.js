import {ADD_TODO} from '../actions/todos';
import {ADD_GOAL} from '../actions/goals';

const checker = (store ) => (next) => (action) => {
    //place for the middleware code
    if (action.type === ADD_TODO && action.todo.name.toLowerCase().indexOf('bitcoin') !== -1){
        return alert ("Nope. It's a bad idea")
      };
      if (action.type === ADD_GOAL && action.goal.name.toLowerCase().indexOf('bitcoin') !== -1){
        return alert ("Nope. It's a bad idea")
      };
      return next(action);
  };

  export default checker;