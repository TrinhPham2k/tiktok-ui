import { ADD_NEW_NOTE } from "../const";

 const noteReducers = (state=[], action)=>{
    switch(action.type) {
         case ADD_NEW_NOTE:
           const generateID = new Date().getTime()
           console.log(generateID)
           state = [...state, {id: generateID, content: action.content}]

         default :
           return state;
    }
}
export default noteReducers
