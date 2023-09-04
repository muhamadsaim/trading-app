
const initialState = false;

const FileReducer = (state=initialState,action) => {
    switch (action.type) {
        case 'fileChecking':
            return (state = action.payload);
        default:
            return state;
    }
}
 export default FileReducer