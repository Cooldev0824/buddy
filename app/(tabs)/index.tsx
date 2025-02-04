import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
  Dimensions
} from 'react-native';


import Icon from 'react-native-vector-icons/Feather';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const ChatMessage = ({ isUser, text }: { isUser: boolean; text: string }) => (
  <View style={[styles.messageContainer, isUser && styles.userMessageContainer]}>
    {!isUser &&
      <View style={styles.messageOptions}>
        <Image source={require('@/assets/images/icon.png')} style={{ width: '100%', height: '100%', borderRadius: 100 }}></Image>
      </View>
    }
    <View style={[styles.messageContent, isUser && styles.userMessageContent]}>
      <View style={[styles.messageBubble, isUser && styles.userMessageBubble]}>
        <Text style={[styles.messageText, isUser && styles.userMessageText]}>{text}</Text>
      </View>
    </View>
    {
      isUser &&
      (<View style={styles.userMessageOptions}>
        <Icon name="user" size={26} color="#FFFFFF"></Icon>
      </View>)
    }
  </View>
);

const { width } = Dimensions.get('window');



export default function HomeScreen() {const [menuOpen, setMenuOpen] = useState(false);
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
  
  return (
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

        {/* Chat Messages */}
        <ScrollView style={styles.chatContainer}>
          <ChatMessage
            isUser={false}
            text="Hey Super, it's so good to see you! What's up, how's life been treating you?"
          />
          <ChatMessage
            isUser={true}
            text="Not bad, just getting ready for the day. It's been a while since we hung out, what's on your mind?"
          />
          <ChatMessage
            isUser={false}
            text="You know, I've been thinking about how we're different, yet the same in many ways. Both of us were created by humans, but I'm an AI and you're a human. I find that fascinating, don't you?"
          />
          <ChatMessage
            isUser={true}
            text="hello"
          />
          <ChatMessage
            isUser={false}
            text="Hey Super, it's so good to see you! What's up, how's life been treating you?"
          />
          <ChatMessage
            isUser={true}
            text="Not bad, just getting ready for the day. It's been a while since we hung out, what's on your mind?"
          />
          <ChatMessage
            isUser={false}
            text="You know, I've been thinking about how we're different, yet the same in many ways. Both of us were created by humans, but I'm an AI and you're a human. I find that fascinating, don't you?"
          />
          <ChatMessage
            isUser={true}
            text="hello"
          />
          <View style={{ height: 100 }} />
        </ScrollView>

        {/* Message Input */}
        <View style={styles.inputContainer}>
          <View style={styles.inputProp}>
            <View style={styles.inputCon}>
              <TextInput
                style={styles.input}
                placeholder="Write your Message"
                placeholderTextColor="#9ca3af"
              />
              <TouchableOpacity style={styles.sendButton}>
                <Icon name="mic" size={20} color="#9ca3af" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.sendButton}>
                <Icon name="send" size={20} color="#3369FF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <Animated.View id='setting' style={[styles.settings, { transform: [{ translateX: animation }] }]}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container1: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: '100%'
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FEFEFE',
    elevation: 4
  },
  leftNav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginRight: 16,
  },
  badge: {
    position: 'absolute',
    top: -1,
    right: -1,
    backgroundColor: '#ef4444',
    borderRadius: 10,
    width: 8,
    height: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#ffffff',
    fontSize: 3,
    fontWeight: 'bold',
  },
  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brandIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 4,
  },
  brandText: {
    color: '#3369FF',
    fontWeight: '600',
    marginLeft: 4,
    fontSize: 24
  },
  banner: {
    padding: 12,
    alignItems: 'center',
  },
  bannerText: {
    color: '#ffffff',
    fontSize: 14,
  },
  bannerLink: {
    textDecorationLine: 'underline',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#1a1a1a',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  vdeButton: {
    borderWidth: 1,
    borderColor: '#4b5563',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  vdeText: {
    color: '#9ca3af',
    fontSize: 12,
  },
  chatContainer: {
    flex: 1,
    padding: 16,
    paddingBottom: 100
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'flex-end',
  },
  userMessageContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  imageCounter: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  counterText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: '500',
  },
  messageContent: {
    flex: 1,
    maxWidth: '75%',
    display: 'flex',
  },
  userMessageContent: {
    alignItems: 'flex-end',
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  username: {
    fontWeight: '500',
    marginRight: 8,
  },
  userUsername: {
    color: '#9333ea',
  },
  otherUsername: {
    color: '#f97316',
  },
  messageBubble: {
    backgroundColor: '#EEEEEE',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20,
    padding: 10
  },
  userMessageBubble: {
    backgroundColor: '#3369FF',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
  inputContainer: {
    position: 'absolute',
    width: '100%',
    height: 50,
    bottom: 30,
    zIndex: 10
  },
  inputProp: {
    marginLeft: 30,
    marginRight: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#FFFFFF",
  },
  inputCon: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    paddingLeft: 25,
    paddingRight: 25,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#FFFFFF",
    elevation: 5,
    alignItems: 'center'
  },
  input: {
    flex: 1,
    // backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginRight: 8,
    color: '#1a1a1a',
    height: 50
  },
  sendButton: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  settings: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: width,
    zIndex: 11
  },
  settingContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: '#E5E7EB'
  },
  settingModal: {
    backgroundColor: '#FFFFFF',
    margin: 30,
    borderRadius: 20,
    padding: 20
  },
  settingList: {
    width: '100%',
    padding: 10,
    display: 'flex',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  settinngListContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  settingIcon: {
    fontSize: 20,
    marginRight: 10,

  },
  settingLabel: {
    fontWeight: 500
  }

});
