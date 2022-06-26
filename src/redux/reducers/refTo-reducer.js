const initialState = {
    refToAbout: '',
    refToRoadMap: '',
}

const refToReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REF_TO_ABOUT':
            return {
                ...state, refToAbout: action.payload
            }
        case 'SET_REF_TO_ROAD_MAP':
            return {
                ...state, refToRoadMap: action.payload
            }
        default: return state
    }
}

export default refToReducer