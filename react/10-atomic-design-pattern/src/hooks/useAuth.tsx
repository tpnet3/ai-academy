import { digestMessage } from "../utils/digestMessage";

export function useAuth() {
  const login = async (id: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("user") || "[]");
    const hashedPassword = await digestMessage(password);

    const user = users.find(
      (user: { id: string; password: string }) =>
        user.id === id && user.password === hashedPassword
    );

    return user;
  };

  const signup = async (id: string, password: string) => {
    const users = JSON.parse(localStorage.getItem("user") || "[]");
    const hashedPassword = await digestMessage(password);
    users.push({ id, password: hashedPassword });
    localStorage.setItem("user", JSON.stringify(users));
  };

  return { login, signup };
}
