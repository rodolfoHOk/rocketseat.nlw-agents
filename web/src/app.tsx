import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateRoomPage } from './pages/create-room';
import { RoomDetailsPage } from './pages/room-details';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<CreateRoomPage />} />
          <Route path="/room/:roomId" element={<RoomDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
