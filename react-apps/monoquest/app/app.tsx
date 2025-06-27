
import '@shadcn-test/styles/global.css';
import { Button } from '@nx-react-router7/ui'
export function App() {
  return (
    <div data-testid="app" className="bg-indigo-500 p-2 font-mono">Hello!
      <Button /></div>
  );
}

export default App;
