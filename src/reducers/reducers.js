import {
  LOAD_CARDS,
  ADD_CARD,
  DELETE_CARD,
  EDIT_CARD
} from "../actions/actions.js";

const initialState = {
  cards: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `LOAD_CARDS`:
      return {
        ...state,
        cards: action.cards
      };

    case `ADD_CARD`:
      return {
        ...state,
        id: action.id,
        title: action.title,
        priority: action.priority,
        status: action.status,
        createdBy: action.createdBy,
        assignedTo: action.assignedTo
      };

    case `DELETE_CARD`:
      return {
        ...state,
        cards: action.cards
      };

    case `EDIT_CARD`:
      return {
        ...state,
        id: action.id,
        title: action.title,
        priority: action.priority,
        status: action.status,
        createdBy: action.createdBy,
        assignedTo: action.assignedTo
      };

    default:
      return state;
  }
};
