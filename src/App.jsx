import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <!--abcdefghijk-->
    <> <header>
    <img className="image" src="img/logo.png"/>
    <p className="text">Boston Celtics</p>
</header>
<div className="background">
    <img src="img/Rectangle 2.png" alt=""/>
</div>

<div className="container">
    <div className="card">
        <div className="card-img">
            <img src="data:image/jpeg;base64,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" alt=""/>
        </div>

        <div className="absolute">
            <p className="points">20.8<br/>Pts</p>
        </div>

        <div className="card-text">
            <p>Jaylen<br/> Brown</p>
        </div>
    </div>

    <div className="card">
        <div className="card-img">
            <img src="https://s2-ge.glbimg.com/0vrYoly2u3EnrgRi9RzYDcHFWxw=/0x0:1024x683/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/Q/a/MwVmBGSTmmCRLCLj8JAw/gettyimages-2182500383.jpg" alt=""/>
        </div>

        <div className="absolute">
            <p className="points">20.8<br/>Pts</p>
        </div>

        <div className="card-text">
            <p>Jason<br/>Tatum</p>
        </div>
    </div>
    <div className="card">
        <div className="card-img">
            <img src="https://cdn.nba.com/manage/2024/01/jrue-holiday-iso-look.jpg" alt=""/>
        </div>

        <div className="absolute">
            <p className="points">20.8<br/>Pts</p>
        </div>

        <div className="card-text">
            <p>Jrue<br/> Holiday</p>
        </div>
    </div>

    <div className="card">
        <div className="card-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTElgKaPPmDBwBrMxyqMrAkVmLS82gKU7R26A&s" alt=""/>
        </div>

        <div className="absolute">
            <p className="points">20.8<br/>Pts</p>
        </div>

        <div className="card-text">
            <p>Al-Hoford</p>
        </div>
    </div>
    <div className="card">
        <div className="card-img">
            <img src="https://cdn.vox-cdn.com/thumbor/_vKidFoxsw2-FwRNiVB-GzUMepE=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22497697/usa_today_15975306.jpg" alt=""/>
        </div>

        <div className="absolute">
            <p className="points">20.8<br/>Pts</p>
        </div>

        <div className="card-text">
            <p>Payton<br/>Pritchard</p>
        </div>
    </div>
    <div className="card">
        <div className="card-img">
            <img src="https://jumperbrasil.com.br/wp-content/uploads/2024/06/Derrick_White-3.jpg" alt=""/>
        </div>

        <div className="absolute">
            <p className="points">20.8<br/>Pts</p>
        </div>

        <div className="card-text">
            <p>Derrick<br/>White</p>
        </div>
    </div>
    <div className="card">
        <div className="card-img">
            <img src="https://jumperbrasil.com.br/wp-content/uploads/2024/09/0-38.webp" alt=""/>
        </div>

        <div className="absolute">
            <p className="points">20.8<br/>Pts</p>
        </div>

        <div className="card-text">
            <p>Kristaps<br/>Porziņģis</p>
        </div>
    </div>
    <div className="card">
        <div className="card-img">
            <img src="https://mundonegro.inf.br/wp-content/uploads/2023/07/capa-56.jpg" alt=""/>
        </div>

        <div className="absolute">
            <p className="points">20.8<br/>Pts</p>
        </div>

        <div className="card-text">
            <p>Jalem<br/>bronw</p>
        </div>
    </div>
    <div className="card">
        <div className="card-img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC_0sImBR_KkQAdT0OlszyICcaswIlqT2Xjw&s" alt=""/>
        </div>

        <div className="absolute">
            <p className="points">20.8<br/>Pts</p>
        </div>

        <div className="card-text">
            <p>Xavier<br/>Tillman</p>
        </div>
    </div>
</div>


<footer>
    <img src="img/img-footer.png" alt=""/>
    <p>Boston Celtics</p>
</footer>
    </>
  )
}

export default App
