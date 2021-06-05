export interface VacationModel {
  description: string;
  destination: string;
  image: string;
  departure_date: string;
  arrival_date: string;
  price: string;
  num_of_followers:number;
}

export const VacationsActionType = {
  GET_ALL_VACATIONS: 'GET_ALL_VACATIONS',
  EDIT_VACATIONS: 'EDIT_VACATIONS',
  DELETE_VACATION: 'DELETE_VACATION',
  ADD_VACATION: 'ADD_VACATION',
};