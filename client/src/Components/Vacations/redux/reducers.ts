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
  switch (action.type) {
    case VacationsActionType.GET_ALL_VACATIONS:
      return {
        vacations: action.payload,
      };
    default:
      return {};
  }
};
