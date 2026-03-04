class Data {
    setLoggedToken(token) {
        sessionStorage.token = token
    }

    getLoggedInToken() {
        return sessionStorage.token
    }

    removeLoggedInToken() {
        delete sessionStorage.token
    }
}

// instance

export const data = new Data()