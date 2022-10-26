import React, { useState } from "react"
import { addProducts} from '../slice/slice'
import { IProducts } from '../types'
import { useAppDispatch } from "../store/hooks"
import '../App.css'

const ProductForm = () => {
    const dispatch = useAppDispatch()

    const [product, setProduct] = useState<IProducts>({
      id: 0,
      title: '',
      price: 0,
    })

    const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => setProduct(prev => {
      (prev as any)[name] = value
      const newValue = { ...prev }
      return newValue
    })
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      dispatch(addProducts(product))
    }
  
    return (
      <>
        <h2 className="text-2xl">Добавь продукт в список</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder="Название продукта" name='title' value={product.title} onChange={handleChange} />
          <input type='number' placeholder="Цена" name="price" value={product.price} onChange={handleChange} />
          <input type='text' placeholder="Штрихкод" name='id' value={product.id} onChange={handleChange} />
          <button className='border border-sky-500' type='submit'>Добавить</button>
        </form>
      </>
    )
  }

export default ProductForm;