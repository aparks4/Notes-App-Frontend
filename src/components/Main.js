import { Routes, Route, Outlet } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Register from '../pages/Register';
import NotesIndex from '../pages/NotesIndex';
import NoteDetail from '../pages/NoteDetail';
import NoteCreate from '../pages/NoteCreate';



function Main() {
    return (
        <>
            <Outlet />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/' element={<Home />} />
                <Route path='/notes' element={<NotesIndex />} />
                <Route path='/notes/:id' element={<NoteDetail />} />
                <Route path='notes/new' element={<NoteCreate />} />
            </Routes>
        
        
        </>
    )
}

export default Main;