import { useState } from 'react'
import "./App.css"

const UserProfile = ({userName,avatarUrl,title,skillSet}) =>{
  return (
    <div className='cont'>
      <div className='userdetail'>
        <h3>{userName}</h3>
        <h2>{title}</h2>
        <div className='logo'>
          {skillSet.map(ele => {
            return (
              <>
                <img className='icon' src={ele.icon} />
                <p>{ele.skill}</p>
              </>
            )
          })}
        </div>
      </div>
      <img className='image' src={avatarUrl}/>
    </div>
    
  )
}

function App() {
  return (
    <div className='App'>
      <UserProfile
        userName = "Rishabh Tripathi"
      avatarUrl = "https://img.freepik.com/premium-photo/immersive-3d-cartoon-avatar-captivating-frontprofile-view-10yearold-white-male-with-black-h_983420-10038.jpg?size=626&ext=jpg&ga=GA1.2.1883859604.1683210281&semt=ais"
      title = "Web Developer"
      skillSet = {[{icon : "https://cdn-icons-png.flaticon.com/128/2143/2143731.png",skill : "HTML"},
                  {icon : "https://cdn-icons-png.flaticon.com/128/3316/3316346.png",skill : "CSS"}]}
      />
    </div>
  )
}

export default App
