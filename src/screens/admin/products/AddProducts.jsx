import React, { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "../../../context/AdminAuth";
import axios from "../../../utils/axios";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const AddProducts = () => {
  const [tags, setTags] = useState([""]);
  const [colors, setColors] = useState([""]);
  const [images, setImages] = useState([null]);
  const [loading, setLoading] = useState(false);

  const { authAdmin } = useContext(AdminAuthContext);

  const { state } = useLocation();
  // console.log(state);

  const [product, setProduct] = useState({
    name: "",
    sku: "",
    price: "",
    category: "",
    itemWeight: "",
    itemSize: "",
    itemDimensions: "",
    aboutProduct: "",
    productTags: [],
    productColors: [],
    productImages: [],
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleTagChange = (e, index) => {
    const newTags = [...tags];
    newTags[index] = e.target.value;
    setTags(newTags);
    setProduct({ ...product, productTags: newTags });
  };

  const handleColorChange = (e, index) => {
    const newColors = [...colors];
    newColors[index] = e.target.value;
    setColors(newColors);
    setProduct({ ...product, productColors: newColors });
  };

  const handleImageChange = (e, index) => {
    const newImages = [...images];
    newImages[index] = e.target.files[0];
    setImages(newImages);
    setProduct({ ...product, productImages: newImages });
  };

  const data = () => {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("about", product.aboutProduct);
    formData.append("category", product.category);
    formData.append("sku", product.sku);
    formData.append("weight", product?.itemWeight);
    formData.append("size", product.itemSize);
    formData.append("dimensions", product.itemDimensions);
    formData.append("description", product.description);

    product.productTags.forEach((tag) => {
      formData.append("tags", tag);
    });

    product.productColors.forEach((color) => {
      formData.append("colors", color);
    });

    product.productImages.forEach((img) => {
      formData.append("images", img);
    });

    return formData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation for tags, colors and images
    if (tags.includes("") || tags.length < 2) {
      return toast.error("Please add at least two tags");
    }
    if (colors.includes("")) {
      return toast.error("Please add at least two colors");
    }
    if (images.includes(null) || images.length < 2) {
      return toast.error("Please add at least two images");
    }
    if (images.length > 3) {
      return toast.error("You can only add up to 3 images");
    }

    const formData = data();

    try {
      setLoading(true);
      const res = await axios.post("/admin/product", formData, {
        headers: {
          Authorization: `Bearer ${authAdmin.token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      // console.log(res.data);

      if (res.data.success) {
        toast.success(res.data.message);
        setProduct({
          name: "",
          sku: "",
          price: "",
          category: "",
          itemWeight: "",
          itemSize: "",
          itemDimensions: "",
          aboutProduct: "",
          productTags: [],
          productColors: [],
          productImages: [],
          description: "",
        });
        setTags([""]);
        setColors([""]);
        setImages([null]);
      }
    } catch (error) {
      toast.error(error.response.data.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (state?.id) {
      const fetchProduct = async () => {
        try {
          setLoading(true);
          const res = await axios.get(`admin/product/read/${state?.id}`);

          // console.log(res.data);

          if (res.data.success) {
            const product = res.data.data;
            setProduct({
              name: product.name,
              sku: product.sku,
              price: product.price,
              category: product.category,
              itemWeight: product.weight,
              itemSize: product.size,
              itemDimensions: product.dimensions,
              aboutProduct: product.about,
              productTags: product.tags,
              productColors: product.colors,
              productImages: product.images,
              description: product.description,
            });

            setTags(product.tags);
            setColors(product.colors);
            setImages(product.images);
          }
        } catch (error) {
          toast.error(error.response.data.message || "An error occurred");
        } finally {
          setLoading(false);
        }
      };

      fetchProduct();
    }
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
    } finally{
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
                  htmlFor="weight"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Item Weight (kg)
                </label>
                <input
                  type="number"
                  name="itemWeight"
                  id="item-weight"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  value={product.itemWeight}
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
                  name="itemSize"
                  id="item-size"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder={12}
                  value={product.itemSize}
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
                  name="itemDimensions"
                  id="item-dimensions"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="12 x 12 x 12"
                  value={product.itemDimensions}
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
                  name="aboutProduct"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="about product"
                  value={product.aboutProduct}
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
                      name="productTags"
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
                  className="bg-[#034062] mt-2 text-sm text-white py-1 px-3 rounded-lg"
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
                      name="productColors"
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
                  className="bg-[#034062] mt-2 text-sm text-white py-1 px-3 rounded-lg"
                >
                  Add One More
                </button>
              </div>
              <div className="sm:col-span-2">
                {images.map((img, index) => (
                  <div key={index}>
                    <label
                      htmlFor="name"
                      className="block mb-2 mt-2 text-sm font-medium text-gray-900"
                    >
                      Product Images
                    </label>
                    <input
                      type="file"
                      name="productImages"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      placeholder="product images"
                      onChange={(e) => handleImageChange(e, index)}
                    />
                  </div>
                ))}
                <button
                  onClick={() => setImages([...images, null])}
                  type="button"
                  className="bg-[#034062] mt-2 text-sm text-white py-1 px-3 rounded-lg"
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
                  name="description"
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                  placeholder="Your description here"
                  value={product.description}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {state?.id ? (
              <button
                type="button"
                onClick={updateHandler}
                className="mt-6 bg-[#034062] text-white px-5 rounded-lg py-3"
              >
                {loading ? "Loading..." : "Update Product"}
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="mt-6 bg-[#034062] text-white px-5 rounded-lg py-3"
              >
                {loading ? "Loading..." : "Add Product"}
              </button>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default AddProducts;
