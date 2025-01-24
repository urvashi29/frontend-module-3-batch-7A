// action creators-> function
import { INC, DEC } from "./actionType";

export const onInc = (value) => {
  return {
    type: INC,
    payload: value,
  };
};

export const onDec = (value) => {
  return {
    type: DEC,
    payload: value,
  };
};
