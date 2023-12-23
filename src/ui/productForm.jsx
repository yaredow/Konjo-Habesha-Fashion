import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useCreateProduct from '../hook/useCreateProduct';
import toast from 'react-hot-toast';

const ProductForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [name, setName] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const { createProduct, isLoading, isSuccess, error } = useCreateProduct();

  const onSubmit = async (data) => {
    const formData = {
      ...data,
      price: Number(data.price), // Convert price to number
      stockQuantity: Number(data.stockQuantity), // Convert stockQuantity to number
      images,
    };
    console.log(formData);
    await createProduct(formData);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Product created successfully');
    } else if (error) {
      toast.error(error);
    }
  }, [isSuccess, error]);

  // Handle image upload
  const handleImageChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);
    const fileNames = fileArray.map((file) => file.name);

    setSelectedImages(fileNames);
    setImages(fileNames);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          method="post"
        >
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'A product needs a name' })}
                value={name}
                disabled={isLoading}
                onInput={(e) => setName(e.target.value)}
                className="admin-input"
                placeholder="Type product name"
              />
            </div>

            <div className="w-full">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                id="price"
                {...register('price', { required: 'A product needs a price' })}
                disabled={isLoading}
                value={price}
                onInput={(e) => {
                  setPrice(parseInt(e.target.value, 10));
                }}
                className="admin-input"
                placeholder="$2999"
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Category
              </label>
              <select
                id="category"
                {...register('category', {
                  required: 'A product needs a category',
                })}
                value={category}
                disabled={isLoading}
                onInput={(e) => setCategory(e.target.value)}
                className="admin-input"
              >
                <option value="">Select category</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Kids">Kids</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="size"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Size
              </label>
              <select
                id="size"
                {...register('size', { required: 'A product needs a size' })}
                value={size}
                disabled={isLoading}
                onInput={(e) => setSize(e.target.value)}
                className="admin-input"
              >
                <option value="">Select size</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="stock-quantity"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Stock Quantity
              </label>
              <input
                type="number"
                id="stockQuantity"
                {...register('stockQuantity', {
                  required: 'A product needs stock quantity',
                })}
                value={stockQuantity}
                disabled={isLoading}
                onInput={(e) => {
                  setStockQuantity(parseInt(e.target.value, 10));
                }}
                className="admin-input"
                placeholder="Stock quantity"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                id="description"
                {...register('description', {
                  required: 'A product needs a description',
                })}
                value={description}
                disabled={isLoading}
                onInput={(e) => setDescription(e.target.value)}
                rows="8"
                className="admin-input"
              ></textarea>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="images"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Images
              </label>
              <input
                type="file"
                id="images"
                name="images"
                disabled={isLoading}
                {...register('images')}
                onInput={handleImageChange}
                className="admin-input"
                multiple
              />
              <div className="mt-2 text-gray-700 dark:text-gray-300">
                Selected Images: {selectedImages.join(', ')}
              </div>
            </div>
          </div>
          <button type="submit" className="button">
            {isLoading ? <spinnerMini /> : 'Create'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProductForm;
