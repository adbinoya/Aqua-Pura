import React, { useState } from "react";
import { Text, View, TextInput, FlatList, ScrollView, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export function MessagingScreen() {
  const navigation = useNavigation();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = () => {
    setMessages([...messages, { key: messages.length, text: message }]);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Chat</Text>
      <View style={styles.HorizontalLine}></View>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Enter your message"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSubmit}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E7F4FF",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
    textAlign: "center",
    marginBottom: 5,
  },
  messageContainer: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#ddd",
  },
  messageText: {
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    backgroundColor: "white",
  },
  HorizontalLine: {
    borderBottomColor: "#0078A8",
    borderBottomWidth: 2,
    height: "2%",
    width: "100%",
  },
  sendButton: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 5,
  },
  sendButtonText: {
    fontSize: 18,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fffqq",
    marginRight: 10,
  },
});
