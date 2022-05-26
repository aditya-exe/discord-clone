import ChannelBar from './components/channel-bar/channel-bar.component'
import SideBar from "./components/sidebar/sidebar.component"
import ContentContainer from "./components/content-container/content-container.component"

const App = () => {
    return (
        <div className="flex">
            <SideBar/>
            <ChannelBar/>
            <ContentContainer />
        </div>
    )
}

export default App