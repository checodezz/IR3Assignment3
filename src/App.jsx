import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {

  const posts = [
    {
      id: 1,
      username: "john_doe",
      imgUrl: "https://placehold.co/400x200?text=Hello+World",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      username: "jane_smith",
      imgUrl: "https://placehold.co/400x200?text=Smiling+Jane",
      content:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      username: "alice_wonder",
      imgUrl: "https://placehold.co/400x200?text=Alice+In+Wonder+Park",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      username: "jane_smith",
      imgUrl: "https://placehold.co/400x200?text=Beautiful+Day",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const listPosts = posts.map((post) => (
    <li key={post.id} className="list-group-item">
    <Link to={`/profileDetails/${post.username}`}><p><strong>{post.username}</strong></p></Link>
      <img src={post.imgUrl}/>
      <p>{post.content}</p>
    </li>
  ))
  
  return (
    <>
      <Header />
      <main className="container">
      <h2>Posts</h2>
        <ul className="list-group">
          {listPosts}
        </ul>
      </main>
      <br/>
      <Footer/>
    </>
  );
}
