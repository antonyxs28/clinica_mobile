import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function Index() {

  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  return (
    <SafeAreaView className="bg-slate-200 h-screen">
      <View className="p-7">
        <View className="flex flex-row items-center gap-3">
          <View className="flex items-center justify-center w-10 h-10 bg-[#0369A0]">
            <Ionicons name="heart" style={{color: "white"}} size={18}/>
          </View>
          <View>
            <Text className="text-zinc-400 uppercase">CLinicaOS</Text>
            <Text className="font-semibold uppercase text-[#0369A0]">Área do paciente</Text>
          </View>
        </View>

        <View className="pt-16">
          <Text className="text-4xl font-semibold text-[#0369A0]">Bem-vindo de volta.</Text>
          <Text className="text-zinc-400">
            Acesse sua agenda, exames e prescrições em um só lugar.
          </Text>
        </View>

        <View className="bg-white rounded-sm p-6 flex flex-col gap-5 shadow-sm mt-10">
          <View>
            <Text className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 mb-1">Email</Text>
            <View style={styles.inputWrapper}>
              <Ionicons
                style={styles.icon}
                name="mail" 
                size={18}
              />
              <TextInput
                style={[styles.input, focusedEmail && styles.inputFocused]}
                onFocus={() => setFocusedEmail(true)}
                onBlur={() => setFocusedEmail(false)}
                placeholderTextColor="#8A9BB0"
                textContentType="emailAddress"
                placeholder="paciente@email.com"
              />
            </View>
          </View>
          <View>
            <View className="flex flex-row items-center justify-between mb-1">
              <Text className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Senha</Text>
              <Link href={"/"}>
                <Text className="text-[11px] font-medium text-[#0369A0]">Esqueci minha senha</Text>
              </Link>
            </View>
            <View style={styles.inputWrapper}>
              <Ionicons
                style={styles.icon}
                name="lock-closed"
                size={18}
              />
              <TextInput
                placeholder="••••••••"
                style={[styles.input, focusedPassword && styles.inputFocused]}
                onFocus={() => setFocusedPassword(true)}
                onBlur={() => setFocusedPassword(false)}
                placeholderTextColor="#8A9BB0"
                textContentType="password"
              />
            </View>
          </View>
          <View>
            <Pressable className="flex flex-row gap-1 items-center justify-center bg-[#0369A0] h-12 mt-2 w-full rounded-sm">
              <Text className="uppercase text-sm font-semibold text-white">
                Entrar
              </Text>
              <Ionicons
                name="arrow-forward"
                style={{color: 'white'}}
                size={18}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  inputWrapper: {
    position: 'relative',
    justifyContent: 'center'
  },
  icon: {
    position: 'absolute',
    left: 12,
    zIndex: 1,
    color: '#0369A0'
  },
  input: {
    height: 48,
    width: '100%',
    paddingLeft: 40,
    paddingRight: 16,
    fontSize: 14,
    backgroundColor: '#f1f5f9',
    color: '#000',
  },
  inputFocused: {
    backgroundColor: '#fff',
    borderColor: '#0369A0',
    borderWidth: 1
  },
})