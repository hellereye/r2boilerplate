// import { combineReducers } from "redux";
// import types from "./types";
// import { createReducer } from "../utils";

// /* State shape
// {
//     details: product,
//     list: [ product ],
// }
// */

// const detailsReducer = createReducer( null )( {
//     [ types.FETCH_DETAILS_COMPLETED ]: ( state, action ) => action.payload.product,
// } );

// const listReducer = createReducer( [ ] )( {
//     [ types.FETCH_LIST_COMPLETED ]: ( state, action ) => action.payload.products,
// } );

// export default combineReducers( {
//     details: detailsReducer,
//     list: listReducer,
// } );
// 
var initState = {
  auth: true,
  posts: [

    {
            "id": 1,
            "name": "Banana",
            "permalink": "banana",
            "price": 12.99,
            "description": "Banana!",
            "stock": 100,
            "imageUrl": "/dist/images/banana.jpg"
        },
        {
            "id": 2,
            "name": "Apple",
            "permalink": "apple",
            "price": 9.99,
            "description": "Apple!",
            "stock": 100,
            "imageUrl": "/dist/images/apple.jpg"
        }

  ]
}

export default (state, action) => {
  if (!state) state = initState;
  switch (action.type) {
    case "FETCH_POSTS_SUCCESS":
      const list = action.posts.map(item => item.id);
      const items = {};

      action.posts.forEach(post => { items[post.id] = post; });

      return { list, items };

    case 'SAVE_POST_SUCCESS':
    case 'FETCH_POST_SUCCESS':
      return {
        items: {
          ...state.items,
          [action.post.id]: action.post
        },

        list: state.list
      };

    default:
      return state;
  }
};