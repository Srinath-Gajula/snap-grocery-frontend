import React from "react";
import styles from "../../styles/styles";

const Sponsorved = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer rounded-xl`}
    >
      <div className="flex justify-between w-full">
        <div className="flex items-start">
          <img
            src="https://i.pinimg.com/236x/2c/94/5d/2c945d994aee9e0fe1b42d0bb4a88099.jpg"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://i.pinimg.com/564x/37/cb/e1/37cbe1798a648a2be49113538ea31d9d.jpg"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://i.pinimg.com/564x/5b/6b/d3/5b6bd3114d953e993bbd26a8cdcb5ca8.jpg"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://i.pinimg.com/564x/c7/9a/4b/c79a4bbb597455c8db79d75825692aea.jpg"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://i.pinimg.com/236x/54/e3/a1/54e3a1b6045cde36d8e3ece3ab7728e4.jpg"
            alt=""
            style={{ width: "150px", objectFit: "contain" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsorved;
