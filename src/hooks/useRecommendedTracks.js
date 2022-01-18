// import React, { useContext, useEffect, useState } from "react"
// import { getRecommendedTracks } from "../api/selectors/getRecommendedTracks";
// import { AuthContext } from "../auth/authContext";

// export const useRecommendedTracks = ( category ) => {
//     const { user } = useContext(AuthContext);
//     const { token } = user;

//     const [state, setState] = useState({
//         data: [],
//         loading: true
//     })

//     useEffect(() => {
//         getRecommendedTracks(category, token)
//             .then( tracks => {
//                 setState({
//                     data: tracks,
//                     loading: false
//                 })
//             })
//     }, [category, token])

//     return state;
// }