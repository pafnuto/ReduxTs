import { useSelector } from 'react-redux'
import { getProductsSelector } from '../slice/slice'

const ProductList = () => {
  const products = useSelector(getProductsSelector)

  return (
    <div className='columns-2'>
      <h1>Список продуктов</h1>
      {products.map(prod => {
        return(
          <div key={prod.id}>
            <span>{`${prod.title} : ${prod.price}$`}</span>
          </div>
        )
      })}
    </div>
  )
}

export default ProductList