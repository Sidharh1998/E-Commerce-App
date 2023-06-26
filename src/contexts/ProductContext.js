import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';

export const ProductContext=createContext();


 const ProductProvider = ({children}) => {
//products state


const [products,setProducts]  = useState([])
//fetch produts

useEffect(()=>{

  
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error, 'ERROR');
    }
  };

  fetchProducts();
},[])     

 
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
};    
 
export default ProductProvider;
