const ArrayElement = (props: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  index: number;
  conditionalClass: string;
}) => (
  <div className="h-14 w-14 mx-auto mb-4">
    <input
      className={`border-solid rounded border-2 border-sky-500 ${props.conditionalClass}`}
      type="number"
      placeholder="0"
      onChange={(e) => props.onChange(e, props.index)}
    />
  </div>
);

export default ArrayElement;
