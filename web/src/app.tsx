import { Wand } from 'lucide-react';
import { Button } from './components/ui/button';

export function App() {
  return (
    <div className="w-full h-screen p-4 flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        <Button>Hello World</Button>
        <Button variant="secondary">Hello World</Button>
        <Button variant="outline">Hello World</Button>
        <Button variant="ghost">Hello World</Button>
        <Button variant="destructive">Hello World</Button>
        <Button variant="link">Hello World</Button>
      </div>

      <div className="flex flex-row gap-2">
        <Button size="sm">Hello World</Button>
        <Button size="lg">Hello World</Button>
        <Button size="icon">
          <Wand />
        </Button>
      </div>
    </div>
  );
}
