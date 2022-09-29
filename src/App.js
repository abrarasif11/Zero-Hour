import './App.css';
import Activity from './component/Activity/Activity';
import Header from './component/Header/Header';
import Questions from './component/Questions/Questions';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Activity></Activity>
      <Questions></Questions>
    </div>
  );
}

export default App;
