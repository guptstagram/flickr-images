import React from "react";
import NavbarComponent from "./components/navbarComponent";
import ImagesComponent from "./components/imagesComponent";
import { useSelector, useDispatch } from "react-redux";
import imageFetchAction from "./actions/imageFetchAction";
import ImageMaximise from "./components/imageMaximise";

const App = () => {

  const dispatch = useDispatch();
  const isMax = useSelector(state => state.maximiseImageReducer.isMax);

  React.useEffect(() => {
    dispatch(imageFetchAction(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <NavbarComponent />
      {isMax ? <ImageMaximise /> : null}
      <ImagesComponent />
    </>
  )
}

export default App;
