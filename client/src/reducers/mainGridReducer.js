/*
main grid reducer , returns changes to the render state based on the case type
*/

const mainGridInitialState = {
  render: 'first floor',
};

export default (state = mainGridInitialState, action) => {
  switch (action.type) {
    case 'FIRST_FLOOR':
      return {
        ...state,
        render: action.payload,
      };
    default:
      return state;
  }
};
