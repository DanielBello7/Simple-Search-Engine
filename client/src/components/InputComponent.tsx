


import { useData } from "../context/DataContext";

export default function InputComponent() {
  const {ShowAlert} = useData();

  return (
  <div>
  <h1>input component</h1>
  <button onClick={() => ShowAlert("call me", false)}>Press</button>
  </div>
  );
}