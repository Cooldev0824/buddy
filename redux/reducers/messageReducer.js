import { RECEIVE_MESSAGE, SEND_MESSAGE } from "../actions/messageActions";

const initialState = {
  messages: [{ isUser: false, messageText: "Hello, Let's enjoy the day!",sent: new Date() }],
  isReceiving : false
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MESSAGE: {
        const newMessage = {
        isUser: false,
        messageText: action.message.text,
        sent: action.message.sent
      }
      return {
        ...state,
        isReceiving: false,
        messages: [...state.messages, newMessage],
      };
    }
    case SEND_MESSAGE: {
      const newMessage = {
        isUser: true,
        messageText: action.message.text,
        sent: Date.now()
      };

      return {
        ...state,
        isReceiving: true,
        messages: [...state.messages, newMessage],
      };
    }
    default:
      return state;
  }
};

export default messageReducer;
