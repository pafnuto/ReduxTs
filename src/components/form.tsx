import React, { useState } from "react"
import { addProducts} from '../slice/slice'
import { IProducts } from '../types'
import { useAppDispatch } from "../store/hooks"

const Form = () => {
    const dispatch = useAppDispatch()

    const [product, setProduct] = useState<IProducts>({
      id: 0,
      title: '',
      price: 0,
    })
  
  return (
<h1>hui</h1>
  )
}

export default Form;