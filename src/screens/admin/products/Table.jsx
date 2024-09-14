import React, { useContext, useEffect, useState } from "react";
import axios from "../../../utils/axios";
import toast from "react-hot-toast";
import Pulses from "../../../components/Pulses";
import { useNavigate } from "react-router-dom";
import { AdminAuthContext } from "../../../context/AdminAuth";

const Table = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { authAdmin } = useContext(AdminAuthContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("admin/product/read/all");

        setProducts(res.data.data);
      } catch (error) {
        toast.error(error.response.data.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleEdit = (id) => {
    navigate("/admin/product/add", { state: { id } });
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirm) return;

    try {
      const res = await axios.delete(`admin/product/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${authAdmin.token}`,
        },
      });

      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error("Something went wrong");
      }

      setProducts(products.filter((p) => p._id !== id));
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");
    }
  };

  return (
    <>
      {loading ? (
        <div>
          <Pulses />
        </div>
      ) : (
        <>
          <div className="relative mt-10 overflow-x-auto shadow-sm shadow-[#034062] sm:rounded-xl">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white  ">
                Our products
                <p className="mt-1 text-sm font-normal text-gray-500">
                  Browse a list of Flowbite products designed to help you work
                  and play, stay organized, get answers, keep in touch, grow
                  your business, and more.
                </p>
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S.No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Colors
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    dimensions
                  </th>
                  <th scope="col" className="px-6 py-3">
                    size
                  </th>
                  <th scope="col" className="px-6 py-3">
                    sku
                  </th>
                  <th scope="col" className="px-6 py-3">
                    tags
                  </th>
                  <th scope="col" className="px-6 py-3">
                    weight
                  </th>
                  <th scope="col" className="px-6 py-3">
                    about
                  </th>
                  <th scope="col" className="px-6 py-3">
                    description
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
                {products.map((p, i) => (
                  <tr className="bg-white border-b " key={i}>
                    <td className="px-6 py-4">{i + 1}.</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {p.name}
                    </th>
                    <td className="px-6 py-4">
                      {p.colors.map((color, i) => (
                        <span key={i} className="mr-2">
                          {color}
                        </span>
                      ))}
                    </td>
                    <td className="px-6 py-4">{p.category}</td>
                    <td className="px-6 py-4">{p.price}</td>
                    <td className="px-6 py-4">{p.dimensions}</td>
                    <td className="px-6 py-4">{p.size}</td>
                    <td className="px-6 py-4">{p.sku}</td>
                    <td className="px-6 py-4">
                      {p.tags.map((tag, i) => (
                        <span key={i} className="mr-2">
                          {tag}{" "}
                        </span>
                      ))}
                    </td>
                    <td className="px-6 py-4">{p.weight}</td>
                    <td className="px-6 py-4">{p.about}</td>
                    <td className="px-6 py-4">{p.description}</td>
                    <td className="px-6 py-4 text-right">
                      <span
                        onClick={() => handleEdit(p._id)}
                        className="font-medium cursor-pointer text-blue-600 hover:underline"
                      >
                        Edit
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span
                        onClick={() => handleDelete(p._id)}
                        className="font-medium text-red-600 cursor-pointer hover:underline"
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Table;
