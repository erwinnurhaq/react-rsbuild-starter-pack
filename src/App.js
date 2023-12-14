import './App.scss';
import SomethingElse from './SomethingElse';
import Something from './components/Something';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <Something />
      <SomethingElse />
    </div>
  );
};

export default App;
