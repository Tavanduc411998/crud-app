const initialState = {
  statuses: [
    {
      id: 1,
      name: "status 1",
      description: "status description 1",
      active: "true",
    },
    {
      id: 2,
      name: "status 2",
      description: "status description 2",
      active: "true",
    },
    {
      id: 3,
      name: "status 3",
      description: "status description 3",
      active: "false",
    },
  ],
  activeId: null,
};

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_STATUS": {
      const newList = [...state.statuses];
      newList.push(action.payload);
      return {
        ...state,
        statuses: newList,
      };
    }

    case "SET_ACTIVE_STATUS": {
      const newActiveId = action.payload.id;
      return {
        ...state,
        activeId: newActiveId,
      };
    }

    default: {
      return state;
    }
  }
};

export default statusReducer;
