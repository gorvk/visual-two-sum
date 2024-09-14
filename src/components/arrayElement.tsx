const ArrayElement = (props: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  index: number;
}) => {
  return (
    <div
      style={{
        height: "60px",
        width: "60px",
        // border: "2px solid red",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        style={{ width: "100%", height: "100%" }}
        className="border-solid border-2 border-sky-500"
        type="number"
        onChange={(e) => props.onChange(e, props.index)}
      />
    </div>
  );
};

export default ArrayElement;
