import { useState, ReactNode } from "react";

interface DataProps {
  data: number;
}

function GrandChild({ data }: DataProps) {
  return <div>{data}</div>;
}

function Child({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

function Parent({ children }: { children: ReactNode }) {
  return <Child>{children}</Child>;
}

function GrandParent({ children }: { children: (data: number) => ReactNode }) {
  const [data] = useState(8888);
  return <Parent>{children(data)}</Parent>;
}

export default function ComponentCompositionPage() {
  return (
    <div>
      <h1>Props Drilling</h1>
      <input></input>
      <p>test</p>
      <GrandParent>{(data) => <GrandChild data={data} />}</GrandParent>
    </div>
  );
}
