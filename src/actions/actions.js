import axios from "axios";
export const LOAD_CARDS = "LOAD_CARDS";
export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const EDIT_CARD = "EDIT_CARD";

const HOST = "http://localhost:8080";

export const loadCards = () => {
  return dispatch => {
    axios
      .get(`${HOST}`)
      .then(result => {
        return result.data;
      })
      .then(data => {
        console.log("YO CARDS", data);
        dispatch({
          type: LOAD_CARDS,
          cards: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addCard = card => {
  console.log("adding a CARD", card);
  return dispatch => {
    axios
      .post(`${HOST}`, card)
      .then(result => {
        dispatch(loadCards());
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const deleteCard = id => {
  return dispatch => {
    axios
      .delete(`${HOST}/:id`, id)
      .then(data => {
        dispatch(loadCards());
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const editCard = id => {
  return dispatch => {
    axios
      .put(`${HOST}/:id`, id)
      .then(result => {
        dispatch(editCard());
      })
      .catch(err => {
        console.log(err);
      });
  };
};
