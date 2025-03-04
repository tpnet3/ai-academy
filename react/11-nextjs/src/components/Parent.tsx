import useThemeContext from "@/contexts/useThemeContext";
import Child from "./Child";
import useAppContext from "@/contexts/useAppContext";

export default function Parent() {
  const { count, setCount } = useAppContext();
  const { theme, setTheme } = useThemeContext();

  return (
    <div>
      <div>Parent</div>
      <Child />
      <div>Parent theme: {theme}</div>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}
