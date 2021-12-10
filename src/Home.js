import React,{ useState } from 'react';
import { Link, Outlet, useNavigate} from 'react-router-dom';
import './Home.css';



export const Home = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState("")

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__searchContainer">
                    <input type="search" placeholder="Search..." value={value} onChange={(e)=>(setValue(e.target.value))}/>
                    <span onClick={()=>navigate(`search-book-result/${value}`)}><i className="fa fa-search"></i></span>
                </div>
                <div className="home__navigationBar">
                    <ul>
                        <li><Link to="books">Home</Link></li>
                        <li><Link to="physical-books">Physical Books</Link></li>
                        <li><Link to="e-books">E-Books</Link></li>
                        <li className="dropdown">
                            <Link to="all-books">All books</Link>
                            <div className="dropdown__content">
                                <span onClick={()=>(navigate('books/engineering'))}>Engineering</span>
                                <span onClick={()=>(navigate('books/mathematics'))}>Mathematics</span>
                                <span onClick={()=>(navigate('books/history'))}>History</span>
                                <span onClick={()=>(navigate('books/chemistry'))}>Chemistry</span>
                                <span onClick={()=>(navigate('books/physics'))}>Physics</span>
                            </div>
                        </li>
                        <li><Link to="profile">Profile</Link></li>
                    </ul>
                </div>
                <div>
                  <Outlet/>
                </div>
            </div>
            
        </div>
    )
}
