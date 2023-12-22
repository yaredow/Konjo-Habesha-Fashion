import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useCreateProduct from '../hook/useCreateProduct';

const ProductForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const [name, setName] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const { createProduct, isLoading, isSuccess, error } = useCreateProduct();

  const onSubmit = async (data) => {
    const formData = { ...data, images };
    await createProduct(formData);
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setValue('images', files);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Add a new product
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                onChange={(e) => setCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
                <option value="">Select category</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="kids">Kids</option>
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
                onChange={(e) => setSize(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                id="stock-quantity"
                {...register('stockQuantity', {
                  required: 'A product needs stock quantity',
                })}
                value={stockQuantity}
                onChange={(e) => setStockQuantity(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
                onChange={(e) => setDescription(e.target.value)}
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
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
                {...register('images')}
                onChange={handleImageChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                multiple
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Add product
          </button>
        </form>
      </div>
    </section>
  );
};

export default ProductForm;
