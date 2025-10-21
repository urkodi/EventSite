import { Routes, Route } from 'react-router-dom';
import Homepage from '../Homepage';
import Bookmark from '../components/Bookmark';
import MyTickets from '../components/MyTickets';

function Main() {
  return (
    <main className="flex-7 my-8 mx-2 rounded-lg bg-moonstone">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/my-tickets" element={<MyTickets />} />
      </Routes>
    </main>
  );
}

export default Main;
