import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateRoomPage } from './pages/create-room';
import { RoomDetailsPage } from './pages/room-details';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<CreateRoomPage />} />
          <Route path="/rooms/:roomId" element={<RoomDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
