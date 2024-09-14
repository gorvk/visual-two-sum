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
  const [result, setResult] = useState<number[]>([0, 0]);
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

  const pushNode = () => {
    setArray((value) => [...value, 0]);
  };
  const popNode = () => {
    setArray((value) => {
      value.pop();
      return [...value];
    });
  };
  return (
    <div className="my-10 text-center">
      <p>
        Two Sum with target:
        {
          <input
            type="number"
            className="border-solid border-2 rounded border-sky-500 h-14 min-w-14 max-w-14 mx-1 mb-auto"
            placeholder="0"
            onChange={(e) => setTarget(Number(e.target.value))}
          />
        }
      </p>
      <div className="justify-center lg:m-16 m-1 grid lg:grid-cols-12 md:grid-cols-5 grid-cols-4">
        {arr.map((_, index) => (
          <span key={index}>
            <span>{index}</span>
            <ArrayElement
              conditionalClass={` ${
                result[0] == index || result[1] == index
                  ? "bg-lime-100"
                  : "text-black"
              }`}
              index={index}
              onChange={onChange}
            />
          </span>
        ))}
      </div>
      <button
        className="border border-gray-800 rounded bg-gray-900 text-white h-10 w-10 mb-auto mx-1"
        onClick={pushNode}
      >
        +
      </button>
      <button
        className="border border-gray-800 rounded bg-gray-900 text-white h-10 w-10 mb-auto mx-1"
        onClick={popNode}
      >
        -
      </button>
      {result[0] === -1 || result[1] === -1 ? (
        <div className="mt-5 text-2xl">
          Result: No elements sum to given target
        </div>
      ) : (
        <div className="mt-5 text-2xl">
          Result:
          <span className="font-bold text-lime-600"> {arr[result[0]]}</span> at{" "}
          <span className="italic text-sm">[{result[0]}]</span> and{" "}
          <span className="font-bold text-lime-600">{arr[result[1]]}</span> at{" "}
          <span className="italic text-sm">[{result[1]}]</span> equals target.
        </div>
      )}
    </div>
  );
}

export default App;
