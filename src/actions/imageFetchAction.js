import axios from "axios"

const imageFetchAction = (searchTerm) => {

    if (searchTerm === "") {
        return dispatch => {
            axios.get("https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=5c917f888229a9f06e086fe92b568054&format=json&nojsoncallback=1").then(res => {
                dispatch({
                    type: "IMAGES_FETCH",
                    imageData: res,
                })
            })
        }
    }
    else {
        return dispatch => {
            axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=5c917f888229a9f06e086fe92b568054&text=${searchTerm}&format=json&nojsoncallback=1`).then(res => {
                dispatch({
                    type: "IMAGES_FETCH",
                    imageData: res,
                })
            })
        }
    }
}

export default imageFetchAction;