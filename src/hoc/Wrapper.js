const wrapper = (WrappedComponent) => {
  return function CenteredContentWrapper(props) {
    return (
      <div
        style={{
          width: "85%",
          margin: "auto",
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default wrapper;
