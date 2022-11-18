import React from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { remove } from '../store/cartSlice';

export default function Cart() {
  const cart = useSelector((state) => { return state.cart })
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(remove(id))
  }
  return (
    <section className=''>
      <div className='container'>
        <div className='row'>
          {
            cart.length ? cart.map(product => <div key={product.id} className='col-md-12 py-2 my-2 border'>
              <div className='row'>
                <div className='col-md-4 text-center'>
                  <img src={product.images[0]} className="img-fluid" style={{height:"8rem"}} />
                </div>
                <div className='col-md-8'>
                  <h3>Name : {product.title}</h3>
                  <h4>Price : {product.price}</h4>
                  <button className='btn btn-danger' onClick={()=>removeFromCart(product.id)}>Remove</button>
                </div>
              </div>
            </div>)
              : 'Cart is empty'
          }

        </div>
      </div>
    </section>
  )
}
