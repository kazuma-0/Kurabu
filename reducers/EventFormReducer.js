const signUpFormReducer = (state, action) => {
    switch (action.type) {
        case "TITLE":
            return {
                ...state, [action.field]: action.payload
            }
        case "IMAGE":
            return {
                ...state, [action.field]: action.payload
            }
        case "TAGS":
            return {
                ...state, [action.field]: action.payload
            }
        case "SHORT_DESCRIPTION":
            return {
                ...state, [action.field]: action.payload
            }
        case "DESCRIPTION":
            return {
                ...state, [action.field]: action.payload
            }
        case "MARKDOWN":
            return {
                ...state, [action.field]: action.payload
            }
        case "STYLES":
            return {
                ...state, [action.field]: action.payload
            }
        case "AUTHOR":
            return {
                ...state, [action.field]: action.payload
            }
        case "PUBLIC KEY":
            return {
                ...state, [action.field]: action.payload
            }
    }
}

export default signUpFormReducer ;