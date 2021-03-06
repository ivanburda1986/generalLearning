// ==============APP CODE==============
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const ADD_GOAL = "ADD_GOAL";
const REMOVE_GOAL = "REMOVE_GOAL";

//Action creators
function addTodoAction(todo){
  return{
    type: ADD_TODO,
    todo
  }
}

function removeTodoAction(id){
  return{
    type: REMOVE_TODO,
    id
  }
}

function toggleTodoAction(id){
  return{
    type: TOGGLE_TODO,
    id
  }
}

function addGoalAction(goal){
  return{
    type: ADD_GOAL,
    goal
  }
}

function removeGoalAction(id){
  return{
    type: REMOVE_GOAL,
    id
  }
};

//MIDDLEWARE

const checker = (store) => (next) => (action) =>{
  if(action.type === ADD_TODO && action.todo.name.toLowerCase().indexOf('bitcoin') !==-1){
    return alert("Nope. Do not go into BTC!");
  }
  if(action.type === ADD_GOAL && action.goal.name.toLowerCase().indexOf('bitcoin') !==-1){
    return alert("Nope. Do not go into BTC!");
  }
  return next(action);
};

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Action:", action);
  const result = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return result;
}

// --Reducers
function todos(state=[], action){
  switch(action.type){
    case ADD_TODO:
      return state.concat([action.todo]);
    case REMOVE_TODO:
      return state.filter((todo)=> todo.id !==action.id);
    case TOGGLE_TODO:
      return state.map((todo)=> todo.id !== action.id ? todo : 
      Object.assign({}, todo, {complete: !todo.complete}))
    default:
      return state;
  }
}

 function goals(state=[], action){
   switch(action.type){
     case ADD_GOAL:
       return state.concat([action.goal]);
     case REMOVE_GOAL:
       return state.filter((goal)=> goal.id!==action.id);
     default:
       return state;
   }
 }


//--Initiate a store instance
const store = Redux.createStore(Redux.combineReducers({
  todos,
  goals
}), Redux.applyMiddleware(checker, logger)); //the argument passed into the createStore is the reducer

//ID generator
function generateId (){
  return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
};

function addTodo(){
  const input = document.getElementById('todo');
  const name = input.value;
  input.value = '';

  store.dispatch(addTodoAction({
    id: generateId(),
    name,
    complete: false
  }))
}

function addGoal(){
  const input = document.getElementById('goal');
  const name = input.value;
  input.value = '';
  store.dispatch(addGoalAction({
    id: generateId(),
    name
  }))
}

