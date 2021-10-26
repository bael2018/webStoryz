import cls from './App.module.css'
import About from './components/About'
import Header from './components/Header'
import Know from './components/Know'
import Place from './components/Place'
import RegisterBtn from './components/RegisterBtn'
import Sales from './components/Sales'
import User from './components/User'
import Webinar from './components/Webinar'

const App = () => {
    return (
        <section className={cls.root}>
            <Header/>
            <Sales/>
            {/* <Know/> */}
            {/* <Webinar/> */}
            {/* <User/> */}
            {/* <Place/> */}
            {/* <About/> */}
            <RegisterBtn/>
        </section>
    )
}

export default App