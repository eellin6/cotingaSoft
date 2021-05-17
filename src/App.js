import ElevatorButtons from './components/ElevatorButtons';
import WelcomeLobby from './components/WelcomeLobby';

function App() {

  return (
    <div>
      <div className="elevator-app">
        <WelcomeLobby />
        <ElevatorButtons />
      </div>
    </div>
  );
}

export default App;
