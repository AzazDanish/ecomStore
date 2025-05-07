import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

type ProductPageProps = {
  params: Promise<{ productId: string }>;
};
const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId } = await params;
  const product = await getProduct(productId);
  // suggested products are from same category ie they have same categoryId
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div>
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 ">
            <div>
              <Gallery images={product.images} />
            </div>
            <div className="mt-10 sm:mt-16 lg:mt-0 sm:px-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Products" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
