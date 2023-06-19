const initialState=[]
const update=false
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'cartitem':return action.payload
        default:return state
    }
}
const updates=(state=update,action)=>{
    switch(action.type){
        case 'update':return action.payload
        default:return state
    }
}

export  {reducer,updates}