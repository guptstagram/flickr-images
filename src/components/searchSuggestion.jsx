import React from "react";
import "../styles/searchSuggestion.css";
import {useSelector,useDispatch} from "react-redux";
import {localStorageClearAction} from "../actions/localStorageActions";

const SearchSuggestion = (props) => {

  const dispatch=useDispatch();
  const ls=useSelector(state=>state.localStorageReducer);
  
  const clearAutoSuggest=(e)=>{
    e.stopPropagation();
    dispatch(localStorageClearAction());
  }

  return (
    <div className="search-suggestion">
      {ls.map(srch=><p key={srch}>{srch}</p>)}
      <div className="button-align">
        <button type="button" onClick={clearAutoSuggest}>Clear</button>
      </div>
    </div>
  );
};

export default SearchSuggestion;
