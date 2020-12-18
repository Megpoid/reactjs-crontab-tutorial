import React from 'react'
import NotificationBox from './component/NotificationBox';
import Crontab from "reactjs-crontab"
import 'reactjs-crontab/dist/index.css'


const dashboardSetting = {
  hidden: true
  // if true, dashboard is hidden
}

const timeZone = "Asia/Seoul"
// 'UTC', 'local, or 'YOUR PREFERRED TIMEZONE'

function App() {
  const [ notification, setNotification ] = React.useState({
    open: false,
    content: "",
    btns: []
  })

  const handleClose = () => {
    setNotification((prevState) => ({
      ...prevState,
      open: false
    }))
  }

  
  const renderFirstNoti = () => {
  setNotification({
    open: true,
    header: "Message",
    content: "Hello Tom! \n visit our Instagram",
    btns: [{ id: "1", content: "Visit now", url: "https://instagram.com/" }]
  })
  };

  const renderSecondNoti = () => {
    setNotification({
      open: true,
      header: "Message",
      content: "Hello Tom! \n visit our Youtube chanel",
      btns: [{ id: "2", content: "Visit now", url: "https://youtube.com" }]
    })
    };

  const tasks = [
      {
        fn: renderFirstNoti,
        // this is the function which is triggered based on the config
        id: '1',
        config: '*-*-*-*-*', // runs at every minutes
        name: '', // optional
        description: ''  // optional
      }
    ,
      {
        fn: renderSecondNoti,
        // this is the function which is triggered based on the config
        id: '2',
        config: '10-10-19-12-*', // runs December 19th 10:10 AM
        name: '',  // optional
        description: ''  // optional
      }
    ]


  return (
    <div>
      <Crontab dashboard={dashboardSetting} timeZone={timeZone} tasks={tasks} />
      {notification.open && (
      <NotificationBox handleClose={handleClose} notification={notification} />
      )}
    </div>
  );
}

export default App;
