
import Picksforyou from "@/app/Components/Picksforyou";
import Description from "@/app/Singleproduct/Description";
import Mainproduct from "@/app/Singleproduct/Mainproduct";
import { getProductById } from "@/sanity/lib/queries";




interface PageParams {
  params: Promise<{
    id: string;
  }>;
}


export default async function ProductDetailsPage ({ params }: PageParams) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
      return <div>Product not found!</div>;
  }
  
    return (
      <div>
        <Mainproduct
         title={product.title}
         imageSrc={product.imageSrc}
         price={product.price}
         description={product.description}
         size={product.size} // Size field pass ho raha hai
         colors={product.colors}
         sku={product.sku}
         category={product.category}
         tags={product.tags}
        />
        <div>
            <Description/>
            <Picksforyou title="Related Products" showDescription={false} />
        </div>
      </div>
    );
  }


  