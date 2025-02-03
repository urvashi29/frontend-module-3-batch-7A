import * as actions from "./actionTypes";

//central storage
export const initState = {
  employees: [],
  users: [],
  data: [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ],
};

const reducer = (state = initState, action) => {
  console.log(action); //action object

  switch (action.type) {
    case actions.ADD_EMPLOYEE:
      //update central storage( employee)
      return { ...state, employees: [...state.employees, action.payload] };
    case actions.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((val) => val.empId != action.payload),
      };
    case actions.ADD_USER:
      // local storage
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

export default reducer;
