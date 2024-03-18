import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProfileDetails = () => {
  const userData = {
    john_doe: {
      fullName: "John Doe",
      bio: "Software Developer | Tech Enthusiast",
      imageUrl: "https://via.placeholder.com/250",
      followers: 1000,
      following: 500,
      posts: 50,
    },
    jane_smith: {
      fullName: "Jane Smith",
      bio: "Graphic Designer | Nature Lover",
      imageUrl: "https://via.placeholder.com/250",
      followers: 800,
      following: 300,
      posts: 40,
    },
    alice_wonder: {
      fullName: "Alice Wonder",
      bio: "Travel Blogger | Foodie",
      imageUrl: "https://via.placeholder.com/250",
      followers: 1200,
      following: 600,
      posts: 60,
    },
  };

  const {username} = useParams();
  const userDetails = userData[username];
  // console.log(userDetails.fullName)

  // const userDataDetails = userData.find((user) => user === username);
  // console.log(useRouteLoaderData)


  
  return (
    <>
      <Header />
      <main className="container my-4 ">
        <div className="container d-flex ">
          <img src={userDetails.imageUrl} className="rounded mx-4" alt="profile pic"/>
          <div className="mx-4">
<h2>{userDetails.fullName}</h2>
          <p>@{username}</p>
            <p>{userDetails.bio}</p>
            <p>Followers: {userDetails.followers}</p>
            <p>Following: {userDetails.following}</p>
            <p>Posts: {userDetails.posts}</p>
            </div>
        </div>
      </main>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <Footer />
    </>
  );
};

export default ProfileDetails;
