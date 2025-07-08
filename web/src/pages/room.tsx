import { Link } from 'react-router-dom';

export function RoomDetailsPage() {
  return (
    <div>
      <h1>Room Details Page</h1>

      <Link className="underline" to="/">
        Voltar
      </Link>
    </div>
  );
}
