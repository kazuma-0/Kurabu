const signUpFormReducer = (state, action) => {
    switch (action.type) {
        case "NAME":
            return {
                ...state, [action.field]: action.payload
            }
        case "DEPT":
            return {
                ...state, [action.field]: action.payload
            }
        case "BRANCH":
            return {
                ...state, [action.field]: action.payload
            }
        case "ROLL NO":
            return {
                ...state, [action.field]: action.payload
            }
        case "PUBLIC KEY":
            return {
                ...state, [action.field]: action.payload
            }
        case "EMAIL":
            return {
                ...state, [action.field]: action.payload
            }
        case "ROLE":
            return {
                ...state, [action.field]: action.payload
            }
    }
}

export default signUpFormReducer ;