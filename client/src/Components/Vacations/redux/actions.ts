import { VacationsActionType } from '../VacationModel';

export const getVacations =  (vacations: any) => {
  console.log(vacations);
  
  return {
    type: VacationsActionType.GET_ALL_VACATIONS,
    payload: vacations,
  };
};


export const addVacation =  (vacation: any) => {
  console.log(vacation);
  
  return {
    type: VacationsActionType.ADD_VACATION,
    payload: vacation,
  };
};


export const editVacation =  (updatedVacation: any) => {
  console.log(updatedVacation);
  
  return {
    type: VacationsActionType.EDIT_VACATION,
    payload: updatedVacation,
  };
};

export const deleteVacation =  (id:number) => {
  
  return {
    type: VacationsActionType.DELETE_VACATION,
    payload:id
  };
};
