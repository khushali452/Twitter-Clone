import SideBar from './SideBar';
import './App.css';
import Feed from './Feed';
import SidebarOption from './SidebarOption';
import Widgets from './Widgets';


function App() {
  return (
    <div className="App">
      

      {/*sidebar */}
      <SideBar/>
      
      {/* feed */}
      <Feed />
      {/* widgets */}
      <Widgets />
    </div>
  );
}

export default App;
