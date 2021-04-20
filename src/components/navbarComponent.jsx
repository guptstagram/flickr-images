import React from "react";
import "../styles/navbarComponent.css";
import SearchSuggestion from "./searchSuggestion";
import { useSelector, useDispatch } from "react-redux";
import imageFetchAction from "../actions/imageFetchAction";
import { localStorageAction } from "../actions/localStorageActions";

const NavbarComponent = (props) => {
  let timer;
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const ls = useSelector((state) => state.localStorageReducer);

  const handleSearchChange = (e) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      dispatch(imageFetchAction(e.target.value.trim()));
      dispatch(localStorageAction(e.target.value.trim()));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  };

  const handleInputFocus = () => {
    setShow(true);
  };
  const handleInputFocusOut = () => {
    setTimeout(() => setShow(false), 200);
  };

  return (
    <nav className="navbar">
      <h1>Search Photos</h1>
      <input
        type="text"
        id="SearchTerm"
        onChange={handleSearchChange}
        onFocus={handleInputFocus}
        onBlur={handleInputFocusOut}
        placeholder="Type to search..."
      />
      {ls.length && show ? <SearchSuggestion /> : null}
    </nav>
  );
};

export default NavbarComponent;
