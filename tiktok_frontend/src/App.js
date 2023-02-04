
import './App.css';
import Video from './components/Video';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
      <Video 
     url='https://short-status-video.com/wp-content/uploads/2022/04/Thor-Awesome-Attitude-Full-Screen-4k-60fps-WhatsApp-Status-Thor-Status-Chris-Hemsworth-Status.mp4'
     likes={134}
     comments={12}
     shares={101}
     channel='@Megavath Badri'
     description='Ragnarock ##the one eye ##thorr'
     song="english sonsg"
     />

    <Video
      url='https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4'
      likes={156}
      comments={19}
      shares={11}
      channel='@Nabendu'
      description='setting up desktop'
      song ="Morning Songs"
      />

    <Video
      url='https://short-status-video.com/wp-content/uploads/2022/04/yt1s.com-Game-Of-Thrones-Status-Full-Screen-Whatsapp-Status-Hollywood-Movie-Status-Vox-Beat-Status-1.mp4'
      likes={1533}
      comments={139}
      shares={131}
      channel='Tracks'
      description='bgm lovers'
      song ="GOT Songs"
      />
      <Video
      url='https://short-status-video.com/wp-content/uploads/2022/04/Mortal-Combat-Whatsapp-Status-Full-Screen-HD-4k-60fps-Hollywood-Action-Movie-Scenes-New-Late%F0%9F%94%A5%F0%9F%92%AF-1.mp4'
      likes={13}
      comments={9}
      shares={11}
      channel='Tracks'
      description='bgm lovers'
      song ="Mortal combat Songs"
      />


      </div>
    </div>
  );
}

export default App;
