import { signIn } from "../../../../auth";

interface AuthenticateRequst {
  credentials: {
    email: string,
    password: string,
  }
}
 
export async function authenticate(
{ credentials }: AuthenticateRequst
) {
  try {
    await signIn('credentials', credentials);
  } catch (error) {
    console.error(error)
    throw new Error("Invalid credentials");
  }
}