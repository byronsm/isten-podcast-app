import React, { useReducer} from 'react';
import GlobalContext from './globalContext';
import GlobalReducer from './globalReducer';
import API from "../../services/API";

import {
    ERROR,
    SET_LOADING,
    
} from '../../types';

const DEFAULT_HOURS_CACHE = 24;

const GlobalState = props => {

    const initialState = {
        loading : true,
    }

    const [ state, dispatch ] = useReducer(GlobalReducer, initialState);    
    const setLoading = async (loading = true) => {
        dispatch({
            type: SET_LOADING,
            loading: loading
        });
    }

    return(
        <GlobalContext.Provider
            value={{
                loading: state.loading,
                setLoading,
            }}
        >{props.children}

        </GlobalContext.Provider>
    )
}
export default GlobalState;
