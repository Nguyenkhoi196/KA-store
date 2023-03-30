import { ref } from "vue";
import * as auth from "firebase/auth";

import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const error = ref<string|null>(null);
const isPending = ref<boolean>(false);

async function signup(email: string, password: string, fullName: string) {
  isPending.value = true;
  error.value = null;

  try {
    const response = await auth.createUserWithEmailAndPassword(
      auth.getAuth(),
      email,
      password
    );
    if (!response) throw new Error("Could not create");
    const user = auth.getAuth().currentUser;
    if (user){
      await updateProfile(user, {
      displayName: fullName,
    });
  }

    // eslint-disable-next-line no-console
    console.log(response);
    return response;
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function userSignUp() {
  return {
    error,
    isPending,
    signup
  };
}
