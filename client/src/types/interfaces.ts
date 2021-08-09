import { E_ERROR, UserType } from "./enum";
import { RouteComponentProps } from "react-router-dom";

// REACT
export interface ITarget {
	target: {
		value: React.SetStateAction<string>;
	};
	preventDefault(): void;
}

// ERRORS
export interface IMsg {
	msg: string | any;
}

// AUTH
export interface IUser {
	firstName?: string;
	lastName?: string;
	email: string;
	password?: string;
	confirmPassword?: string;

	Address?: string;
	mobileNumber?: string;
	_id?: string;
	userImage?: string;
	userType?: UserType.ADMIN | UserType.USER;
}

export interface IAuthForm {
	isAuthenticated?: boolean;
	userType?: UserType.ADMIN | UserType.USER;
	error: IError;
	clearErrors(): void;
}

export interface ILoginModal extends IAuthForm {
	login(user: IUser): void;
	userId?: string;
}

export interface IRegisterModal extends IAuthForm {
	register(user: IUser): void;
	userId?: string;
}

export interface ILogoutProps {
	logout(): void;
}

export interface IError {
	id: E_ERROR;
  msg: IMsg;
}

export interface IAuthReduxProps {
	auth: { isAuthenticated: boolean } | IUserRedux;
	error: IError;
}

export interface IConfigHeaders {
	headers: {
		[index: string]: string;
	};
}

export interface IAlertProps {
  error: IErrorsRedux;
  clearErrors(): void;


}

// NAVBAR
export interface IAppNavbar {
	auth?: {
		isAuthenticated: boolean;
		user: IUser;
	};
}

// ITEMS
export interface IExistingItem {
	_id: string;
	name: string;
}

export interface IUserListDashBoard extends RouteComponentProps {
	users: IUser[];

	getUsers(): void;
	deleteUser(_id: string): void;
	auth: IUserRedux;
	error: IErrorsRedux;
	logout(): void;
	clearErrors(): void;
}

export interface IUserDashboard extends RouteComponentProps {
	auth: IUserRedux;
	loadUser(): void;
	error: IErrorsRedux;
	logout(): void;
	editUser(user: IUser): void;
	clearErrors(): void;
	getUserById(_id: string): void;
	users: IUser[];
	getUserAdmById(_id: string): void;

	editAdmUser(user: IUser): void;
}

// <<<<<<<<<<<>>>>>>>>>>>>
// <<<<<<<< FLUX >>>>>>>>>
// <<<<<<<<<<<>>>>>>>>>>>>

export interface IAuthFunction {
	name?: string;
	email: string;
	password: string;
}

export interface IReturnErrors {
	msg: {
		msg: string | any;
	};
	status: string;
	id: any;
}

export interface IErrorsRedux {
	msg: string | any ;

	status: string | null;
	id: any | null;
}

export interface IAction {
	type: actionTypes | string;
	payload?: any;
}

export interface IUserRedux {
	isLoading: boolean;
	isAuthenticated: boolean;
	user: IUser | null;
	token: string | null;
}

export type actionTypes =
	| "GET_USERS"
	| "EDIT_USER"
	| "DELETE_USER"
	| "USERS_LOADING"
	| "USER_LOADING"
	| "USER_LOADED"
	| "AUTH_ERROR"
	| "LOGIN_SUCCESS"
	| "LOGIN_FAIL"
	| "LOGOUT_SUCCESS"
	| "REGISTER_SUCCESS"
	| "REGISTER_FAIL"
	| "GET_ERRORS"
	| "CLEAR_ERRORS";

export * from "../flux/reducers/index";
