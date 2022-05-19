export default function (state = [], action) {
  switch (action.type) {
    case 'CHANGE_SUBCATEGORIES':
      return action.payload;
    default:
      return state;
  }
}
