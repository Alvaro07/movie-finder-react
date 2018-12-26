export const searchAction = (newState, actionData, actionType, actionPage) => {
    

    if ( actionType === "search") {
        
        return {...newState, 
            totalResults: actionData.totalResults, 
            data: actionData.Search, 
            isLoading: false,
            pageSearch: 1
        }

    } else {

        return {...newState, 
            totalResults: actionData.totalResults, 
            data: newState.data.concat(actionData.Search), 
            isLoading: false, 
            pageSearch: actionPage
        }

    }
    
}

export default searchAction;