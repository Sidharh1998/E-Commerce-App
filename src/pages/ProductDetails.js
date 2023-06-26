import React,{useContext} from 'react';
//import useParams
import { useParams } from 'react-router-dom';
//import cart context
import {CartContext} from '../contexts/CartContext'
//import product context
import {ProductContext} from '../contexts/ProductContext'
//import toast notification
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProductDetails = () => {
 //get the product id from the url
 const {id} = useParams()
 const {products} = useContext(ProductContext)
 const {addToCart} = useContext(CartContext)

 // get the single product based on the id

 const product =products.find(item => {
  return item.id === parseInt(id);
 })


 //if product is not found
if(!product) {

  return(
    <section className='h-screen flex justify-center items-center'>Loading...</section>
  )
}


 console.log(product);
//destructure

const {title,price,description,image} = product;

  return <section className='pt-32 pb-32  lg:py-32 h-screen flex items-center'>
    <ToastContainer position="top-left" autoClose={2000}/>
    <div className='container mx-auto'>
      {/* image  & text wrap*/}
      <div className='flex flex-col lg:flex-row items-center'>
         {/* image */}
      <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
        <img className='max-w-[160px]  lg:max-w-[230px]'  src={image}/>
      </div>
      {/* text */}
      <div className='flex-1 text-center lg:text-left'>
        <h1 className='text-[20px] font-medium mb-2 max-w-[400px] mx-auto lg:mx-0'>
          {title}
          </h1>
          <div className='text-xl text-red-500 font-medium mb-2'>
            $ {price}
            </div>
            <div className='flex justify-center text-yellow-200 mb-2 '>
     
      </div>
      <p className='mb-8'>{description}</p>
      <button onClick={()=> {
       toast("Product Add To Cart")
        addToCart(product,product.id)}} className='bg-primary py-4 px-8  text-white'>Add to cart</button>
      </div>
      </div>
    </div>
  </section>;
};

export default ProductDetails;
