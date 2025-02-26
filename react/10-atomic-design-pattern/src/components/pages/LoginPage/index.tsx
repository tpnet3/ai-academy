import { useAuth } from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";

export function LoginPage() {
  const { login } = useAuth();

  const { data, handleChange, handleSubmit } = useForm({
    initialValues: {
      id: "",
      password: "",
    },
    onSubmit: async (values) => {
      const user = await login(values.id, values.password);

      if (!user) {
        alert("로그인 실패");
        return true;
      }

      console.log(values);
    },
  });

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="ID"
            name="id"
            onChange={handleChange}
            value={data.id}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={data.password}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
