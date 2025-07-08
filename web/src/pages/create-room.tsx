import { Link } from 'react-router-dom';

export function CreateRoomPage() {
  return (
    <div>
      <h1>Create Room Page</h1>

      <Link className="underline" to="/room">
        Acessar sala
      </Link>
    </div>
  );
}
