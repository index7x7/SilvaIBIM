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
            <img src="https://yt3.googleusercontent.com/ZDKTfnwEcdKHC_sc45_o6vjVFnv22Td-7UDA91lnB13bUxpX8qSeXpLVhb0e3nG9HKuUPrvWl2A=s900-c-k-c0x00ffffff-no-rj" alt=""/>
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
