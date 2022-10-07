const signUpFormReducer = (state, action) => {
    switch (action.type) {
        case "title":
            return {
                ...state, [action.field]: action.payload
            }
        case "image_url":
            return {
                ...state, [action.field]: action.payload
            }
        case "tags":
            return {
                ...state, [action.field]: action.payload
            }
        case "short_description":
            return {
                ...state, [action.field]: action.payload
            }
        case "description":
            return {
                ...state, [action.field]: action.payload
            }
        case "markdown":
            return {
                ...state, [action.field]: action.payload
            }
        case "styles":
            return {
                ...state, [action.field]: action.payload
            }
        case "author":
            return {
                ...state, [action.field]: action.payload
            }
        case "public key":
            return {
                ...state, [action.field]: action.payload
            }
        default:
            return{
                ...state,
            }
    }
}
const initialEventForm = {
    title: "",
    image_url: "",
    tags: "",
    description: "",
    markdown: "",
    styles: "",
    author: "",
    pubKey: "",
};

export {
    initialEventForm
}
export default signUpFormReducer ;