import React,{useContext,useState} from 'react';
//import ptroduct context
import { ProductContext } from '../contexts/ProductContext';
//import product component
import Product from '../components/Product'

import Hero from '../components/Hero'

const Home = () => {
  const [search,setSearch]=useState('')
  const {products} = useContext(ProductContext)


  //filter and get mens and womens cloth
  const filterProducts =products.filter(item=>
    (item.category !=="electronics")
  )
  //filter and get searched items
 const searchProduct=filterProducts.filter(item => {
  const nameMatches = item.title.toLowerCase().includes(search.toLowerCase());
 
  return nameMatches;
});
   
  return <div>
    <Hero/>
    <section className='py-12'>
      {/* serch box */}
      <input onChange={(e)=>setSearch(e.target.value)} value={search} 
      placeholder='Search' type='text' className='p-2 outline-none w-3/4 
      mx-auto flex items-center mb-4 text-center text-2xl sm:text-xl border-b'/>
      
     
      <div className='container mx-auto '>
        <div className=' grid grid-cols-1 md:grid-cols-2  lg:grid-cols-5 xl:grid-cols-5 gap-[30px]
         max-w-sm mx-auto md:max-w-none md:mx-0 '>
         
    
          {
        
          searchProduct.map(product=>{
            return (
              <Product product={product} key={product.id}/>
            )
          })}
        </div>
      </div>
    </section>
  </div>;
};

export default Home;
