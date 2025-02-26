import { useAuth } from "../../../hooks/useAuth";
import { useForm } from "../../../hooks/useForm";

export function SignupPage() {
  const { signup } = useAuth();

  const { data, handleChange, handleSubmit } = useForm({
    initialValues: {
      id: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async (values) => {
      if (values.password !== values.passwordConfirm) {
        alert("비밀번호가 일치하지 않습니다.");
        return true;
      }

      await signup(values.id, values.password);

      console.log(values);
    },
  });

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="id"
            placeholder="ID"
            onChange={handleChange}
            value={data.id}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={data.password}
          />
        </div>
        <div>
          <input
            type="password"
            name="passwordConfirm"
            placeholder="Password Confirm"
            onChange={handleChange}
            value={data.passwordConfirm}
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
