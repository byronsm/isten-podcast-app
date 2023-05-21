import React, { useReducer} from 'react';
import GlobalContext from './globalContext';
import GlobalReducer from './globalReducer';
import API from "../../services/API";

import {
    ERROR,
    SET_LAST_PODCAST_LIST,
    SET_LOADING,
    SET_PODCAST_LIST_FILTERED,
    
} from '../../types';

const DEFAULT_HOURS_CACHE = 24;

const GlobalState = props => {

    const getPodcastListFromStorage = () => {
       return localStorage.hasOwnProperty("podcastList") ?  JSON.parse(localStorage.getItem('podcastList')): null;
    }

    const getLastUpdateFromStorage = () => {
        return localStorage.getItem('lastUpdate');
    }

    const getListExpirationDateFromStorage = () => {
        return localStorage.getItem('listExpirationDate');
    }

    const initialState = {
        podcastList: getPodcastListFromStorage(),
        filteredPodcastList: getPodcastListFromStorage()?.entry || [],
        podcastListLength : getPodcastListFromStorage()?.entry.length || 0,
        lastUpdate: getLastUpdateFromStorage(),
        listExpirationDate:  getListExpirationDateFromStorage(),
        loading : true
    }

    const [ state, dispatch ] = useReducer(GlobalReducer, initialState);    

    const setLoading = async (loading = true) => {
        dispatch({
            type: SET_LOADING,
            loading: loading
        });
    }

    const _addHoursToDate = (date, hours = DEFAULT_HOURS_CACHE) => {
        return new Date(date.getTime() + (hours * 60 * 60 * 1000))
    }

    const filterPodcastByText = (text) => {
        const propsToSearch = ["im:name", "im:artist", "title", "summary"];
        const filteredPodcastList =  state.podcastList.entry.filter(item => {    
            return propsToSearch.some(prop => {
                const valor = item[prop].label;
                return valor?.toLowerCase().includes(text.toLowerCase());
            });
        });
        dispatch({
            type: SET_PODCAST_LIST_FILTERED,
            filteredPodcastList: filteredPodcastList,
        });
    }

    const reloadPodcastList = (listExpirationDate = state.listExpirationDate) => {
        
        const timeToExpirate = new Date(listExpirationDate) - new Date();
    
        if ((!listExpirationDate || !(state.podcastList?.entry)) &&  timeToExpirate <= 0) {
            getLastPodcastList();
        } else {
            dispatch({
                type: SET_LOADING,
                loading: false
            });
            setTimeout(getLastPodcastList, timeToExpirate);
        }
    }

    const getLastPodcastList = async () => {
        try {
        const contents = await API.getLastPodcastList(),
            newTimeLastUpdate = new Date(),
            listExpirationDate = _addHoursToDate(newTimeLastUpdate);

        localStorage.setItem("podcastList", JSON.stringify(contents?.feed));
        localStorage.setItem("lastUpdate",newTimeLastUpdate);
        localStorage.setItem("listExpirationDate",listExpirationDate);
        reloadPodcastList(listExpirationDate);
        dispatch({
            type: SET_LAST_PODCAST_LIST,
            podcastList: contents?.feed,
            lastUpdate : newTimeLastUpdate,
            listExpirationDate: listExpirationDate,
        });
            
        } catch (error) {
            console.error(error)
            dispatch({
                type: ERROR
            });
        }
    }
    return(
        <GlobalContext.Provider
            value={{
                podcastList : state.podcastList,
                lastUpdate: state.lastUpdate,
                listExpirationDate: state.listExpirationDate,
                loading: state.loading,
                filteredPodcastList: state.filteredPodcastList,
                podcastListLength : state.podcastListLength,
                filterPodcastByText,
                getLastPodcastList,
                reloadPodcastList,
                setLoading,
            }}
        >{props.children}

        </GlobalContext.Provider>
    )
}
export default GlobalState;
