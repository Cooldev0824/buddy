import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { Component, useState } from "react";
import axios from "axios";

import Icon from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import { sendMessage } from "@/redux/actions/messageActions";

export default function MessageSenderInputPanel() {
  const [messageText, setMessageText] = useState("");
  const dispatch = useDispatch();
  const onSendMessage = () => {
    dispatch(sendMessage({ messageText:messageText }))
    setMessageText("");
  };
  const onChangeMessageText = (e) => {
    setMessageText(e.target.value);
  };
  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputProp}>
        <View style={styles.inputCon}>
          <TextInput
            style={styles.input}
            placeholder="Write your Message"
            placeholderTextColor="#9ca3af"
            value={messageText}
            onChange={onChangeMessageText}
          />
          <TouchableOpacity style={styles.sendButton}>
            <Icon name="mic" size={20} color="#9ca3af" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton} onPress={onSendMessage}>
            <Icon name="send" size={20} color="#3369FF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: "absolute",
    width: "100%",
    height: 50,
    bottom: "5% ",
    zIndex: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  inputProp: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    backgroundColor: "#FFFFFF",
  },
  inputCon: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    paddingLeft: 25,
    paddingRight: 25,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#FFFFFF",
    elevation: 5,
    alignItems: "center",
  },
  input: {
    flex: 1,
    // backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
    color: "#1a1a1a",
    height: 50,
  },
  sendButton: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
