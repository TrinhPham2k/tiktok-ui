import { ADD_NEW_NOTE , REMOVE_NOTE,EDIT_NOTE} from "../const"
//add note
export const actAddNote =(content)=>{
    return{
        type: ADD_NEW_NOTE,
        content
    }

}

// delete note

export const actRemoveNote =(id)=>{
    return{
        type: REMOVE_NOTE,
        id
    }

}

//edit note

export const actEditNote =(id,content)=>{
    return{
        type: EDIT_NOTE,
        id,
        content
    }

}
