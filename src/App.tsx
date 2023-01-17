import { atom, useRecoilState, useRecoilValue } from "recoil"

const darkModeToggle = atom({
  key: "darkModeToggle",
  default: false
})

const ToggleCheck: React.FC<{}> = () => {

  const [darkMode, setDarkMode] = useRecoilState(darkModeToggle)

  return (
    <input type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(e.currentTarget.checked)} />
  )
}

const Button: React.FC<{}> = () => {

  const darkMode = useRecoilValue(darkModeToggle)

  return (
    <button style={{ backgroundColor: darkMode ? "black" : "white", color: darkMode ? "white" : "black" }}>Button</button>
  )

}

function App() {
  return (
    <div className="App">
      <div><ToggleCheck /></div>
      <div><Button /></div>
    </div>
  );
}

export default App;
