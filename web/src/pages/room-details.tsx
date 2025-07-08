import { Link, Navigate, useParams } from 'react-router-dom';

type RoomParams = {
  roomId: string;
};

export function RoomDetailsPage() {
  const params = useParams<RoomParams>();

  if (!params.roomId || params.roomId === '') {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h1>Room Details Page with id: {params.roomId}</h1>

      <Link className="underline" to="/">
        Voltar
      </Link>
    </div>
  );
}
