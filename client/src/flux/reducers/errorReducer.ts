import { GET_ERRORS, CLEAR_ERRORS } from '../actions/types';
import { IAction,IErrorsRedux} from '../../types/interfaces';

const initialState:IErrorsRedux = {
  msg: {},
  status: null,
  id: null
};

const errorReducer= (state = initialState, action: IAction):IErrorsRedux =>{
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
        id: action.payload.id
      };
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null
      };
    default:
      return state;
  }
}

export default errorReducer
