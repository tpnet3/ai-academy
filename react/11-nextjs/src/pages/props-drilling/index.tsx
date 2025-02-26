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

function GrandParent({ children }: { children: ReactNode }) {
  return <Parent>{children}</Parent>;
}

export default function ComponentCompositionPage() {
  const [data] = useState(8888);

  return (
    <div>
      <h1>Props Drilling</h1>
      <GrandParent>
        <Parent>
          <Child>
            <GrandChild data={data} />
          </Child>
        </Parent>
      </GrandParent>
    </div>
  );
}
