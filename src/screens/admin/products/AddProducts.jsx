import React, { useContext, useEffect, useState } from "react";
import axios from "../../../utils/axios";
import { AdminAuthContext } from "../../../context/AdminAuth";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const AddProducts = () => {
  const [tags, setTags] = useState([""]);
  const [colors, setColors] = useState([""]);
  const [images, setImages] = useState([null]);
  const [loading, setLoading] = useState(false);

  const { authAdmin } = useContext(AdminAuthContext);

  const { state } = useLocation();

  const [product, setProduct] = useState({
    name: "",
    sku: "",
    price: "",
    category: "",
    weight: "",
    size: "",
    dimension: "",
    about: "",
    tags: [],
    colors: [],
    images: [],
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleTagChange = (e, index) => {
    const newTags = [...tags];
    newTags[index] = e.target.value;
    setTags(newTags);
    setProduct({
      ...product,
      tags: newTags,
    });
  };

  const handleColorChange = (e, index) => {
    const newColors = [...colors];
    newColors[index] = e.target.value;
    setColors(newColors);
    setProduct({
      ...product,
      colors: newColors,
    });
  };

  const handleImagesChange = (e, index) => {
    const newImages = [...images];

    newImages[index] = e.target.files[0];
    setImages(newImages);
    setProduct({
      ...product,
      images: newImages,
    });
  };

  const data = () => {
    const formData = new FormData();
    formData.append("name", product?.name);
    formData.append("price", product?.price);
    formData.append("about", product?.aboutProduct);
    formData.append("category", product?.category);
    formData.append("sku", product?.sku);
    formData.append("weight", product?.itemWeight);
    formData.append("size", product?.itemSize);
    formData.append("dimensions", product?.itemDimensions);
    formData.append("description", product?.description);

    product.tags.forEach((tag) => {
      formData.append("tags", tag);
    });

    product.colors.forEach((color) => {
      formData.append("colors", color);
    });

    product.images.forEach((img) => {
      formData.append("images", img);
    });

    return formData;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (tags.includes("") || tags.length < 2) {
      return toast.error("Please add at least two tags");
    }

    if (colors.includes("") || colors.length < 2) {
      return toast.error("Please add at least two colors");
    }

    if (images.includes(null) || images.length < 2) {
      return toast.error("Please add at least two images");
    }

    if (images.length > 3) {
      return toast.error("You can add up to 3 images");
    }

    const formData = data();

    try {
      setLoading(true);
      const res = await axios.post("/admin/product", formData, {
        headers: {
          Authorization: `Beerer ${authAdmin.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setProduct({
          name: "",
          sku: "",
          price: "",
          category: "",
          weight: "",
          size: "",
          dimension: "",
          about: "",
          tags: [""],
          colors: [""],
          images: [null],
          description: "",
        });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/admin/product/read/${state?.id}`);

        // console.log(res);

        if (res.data.success) {
          const product = res.data.data;

          console.log(product);

          setProduct({
            name: product.name,
            sku: product.sku,
            price: product.price,
            category: product.category,
            weight: product.weight,
            size: product.size,
            dimension: product.dimensions,
            about: product.about,
            tags: product.tags,
            colors: product.colors,
            images: product.images,
            description: product.description,
          });
          setTags(product.tags);
          setColors(product.colors);
          setImages(product.images);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [state]);

  const updateHandler = async () => {
    const formData = data();

    try {
      setLoading(true);
      const res = await axios.put(
        `admin/product/update/${state?.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${authAdmin.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // console.log(res);

      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3 className="font-bold text-xl mb-7">
        {state?.id ? "Edit Product" : "Add Product"}
      </h3>

      <section className="bg-gray-100">
        <div className="px-4 mx-auto p-7">
          <form>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Type product name"
                  value={product.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="brand"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  SKU
                </label>
                <input
                  type="text"
                  name="sku"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Product SKU"
                  value={product.sku}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="$2999"
                  value={product.price}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="Category"
                  value={product.category}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="item-weight"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Item Weight (kg)
                </label>
                <input
                  type="text"
                  name="weight"
                  id="item-weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder={12}
                  value={product.weight}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="item-size"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Item Size
                </label>
                <input
                  type="text"
                  name="size"
                  id="item-size"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder={12}
                  value={product.size}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="item-dimensions"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Item Dimensions
                </label>
                <input
                  type="text"
                  name="dimension"
                  id="item-dimensions"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="12 x 12 x 12"
                  value={product.dimension}
                  onChange={handleInputChange}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  About Product
                </label>
                <input
                  type="text"
                  name="about"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="about product"
                  value={product.about}
                  onChange={handleInputChange}
                />
              </div>
              <div className="sm:col-span-2">
                {tags.map((tag, index) => (
                  <div key={index}>
                    <label
                      htmlFor="name"
                      className="block mt-2 mb-2 text-sm font-medium text-gray-900"
                    >
                      Product Tags
                    </label>
                    <input
                      type="text"
                      name="tags"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="product tags"
                      value={tag}
                      onChange={(e) => handleTagChange(e, index)}
                    />
                  </div>
                ))}
                <button
                  onClick={() => setTags([...tags, ""])}
                  type="button"
                  className="bg-[#034062] mt-2 text-white py-1 px-3 text-sm rounded-lg"
                >
                  Add One More
                </button>
              </div>
              <div className="sm:col-span-2">
                {colors.map((c, index) => (
                  <div key={index}>
                    <label
                      htmlFor="name"
                      className="block mt-2 mb-2 text-sm font-medium text-gray-900"
                    >
                      Product Colors
                    </label>
                    <input
                      type="text"
                      name="colors"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="product colors"
                      value={c}
                      onChange={(e) => handleColorChange(e, index)}
                    />
                  </div>
                ))}
                <button
                  onClick={() => setColors([...colors, ""])}
                  type="button"
                  className="bg-[#034062] mt-2 text-white py-1 px-3 text-sm rounded-lg"
                >
                  Add One More
                </button>
              </div>
              <div className="sm:col-span-2">
                {images.map((img, index) => (
                  <div key={index}>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Product Images
                    </label>
                    <input
                      type="file"
                      multiple
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      onChange={(e) => handleImagesChange(e, index)}
                    />
                  </div>
                ))}
                <button
                  onClick={() => setImages([...images, ""])}
                  type="button"
                  className="bg-[#034062] mt-2 text-white py-1 px-3 text-sm rounded-lg"
                >
                  Add One More
                </button>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows={8}
                  name="description"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Your description here"
                  value={product.description}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {state?.id ? (
              <button
                onClick={updateHandler}
                type="button"
                className="mt-6 bg-[#034062] text-white px-5 rounded-lg py-3"
              >
                {loading ? "Loading..." : "Update product"}
              </button>
            ) : (
              <button
                onClick={submitHandler}
                type="button"
                className="mt-6 bg-[#034062] text-white px-5 rounded-lg py-3"
              >
                {loading ? "loading..." : "Add product"}
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProducts;
