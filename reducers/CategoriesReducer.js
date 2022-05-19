export default function (state = [], action) {
  switch (action.type) {
    case 'CHANGE_CATEGORIES':
      return action.payload;
    default:
      return state;
  }
}
