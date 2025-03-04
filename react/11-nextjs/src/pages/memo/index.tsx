import React from "react";
import { useCallback, useEffect, useMemo, useState } from "react";

const Text = React.memo(
  ({
    text,
    onClick,
    data,
  }: {
    text: string;
    onClick: () => void;
    data: any;
  }) => {
    console.log("Render: Text");
    return <div>{text}</div>;
  }
);

export default function MemoPage() {
  const [count, setCount] = useState(0);

  const data = useMemo(() => ({ foo: "bar" }), []);

  const onClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>Memo Page</h1>
      {count}
      <button onClick={() => setCount(count + 1)}>Add</button>
      <Text text={"Hello World!"} onClick={onClick} data={data} />
    </div>
  );
}
