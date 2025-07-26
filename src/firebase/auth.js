// src/firebase/auth.js
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import app from "./config";

const auth = getAuth(app);

export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return await signOut(auth);
};

export const signup = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export default auth;
