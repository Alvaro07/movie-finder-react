export const searchAction = (newState, action) => {
    
    if ( !action.page) {
        return {...newState, data: action.data, isLoading: false }
    } else {
        return {...newState, data: newState.data.concat(action.data), isLoading: false, pageSearch: action.page }
    }
    

}

export default searchAction;