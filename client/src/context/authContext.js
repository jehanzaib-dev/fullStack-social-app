import {createContext, useReducer} from 'react';
import AuthReducer from './authReducer.js';


const INITIAL_STATE={
	user:{
  _id:"69d747f9791e0b0a933a0da1" ,
  username: "follower",
  email: "sarim@gmail.com",
  profilePicture: "",
  coverPicture: "",
  followers: [],
  following: ["69d747e1791e0b0a933a0da0"],
  isAdmin: false,
	},
	isFetching:false,
	error:false
};

export const AuthContext=createContext(INITIAL_STATE);

export const AuthContextProvider=({children})=>{
	const [state, dispatch]=useReducer(AuthReducer, INITIAL_STATE);
	return(
		<AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error:state.error, dispatch}}>
		{children}
		</AuthContext.Provider>
		)
}

