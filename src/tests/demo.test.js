// import { getFavoritesTracks } from '../api/selectors/getFavoritesTracks';

// describe('API', () => {

//     test('should be return an array of favorites tracks', ( done ) => {
//         const token = 'BQBtSZT1gGL5K9_cAyzwH0ykSlkJvsKH2a7u-qeY25BZi1-hIn1PyhYK1WiC7Sjz5MMl08u2Jgsql17TTm5jckdoRm3-rpQ-41hRZRALhNtoEcamARKkkhRYTnpRR-rpCCqkEBctroxKD5GtWo14hLDwZtXoyns';

//         getFavoritesTracks(token)
//             .then( tracks => {
//                 expect(tracks.length).toBeGreaterThan(0)
//                 done();
//             } )

//     })
// })

// import configureStore from 'redux-mock-store' //ES6 modules
// import thunk from 'redux-thunk';

// const middlewares = [ thunk ]
// const mockStore = configureStore(middlewares)

// // Crear un store fake
// const store = mockStore({
//     auth: {
//         uid: ''
//     }
// })