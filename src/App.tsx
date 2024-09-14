import { useEffect, useState } from "react";
import "./App.css";
import ArrayElement from "./components/arrayElement";

function algorithm(nums: number[], target: number): number[] {
  const numsMap = new Map();
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const diff = target - num;
    if (numsMap.has(diff)) {
      return [numsMap.get(diff), index];
    }
    numsMap.set(num, index);
  }
  return [-1, -1];
}
function App() {
  const [arr, setArray] = useState<number[]>([0, 0]);
  const [target, setTarget] = useState<number>(0);
  const [result, setResult] = useState<number[]>();
  useEffect(() => {
    setResult(algorithm(arr, target));
  }, [arr, target]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    console.log(e.target.value);
    setArray((value) => {
      value[index] = Number(e.target.value);
      return [...value];
    });
    console.log(index);
  };

  const addNode = () => {
    setArray((value) => [...value, 0]);
  };
  return (
    <div className="m-10 text-center">
      <p>
        Two Sum with
        {
          <input
            type="number"
            className="border-solid border-2 border-sky-500"
            onChange={(e) => setTarget(Number(e.target.value))}
          />
        }
        : {result?.toString()}
      </p>
      <div style={{ display: "flex" }}>
        {arr.map((_, index) => (
          <ArrayElement key={index} index={index} onChange={onChange} />
        ))}
      </div>

      <button
        className="border border-gray-800 bg-gray-900 text-white"
        onClick={addNode}
      >
        +
      </button>
    </div>
  );
}

export default App;
