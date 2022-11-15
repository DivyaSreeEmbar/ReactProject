const BuyCake=BuyCake;
function BuyCake(){
    return{
        type:BuyCake,
        info:'first redux action'
    }
}
//(previousState,action)=>newState
const initialState={
    numofCakes:10
}
const reducer=(state=initialState,action)=>{
    
}