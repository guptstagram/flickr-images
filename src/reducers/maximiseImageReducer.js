const maximiseImageReducer=(state={isMax:false,},action)=>{
    switch(action.type){
        case "MAXIMISE_IMAGE":
            return {
                ...state,
                isMax:true,
                ...action.image,
            }
        case "MINIMISE_IMAGE":
            return{
                isMax:false,
            }
        default: return state;
    }
}

export default maximiseImageReducer;