import Header from "../components/Header";
import Footer from "../components/Footer";

const Profile = () => {

  return (
    <>
      <Header />
      <main className="container my-4">
        <div className="d-flex align-items-center">
          <img
            className="rounded-circle mx-5"
            src="https://via.placeholder.com/150"
            alt="profile picture"
          />
          <div className="float-end m-4">
          <h2>Chethan Kumar</h2>
            <p>@checodezz</p>
            <p>Software Developer | Tech Enthusiast</p>
            <p>Followers: 1M +</p>
            <p>Following: 0</p>
            <p>Posts: 53</p>
          </div>
        </div>
              </main>
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

export default Profile;
