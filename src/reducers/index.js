// @flow

import { combineReducers } from 'redux';
import { userRegisterForm } from './userRegisterForm';
import { pending } from './pending'
import { userData }  from './user'
import { title } from './title'
import type { DefaultState } from "../state";

const appReducers : Function => DefaultState = combineReducers({
  title,
	pending,
	userData,
	userRegisterForm
});

export default appReducers;