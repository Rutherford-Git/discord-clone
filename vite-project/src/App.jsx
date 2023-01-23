import Sidebar from "./components/Sidebar"
import ChannelBar from "./components/channelbar"
import ContentContainer from "./components/ContentContainer"
function App() {

  return (
    <div className="flex">
      <Sidebar />
      <ChannelBar />
      <ContentContainer />
    </div>
  )
}

export default App
