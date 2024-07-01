import { useState } from 'react'
import Images from './images/Images'
import './App.css'

function App() {
  const [image, setImage] = useState(Images[0])

  return (
    <>
    
      
      <div style={{position:'relative', background:'burlywood', width:600, height:600, borderRadius:'100%'}}>
        <div style={{width:200, height:200, position:'absolute', left:170, top:20}}>
          <img src={image} style={{width:250, height:250, borderRadius:'100%'}}/>
        </div>
        <div style={{display:'flex', flexWrap:'nowrap', gap:20}}>
          <h2 style={{position:'absolute', top:-80, color:'black', left:100, fontFamily:'cursive'}}>Bizdə hal hazirda bu yeməklər mövcuddur</h2>
          <div style={{width:300, height:100, position:'absolute', left:130, top:180}}>
          {Images.map((img, index)=>(
            <img key={index} src={img} onClick={()=>setImage(img)} style={{width:100, height:100, borderRadius:'100%',cursor:'pointer', position:'relative', top:100 }}/>
          ))}
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
