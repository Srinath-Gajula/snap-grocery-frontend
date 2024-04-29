import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";

const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12"} lg:flex p-2 `}>
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg" alt="" />
        <div className="w-full lg:[w-50%] flex flex-col justify-center">
          <h2 className={`${styles.productTitle}`}>Apple</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            ipsum vitae tenetur quas! Nihil deleniti, sequi vitae quisquam,
            nesciunt et deserunt odit harum neque eius facere incidunt itaque
            dolore quod.
          </p>
          <div className="flex py-2 justify-between">
          <div className="flex">
          <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              119₹
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              99₹
            </h5>
            </div>
            <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            12 sold
          </span>
          </div>
          <CountDown />
        <br />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
