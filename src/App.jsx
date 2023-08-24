import { Products } from './components/shareds/Products'
import { products as initialProducts } from './data/mocks.json'
import { Header } from './components/shareds/Header'
import useFilters from './components/hooks/useFilters'
import { Cart } from './components/shareds/Cart'
import { CartProvider } from './context/cart'
import { Footer } from './components/shareds/Footer'


function App() {

  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <Products products={filteredProducts} />
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
