import { RecoilRoot } from 'recoil';
import Quiz from './components/Quiz';

function App() {
  return (
    <RecoilRoot>
      <div className="tw-preflight">
        <Quiz />
      </div>
    </RecoilRoot>
  );
}

export default App;
