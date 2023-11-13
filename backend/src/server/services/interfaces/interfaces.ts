//Interfaces
    export interface Account {
        email: string,
        name: string,
        password: string
    }

    export interface Login {
        name: string,
        password: string
    }

    export interface Update {
        id: string,
        token: string,
        newPassword: string
    }