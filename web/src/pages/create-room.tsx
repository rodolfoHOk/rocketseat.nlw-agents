import { CreateRoomForm } from '@/components/create-room-form';
import { RoomsList } from '@/components/rooms-list';

export function CreateRoomPage() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 gap-8 items-start">
          <CreateRoomForm />

          <RoomsList />
        </div>
      </div>
    </div>
  );
}
