import { Header } from "./components/Header";
import { RoomList } from "./components/RoomList";
import {Content } from "./components/Content"
import { ContentContainerDiv } from "./styles/ContentContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <ContentContainerDiv />
    </div>    
  );
}

export default App;
