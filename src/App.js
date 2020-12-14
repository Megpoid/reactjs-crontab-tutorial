import React from 'react'
// import Notification from './component/Notification';
import { BasicCron } from "reactjs-crontab"
import 'reactjs-crontab/dist/index.css'

const content = {}


const Test = () => {
  return <div>hi</div>
}

const function_1 = () => {
//   setNotification({
//     open: true,
//     content: "Hello User! \n our jackets are in 50% sale! \n Check it out! ",
//     btns: [{ content: "", url: "https://" }]
//   })
console.log('hello')
};
    
const function_2 = () => {
  console.log("bye")
};

const tasks = [
  {
    fn: function_1,
    id: '1',
    config: '*-*-*-12-*-utc',
    name: '',
    description: ''
  }
,
  {
    fn: function_2,
    id: '2',
    config: '*-*-14-12-*-utc',
    name: '',
    description: ''
  }
]


const dashboardSetting = {
  hidden: true
}

function App() {
  const [ notification, setNotification ] = React.useState({
    open: false,
    content: "",
    btns: []
  })

  
  

  return (
    <div className="App">
      <BasicCron dashboard={dashboardSetting} tasks={tasks} />
      {notification && (
      <div></div>
      // <Notification content={content} />
      )}
    </div>
  );
}

export default App;
