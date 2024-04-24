import Header from "./Header";
import Footer from "./Footer";
import Food from "./Food";
import Card from "./Card";
import Button from "./Button.jsx";
import Student from "./Student.jsx";
function App() {


  return(
    <>
    <Header/>
    
    <Card/>
    <Button/>
    <Student name ="mourya kumar" age = {30} isstudent={true}/>
    <Student name ="patrick" age={50} isstudent ={false}/>
    <Student name ="puthin" age = {40} isstudent={true}/>
     
    <Footer/>
    </>
  );
}

export default App
