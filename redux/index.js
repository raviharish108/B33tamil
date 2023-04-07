
const redux=require("redux")
const createStore=redux.createStore
const BUY_CAKE="BUY_CAKE"

function buycake(){
    return(
        {
        type:BUY_CAKE,
        info:"first redux action"
        }
    )
}

const initial_state={
    no_of_cakes:10
}

const reducer=(state = initial_State,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            no_of_cakes:state.no_of_cakes-1
        }
        default:return state
    }
}
