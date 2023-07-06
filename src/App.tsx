import "./App.css";
import kittenImage from "./assets/kitten.jpeg"; // If don't want to import like this for every immage, then https://stackoverflow.com/questions/39999367/how-do-i-reference-a-local-image-in-react

function Info() {
  return (
    <>
      <h1>Hello Everyone!!!</h1>
      <p>My name is Leoevi, and I'm a cute little kitten!</p>
      <p>Click this button to make me say "meow"</p>
      <MeowButton />
    </>
  );
}

function MeowButton() {
  return <button type="button">Meow</button>;
}

function App() {
  return (
    <>
      <img src={kittenImage}></img>
      <Info />
    </>
  );
}

export default App;
