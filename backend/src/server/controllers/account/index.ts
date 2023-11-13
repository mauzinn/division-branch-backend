import * as create from './create'
import * as login from './login'
import * as update from './update'

export const Account = {
    ...create,
    ...login,
    ...update
}