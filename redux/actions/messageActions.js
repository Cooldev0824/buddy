import axios from "axios";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const SEND_MESSAGE = "SEND_MESSAGE";

export const receiveMessage = (message) => (dispatch) => {
  dispatch({
    type: RECEIVE_MESSAGE,
    message,
  });
};

export const sendMessage = (data) => (dispatch) => {
  console.log(data.messageText);
  const messageText = data.messageText;
  dispatch({
    type: SEND_MESSAGE,
    message: { text: messageText },
  });
  axios
    .post("http://localhost:3000", {
      messageText: messageText,
    })
    .then((res) => {
      dispatch({
        type: RECEIVE_MESSAGE,
        message: res.data.replyMessage,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  // send the message to the server
};
