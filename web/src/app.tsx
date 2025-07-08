import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CreateRoomPage } from './pages/create-room';
import { RoomDetailsPage } from './pages/room';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CreateRoomPage />} />
        <Route path="/room" element={<RoomDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
