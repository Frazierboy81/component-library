// types/index.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}
 
export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}

function ProductDisplay({product, showDescription, showStockStatus, onAddToCart}: ProductDisplayProps) {

  return (
    
    <div className="w-screen bg-gray-500 flex items-center p-6 flex-col">
      <img className='flex justify-center w-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJs4sjEr1BIrw1_udl-4ImpsQixzXYoLm7pw&s" alt="photo of product" /> 
      <h2 className="text-xl font-bold">Product Details</h2>
      <h2>{product.name}</h2>
      <h2 className="text-blue-500 font-bold">${product.price}</h2>
      <h2>{product.description}</h2>
      

      {showDescription && <div>{product.description}</div>}
      {showStockStatus && <div>{product.inStock}</div>}

      
      
      <button className="bg-blue-500 rounded-md w-full h-12" onClick={()=> onAddToCart && onAddToCart(product.id)}>Add To Cart</button>

    </div>
  )
}

export default ProductDisplay;