import { prisma } from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import FormSubmitButton from "@/components/FormSubmitButton";

export const metadata= {
  title:"Add Product - Anmariazone"
}

async function addProduct(formData:FormData){
  "use server";

  const name =  formData.get("name")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl =  formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);
  if(!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields")
  }
  await prisma.product.create({
    data:{name,description, imageUrl, price}
  });
  redirect("/");
}
export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add product</h1>
      <form action={addProduct}>
        <input
          required
          name="name"
          type="text"
          placeholder="Name"
          className="input-bordered input mb-3 w-full"
        />
        <textarea
          required
          name="description"
          placeholder="Description"
          className="textarea-bordered textarea mb-3 w-full"
        />
        <input
          required
          name="imageUrl"
          type="url"
          placeholder="Image URL"
          className="w-full input input-bordered mb-3"
        />
        <input
          required
          name="price"
          type="number"
          placeholder="Price"
          className="w-full input input-bordered mb-3"
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  );
}
