const withExampleHOC = (
  WrappedComponent: React.ComponentType<{ text: string }>
) => {
  return function ({ text }: { text: string }) {
    return <WrappedComponent text={text} />;
  };
};

const Text = ({ text }: { text: string }) => {
  return <p>{text}</p>;
};

const ExampleComponent = withExampleHOC(Text);

export default function HocPage() {
  return (
    <div>
      <h1>HOC</h1>
      <ExampleComponent text="hello world" />
    </div>
  );
}
