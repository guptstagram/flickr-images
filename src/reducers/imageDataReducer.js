const imageDataReducer = (state = [], action) => {
    switch (action.type) {
        case 'IMAGES_FETCH':{
            if(action.imageData.data.stat==="ok"){
                return action.imageData.data.photos.photo;
            }
            else return [];
        }
        default:
            return state;
    }
};

export default imageDataReducer;