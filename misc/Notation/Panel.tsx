const PanelRoot = ({ children }: any) => {
  return <section>{children}</section>;
};

const Title = ({ children }: any) => {
  return <h4>{children}</h4>;
};

const Actions = ({ children }: any) => {
  return <div>{children}</div>;
};

const Panel = Object.assign(PanelRoot, {
  Title,
  Actions,
});

export default Panel;
