import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions,
} from "react-native";

import Icon from "react-native-vector-icons/Feather";

import { Provider, useSelector } from "react-redux";
import store from "../store"; // Adjust the path as necessary

import ChatMessage from "@/components/chatmessage/ChatMessage";
// import { ThemedView } from "@components/ThemedView";
import MessageSenderInputPanel from "@/components/messagesender/MessageSenderInputPanel";
import { FlatList } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

export default function MainChat() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollViewRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const animation = useState(new Animated.Value(-width))[0];

  const toggleMenu = () => {
    const toValue = menuOpen ? -width : 0;

    Animated.timing(animation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setMenuOpen(!menuOpen);
    });
  };

  const { messages, isReceiving } = useSelector((state) => ({
    messages: state.message.messages,
    isReceiving: state.message.isReceiving,
  }));

  useEffect(() => {
    if (scrollViewRef != null)
      scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* Top Navigation */}
        <View style={styles.container1}>
          <View style={styles.navbar}>
            <View style={styles.leftNav}>
              <TouchableOpacity onPress={toggleMenu} style={styles.iconButton}>
                <Icon name="menu" size={24} color="#9ca3af" />
              </TouchableOpacity>
            </View>
            <View style={styles.brandContainer}>
              <Text style={styles.brandText}>Hey buddy!</Text>
            </View>
          </View>
          {/* <FlatList
            style={styles.chatContainer}
            ref={flatListRef}
            data={messages}
            renderItem={({ item }) => (
              <ChatMessage
                isUser={item.isUser}
                text={item.messageText}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            onContentSizeChange={() =>
              flatListRef.current?.scrollToEnd({ animated: true })
            }
          /> */}
          {/* Chat Messages */}
          <ScrollView ref={scrollViewRef} style={styles.chatContainer}>
            {messages.map((item) => (
              <ChatMessage
                key={item.sent}
                isUser={item.isUser}
                text={item.messageText}
              />
            ))}

            {isReceiving && <ChatMessage isUser={false} text="Thinking..." />}
          </ScrollView>
          {/* Message Input */}
          <MessageSenderInputPanel />
        </View>

        <Animated.View
          id="setting"
          style={[styles.settings, { transform: [{ translateX: animation }] }]}
        >
          <View style={styles.navbar}>
            <View style={styles.leftNav}>
              <TouchableOpacity onPress={toggleMenu} style={styles.iconButton}>
                <Icon name="arrow-left" size={24} color="#9ca3af" />
              </TouchableOpacity>
            </View>
            <View style={styles.brandContainer}>
              <Text style={styles.brandText}>Setting</Text>
            </View>
          </View>
          <View style={styles.settingContainer}>
            <View style={styles.settingModal}>
              <View style={styles.settingList}>
                <View style={styles.settinngListContainer}>
                  <Icon name="user" style={styles.settingIcon}></Icon>
                  <Text style={styles.settingLabel}>My Account</Text>
                </View>
                <Icon name="arrow-right" size={20}></Icon>
              </View>
              <View style={styles.settingList}>
                <View style={styles.settinngListContainer}>
                  <Icon name="settings" style={styles.settingIcon}></Icon>
                  <Text style={styles.settingLabel}>General</Text>
                </View>
                <Icon name="arrow-right" size={20}></Icon>
              </View>
              <View style={styles.settingList}>
                <View style={styles.settinngListContainer}>
                  <Icon name="book" style={styles.settingIcon}></Icon>
                  <Text style={styles.settingLabel}>Backstory</Text>
                </View>
                <Icon name="arrow-right" size={20}></Icon>
              </View>
              <View style={styles.settingList}>
                <View style={styles.settinngListContainer}>
                  <Icon name="volume-2" style={styles.settingIcon}></Icon>
                  <Text style={styles.settingLabel}>Voice</Text>
                </View>
                <Icon name="arrow-right" size={20}></Icon>
              </View>
              <View style={styles.settingList}>
                <View style={styles.settinngListContainer}>
                  <Icon name="image" style={styles.settingIcon}></Icon>
                  <Text style={styles.settingLabel}>Avatar</Text>
                </View>
                <Icon name="arrow-right" size={20}></Icon>
              </View>
              <View style={styles.settingList}>
                <View style={styles.settinngListContainer}>
                  <Icon name="help-circle" style={styles.settingIcon}></Icon>
                  <Text style={styles.settingLabel}>User Guide</Text>
                </View>
                <Icon name="arrow-right" size={20}></Icon>
              </View>
            </View>
          </View>
        </Animated.View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  container1: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    height: "100%",
    padding: 16,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FEFEFE",
    elevation: 4,
  },
  leftNav: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginRight: 16,
  },
  badge: {
    position: "absolute",
    top: -1,
    right: -1,
    backgroundColor: "#ef4444",
    borderRadius: 10,
    width: 8,
    height: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#ffffff",
    fontSize: 3,
    fontWeight: "bold",
  },
  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  brandIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 4,
  },
  brandText: {
    color: "#3369FF",
    fontWeight: "600",
    marginLeft: 4,
    fontSize: 24,
  },
  banner: {
    padding: 12,
    alignItems: "center",
  },
  bannerText: {
    color: "#ffffff",
    fontSize: 14,
  },
  bannerLink: {
    textDecorationLine: "underline",
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#1a1a1a",
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
  },
  vdeButton: {
    borderWidth: 1,
    borderColor: "#4b5563",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  vdeText: {
    color: "#9ca3af",
    fontSize: 12,
  },
  chatContainer: {
    flex: 1,
    padding: 16,
    paddingBottom: 100,
  },

  avatarContainer: {
    position: "relative",
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  imageCounter: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  counterText: {
    color: "#000000",
    fontSize: 10,
    fontWeight: "500",
  },

  messageHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  username: {
    fontWeight: "500",
    marginRight: 8,
  },
  userUsername: {
    color: "#9333ea",
  },
  otherUsername: {
    color: "#f97316",
  },
  settings: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: width,
    zIndex: 11,
  },
  settingContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundColor: "#E5E7EB",
  },
  settingModal: {
    backgroundColor: "#FFFFFF",
    margin: 30,
    borderRadius: 20,
    padding: 20,
  },
  settingList: {
    width: "100%",
    padding: 10,
    display: "flex",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  settinngListContainer: {
    display: "flex",
    flexDirection: "row",
  },
  settingIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  settingLabel: {
    fontWeight: 500,
  },
});
