import {
    ERROR,
    SET_LAST_PODCAST_LIST,
    SET_LOADING,
} from '../../types';

const GlobalReducer = (state, action) => {
    switch(action.type) {
        case SET_LAST_PODCAST_LIST:
            return {
                ...state,
                podcastList: action.podcastList,
                filteredPodcastList: action.podcastList.entry,
                podcastListLength:  action.podcastList.entry.length,
                lastUpdate: action.lastUpdate,
                listExpirationDate: action.listExpirationDate,
                loading:false
            }
        case SET_LOADING:
            return {
                ...state,
                loading:action.loading
            }
        case ERROR:
            return {
                ...state,
                loading:false
            }
        default:
            return state;
    }
}

export default GlobalReducer;