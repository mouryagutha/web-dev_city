import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
function App() {


  return (
    <>
      <Header />

      <Card />
      <Button />
      <Student name="mourya kumar" age={30} isstudent={true} />
      <Student name="patrick" age={50} isstudent={false} />
      <Student name="puthin" age={40} isstudent={true} />
      <hr></hr>
      <UserGreeting isLoggedIn={true} username="mourya" />
      <UserGreeting isLoggedIn={false} username="mourya" />


      <Footer />
    </>
  );
}

export default App
