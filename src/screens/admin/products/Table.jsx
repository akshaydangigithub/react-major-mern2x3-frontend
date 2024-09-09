import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get("/admin/product/read/all");

        if (res.data.success) {
          setProducts(res.data.data);
        }
      } catch (error) {
        toast.error(error.response.data.message || "An error occured");
      }
    };
    fetchProduct();
  }, []);

  const handleEdit = (id) => {
    navigate("/admin/product/add", { state: { id } });
  };

  return (
    <div className="relative mt-10 overflow-x-auto shadow-sm shadow-[#034062] sm:rounded-xl">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              S. No.
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              About
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              SKU
            </th>
            <th scope="col" className="px-6 py-3">
              Tags
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Weight
            </th>
            <th scope="col" className="px-6 py-3">
              Dimentions
            </th>
            <th scope="col" className="px-6 py-3">
              Size
            </th>
            <th scope="col" className="px-6 py-3">
              Colors
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((pro, idx) => (
            <tr key={idx} className="bg-white border-b ">
              <td className="px-6 py-4">{idx + 1}.</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {pro.name}
              </th>
              <td className="px-6 py-4">{pro.price}</td>
              <td className="px-6 py-4">{pro.about}</td>
              <td className="px-6 py-4">{pro.category}</td>
              <td className="px-6 py-4">{pro.sku}</td>
              <td className="px-6 py-4">
                {pro.tags.map((tag, i) => (
                  <span key={i} className="ms-2">
                    {tag}
                  </span>
                ))}
              </td>
              <td className="px-6 py-4">{pro.description}</td>
              <td className="px-6 py-4">{pro.weight}</td>
              <td className="px-6 py-4">{pro.dimensions}</td>
              <td className="px-6 py-4">{pro.size}</td>
              <td className="px-6 py-4">
                {pro.colors.map((c, i) => (
                  <span key={i} className="ms-2">
                    {c}
                  </span>
                ))}
              </td>
              <td className="px-6 py-4 text-right">
                <div
                  onClick={() => handleEdit(pro._id)}
                  className="font-medium cursor-pointer text-blue-600 hover:underline"
                >
                  Edit
                </div>
              </td>
              <td className="px-6 py-4 text-right">
                <div className="font-medium cursor-pointer text-red-600 hover:underline">
                  Delete
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
