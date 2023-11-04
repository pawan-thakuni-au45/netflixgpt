import logo from './logo.svg';
import './App.css';
import Body from './component/Body'
import appStore from './utils/appStore';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className=" items-center font-bold text-3px text-red-500">
     <Provider store={appStore}>
     
       <Body/>
       </Provider>
    </div>
  );
}

export default App;
