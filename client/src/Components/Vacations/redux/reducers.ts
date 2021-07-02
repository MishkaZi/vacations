import { VacationModel, VacationsActionType } from '../VacationModel';

export interface VacationAction {
  type: string;
  payload?: VacationModel[] | VacationModel;
}

interface defaultStateI {
  vacations?: VacationModel[] | VacationModel;
}

const initialState: defaultStateI = {};

export const vacationsReducer = (
  state: defaultStateI = initialState,
  action: VacationAction
): defaultStateI => {
  const newAppState = { ...state };

  switch (action.type) {
    case VacationsActionType.GET_ALL_VACATIONS:
      newAppState.vacations = action.payload;
      return newAppState;
    case VacationsActionType.ADD_VACATION:
      newAppState.vacations = action.payload;
      return newAppState;
    case VacationsActionType.EDIT_VACATION:
      newAppState.vacations = action.payload;
      return newAppState;
      
    default:
      return newAppState;
  }
};

//Temporary
const initDeleteId = { id: 0 };
export const deleteVacationIdReducer = (state = initDeleteId, action:any) => {
  const newState = { ...state };
  switch (action.type) {
    case VacationsActionType.DELETE_VACATION:
      newState.id = action.payload;
      break;
  }
  return newState;
};

