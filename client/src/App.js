import './App.css';
import Header from './components/header';
import IndexPage from './pages/indexpage';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import RegisterPage from './pages/registerpage';
import { UserContextProvider } from './components/usercontext';
import CreatePost from './pages/createpage';
import PostPage from './pages/postpage';
import EditPost from './pages/editpost';

function App() {
  return (
    <>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />}/>
          <Route path="/edit/:id" element={<EditPost />}/>
        </Routes>
      </UserContextProvider>
    </>
  );
}

export default App;
