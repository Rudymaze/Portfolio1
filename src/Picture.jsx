import ProfilePic from "./assets/images/Rudy.jpeg";

function Picture() {
  return (
    <div className="profile">
      <img className="profile-pic" src={ProfilePic} alt="Profile Pic"></img>;
    </div>
  );
}

export default Picture;
