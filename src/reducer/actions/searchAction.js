export const searchAction = (newState, action) => {
    
    if ( !action.page) {
        return {...newState, 
            totalResults: action.data.totalResults, 
            data: action.data.Search, 
            isLoading: false 
        }

    } else {
        return {...newState, 
            totalResults: action.data.totalResults, 
            data: newState.data.concat(action.data.Search), 
            isLoading: false, 
            pageSearch: action.page 
        }

    }
    

}

export default searchAction;