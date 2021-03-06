import {
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebaseConfig';
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';
import Swal from 'sweetalert2'


export const startLoginEmailPassword = (email, password) =>{

    return (dispatch) =>{

        dispatch( startLoading() );

        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName, 'firebase', ''))
            })
            .catch( (err) => {
                dispatch( finishLoading() );
                Swal.fire('Error', err.message, 'error')
            })

    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then( async ({ user }) => {

                await updateProfile(auth.currentUser, {
                    displayName: name,  photoURL: ""
                })

                dispatch(login(user.uid, user.displayName, 'firebase', ''))

            })
            .catch( (err) => {
                console.log(err.code, err.message);
                Swal.fire('Error', err.message, 'error')
            })

        console.log(auth.currentUser)
    }
}

export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then( res => {
            })
    }
}

export const login = (uid, name, type, token, expires) => ({
    type: types.login,
    payload: {
        uid,
        name,
        type,
        token,
        expires
    }
})

export const startLogout = () => {
    return async (dispatch) => {
        const auth = getAuth();
        await signOut(auth)
        dispatch( logout() );
    }
}

export const logout = () => ({
    type: types.logout
})

export const setToken = (payload) => ({
    type: types.setToken,
    payload
})

export const runLogoutTimer = (dispatch, timer) => {
    setTimeout( () => {
        dispatch( logout() )
    }, timer)
}
