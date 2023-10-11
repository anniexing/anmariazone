export const metadata= {
  title:"Add Product - Anmariazone"
}
export default function AddProductPage() {
  return (
    <div>
      <h1 className="mb-3 text-lg font-bold">Add product</h1>
      <form>
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
        <button className="btn btn-primary btn-block" type="submit">Add Product</button>
      </form>
    </div>
  );
}
