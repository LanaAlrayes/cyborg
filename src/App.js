import './App.css'
import { Container } from './components/index'
import { Header, Hero } from './sections/index'

const App = () => {
    return (
        <>
            <Header />
            <Container>
                <Hero />
            </Container>
            {/* <Footer /> */}
        </>
    )
}

export default App