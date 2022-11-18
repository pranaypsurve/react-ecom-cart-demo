import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/prodcutsSlic';

export default function Home() {
  const dispatch = useDispatch();
  const { data , loading , error } = useSelector((state)=>state.product)

  useEffect(() => {
    console.log('home useeffect')
    dispatch(fetchProducts())
  }, [])
  
  const addToCart = (product) =>{
    dispatch(add(product))
  }

  if(error){
    return (
      "Something went wrong"
    )
  }
  
  return (
    <div className='container py-4'>
      <div className='row'>
        {
          loading ? 'Loading' : data && data.map((product) => {
            return <div className='col-md-3' key={product.id}>
              <div className="card my-4">
                <img src={product.images[0]} className="img-fluid card-img-top" style={{height:"10rem"}} />
                <div className="card-body text-center">
                  <h6 className="card-title">{product.title}</h6>
                  <h6 className="card-title">{product.price}</h6>
                  <button className='btn btn-primary btn-sm' onClick={(e)=>addToCart(product)}>Add to cart</button>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
