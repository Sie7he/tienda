import { Products } from './components/shareds/Products'
import { products as initialProducts } from './data/mocks.json'
import { Header } from './components/shareds/Header'
import useFilters from './components/hooks/useFilters'
import { Cart } from './components/shareds/Cart'
import { CartProvider } from './context/cart'
import { Footer } from './components/shareds/Footer'
import { AppRouter } from './router/AppRouter'


function App() {

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <AppRouter />
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
