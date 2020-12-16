import React from 'react'
import NotificationBox from './component/NotificationBox';
import Crontab from "reactjs-crontab"
import 'reactjs-crontab/dist/index.css'


const dashboardSetting = {
  hidden: true
}

const timeZone = "UTC"

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
    id: '1',
    config: '*-*-*-*-*-utc',
    name: '',
    description: ''
  }
,
  {
    fn: renderSecondNoti,
    id: '2',
    config: '*-*-14-12-*-utc',
    name: '',
    description: ''
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
