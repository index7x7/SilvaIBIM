import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> <header>
    <img class="image" src="img/logo.png">
    <p class="text">Boston Celtics</p>
</header>
<div class="background">
    <img src="img/Rectangle 2.png" alt="">
</div>

<div class="container">
    <div class="card">
        <div class="card-img">
            <img src="img/Jaylen-Brown.jpeg" alt="">
        </div>

        <div class="absolute">
            <p class="points">20.8<br>Pts</p>
        </div>

        <div class="card-text">
            <p>Jaylen<br> Brown</p>
        </div>
    </div>

    <div class="card">
        <div class="card-img">
            <img src="img/Tatum-6-1040x572.jpg" alt="">
        </div>

        <div class="absolute">
            <p class="points">20.8<br>Pts</p>
        </div>

        <div class="card-text">
            <p>Jason<br>Tatum</p>
        </div>
    </div>
    <div class="card">
        <div class="card-img">
            <img src="img/jrue.jpg" alt="">
        </div>

        <div class="absolute">
            <p class="points">20.8<br>Pts</p>
        </div>

        <div class="card-text">
            <p>Jrue<br> Holiday</p>
        </div>
    </div>

    <div class="card">
        <div class="card-img">
            <img src="img/al-horford.jpg" alt="">
        </div>

        <div class="absolute">
            <p class="points">20.8<br>Pts</p>
        </div>

        <div class="card-text">
            <p>Al-Hoford</p>
        </div>
    </div>
    <div class="card">
        <div class="card-img">
            <img src="img/payton.jpg" alt="">
        </div>

        <div class="absolute">
            <p class="points">20.8<br>Pts</p>
        </div>

        <div class="card-text">
            <p>Payton<br>Pritchard</p>
        </div>
    </div>
    <div class="card">
        <div class="card-img">
            <img src="img/derrick-white.jpg" alt="">
        </div>

        <div class="absolute">
            <p class="points">20.8<br>Pts</p>
        </div>

        <div class="card-text">
            <p>Derrick<br>White</p>
        </div>
    </div>
    <div class="card">
        <div class="card-img">
            <img src="img/porzings.jpg" alt="">
        </div>

        <div class="absolute">
            <p class="points">20.8<br>Pts</p>
        </div>

        <div class="card-text">
            <p>Kristaps<br>Porziņģis</p>
        </div>
    </div>
    <div class="card">
        <div class="card-img">
            <img src="img/payton.jpg" alt="">
        </div>

        <div class="absolute">
            <p class="points">20.8<br>Pts</p>
        </div>

        <div class="card-text">
            <p>Jalem<br>bronw</p>
        </div>
    </div>
    <div class="card">
        <div class="card-img">
            <img src="img/negao.jpg" alt="">
        </div>

        <div class="absolute">
            <p class="points">20.8<br>Pts</p>
        </div>

        <div class="card-text">
            <p>Xavier<br>Tillman</p>
        </div>
    </div>
</div>


<footer>
    <img src="img/img-footer.png" alt="">
    <p>Boston Celtics</p>
</footer>
    </>
  )
}

export default App
