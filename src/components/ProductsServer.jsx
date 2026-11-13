import Products from "./Products";
import { getProductData } from "@/actions/product.actions";

export default async function ProductsServer() {
  const { data: productData } = await getProductData();

  return (
    <>
      <Products productData={productData} />
    </>
  );
}
