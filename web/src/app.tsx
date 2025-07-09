import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateRoomPage } from './pages/create-room';
import { RecordRoomAudioPage } from './pages/record-room-audio';
import { RoomPage } from './pages/room';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<CreateRoomPage />} />

          <Route path="/rooms/:roomId" element={<RoomPage />} />

          <Route
            path="/rooms/:roomId/audio"
            element={<RecordRoomAudioPage />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
