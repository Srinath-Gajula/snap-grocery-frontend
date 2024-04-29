import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoBagHandleOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import styles from "../../styles/styles";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Wishlist = ({ setOpenWishlist }) => {
  const cartData = [
    {
      name: "Apple",
      description: "test",
      Price: 25,
    },
    {
      name: "Apple",
      description: "test",
      Price: 30,
    },
    {
      name: "Apple",
      description: "test",
      Price: 35,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishlist(false)}
            />
          </div>
          {/* Item length */}
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3items</h5>
          </div>

          {/* cart Single Items */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value] = useState(1);
  const totalPrice = data.Price * value;
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer " />
        <img
          src="https://m.media-amazon.com/images/I/51mA2f2HIcL._AC_UF1000,1000_QL80_.jpg"
          alt=""
          className="w-[80px] h-[80px] ml-2 mr-2 "
        />

        <div className="pl-[5px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            ₹{totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus
            size={25}
            className="cursor-pointer "
            title="Add to cart"
          />
        </div>
      </div>
    </div>
  );
};
export default Wishlist;
