import { View, Text, StyleSheet,Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Feather";


export default function ChatMessage({
  isUser,
  text,
}: {
  isUser: boolean;
  text: string;
}) {
  return (
    <View
      style={[styles.messageContainer, isUser && styles.userMessageContainer]}
    >
      {/* {!isUser && (
        <View style={styles.messageOptions}>
          <Image
            source={require("@/assets/images/icon.png")}
            style={{ width: "100%", height: "100%", borderRadius: 100 }}
          ></Image>
        </View>
      )} */}
      <View
        style={[styles.messageContent, isUser && styles.userMessageContent]}
      >
        <View
          style={[styles.messageBubble, isUser && styles.userMessageBubble]}
        >
          <Text style={[styles.messageText, isUser && styles.userMessageText]}>
            {text}
          </Text>
        </View>
      </View>
      {/* {isUser && (
        <View style={styles.userMessageOptions}>
          <Icon name="user" size={26} color="#FFFFFF"></Icon>
        </View>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    marginBottom: 30,
    alignItems: "flex-end",
  },
  userMessageContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  messageContent: {
    flex: 1,
    maxWidth: "75%",
    display: "flex",
  },
  userMessageContent: {
    alignItems: "flex-end",
  },
  messageBubble: {
    backgroundColor: '#EEEEEE',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    padding: 10
  },
  userMessageBubble: {
    backgroundColor: '#3369FF',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
  },
  messageText: {
    lineHeight: 20,
    color: '#505050'
  },
  userMessageText: {
    color: '#FFFFFF'
  },
  messageOptions: {
    marginRight: 8,
    width: 30,
    height: 30,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#FFFFFF',
    elevation: 3,
    bottom: -15
  },
  userMessageOptions: {
    padding: 2,
    marginLeft: 8,
    width: 30,
    height: 30,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#3369FF',
    elevation: 3,
    top: -15
  },
});
