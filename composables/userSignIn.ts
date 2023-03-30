import { ref } from 'vue';
import * as auth from 'firebase/auth';


const error = ref<string|null>(null);
const isPending = ref<boolean>(false);

async function signin(email: string, password: string) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await auth.signInWithEmailAndPassword(
      auth.getAuth(),
      email,
      password);
  if (!response) throw new Error("Could not sign in")
  return response;
  }
  catch (err: any) {
    error.value = err.message;
  }
  finally {
    if(!error.value)
    error.value = null;
    isPending.value = false;
  }
}

export function userSignIn() {
  return {
    error,
    isPending,
    signin,
  };
}
