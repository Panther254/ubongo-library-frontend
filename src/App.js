import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Login } from './Login';
import ResetPassword from './ResetPassword';
import { SignUp } from './SignUp.js';
import { PhysicalBooks } from './PhysicalBooks.js'
import { Ebooks } from './Ebooks.js'
import { Books } from './Books.js'
import { Profile } from './Profile.js'
import { Admin } from './Admin';
import { AddBook } from './AddBook'


function App() {
  return (
    <div className="app">
      <div className="app__logo">
        <img src="https://media.istockphoto.com/photos/education-concept-with-book-in-library-picture-id944631208?k=20&m=944631208&s=612x612&w=0&h=YwuBntaKzBQsNttMxG-H7iRmUsSvj6LwOxE7OmK4OAE=" alt="" />
      </div>
      <div className="app__body">
        <Router>
          <Routes>
            <Route path="/admin" element={<Admin/>}>
              <Route path="list-books" element={<Books/>}/>
              <Route path="add-book" element={<AddBook/>}/>
              <Route path="borrowed-books" element={<Books borrowed={true}/>}/>
              <Route path="defaulted-books" element={<Books defaulted={true}/>}/>
              <Route path="admin-profile" element={<Profile/>}/>             
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<SignUp/>}/>
            <Route path="/password-reset" element={<ResetPassword/>}/>
            <Route path="/home" element={<Home/>}>
              <Route path="books" element={<Books/>}/>
              <Route path="profile" element={<Profile/>}/>
              <Route path="e-books" element={<Ebooks/>}/>
              <Route path="all-books" element={<Books/>}/>
              <Route path="physical-books" element={<PhysicalBooks/>}/>
              <Route path="books/engineering" element={<Books category="engineering"/>}/>
              <Route path="books/mathematics" element={<Books category="mathematics"/>}/>
              <Route path="books/history" element={<Books category="history"/>}/>
              <Route path="books/physics" element={<Books category="physics"/>}/>
              <Route path="books/chemistry" element={<Books category="chemistry"/>}/>
              <Route path="books/:bookID" element={<PhysicalBooks/>}/>
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;