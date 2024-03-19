import AuthError from "next-auth"

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        throw new Error("Auth error.")
      }
      throw new Error();
    }
  }