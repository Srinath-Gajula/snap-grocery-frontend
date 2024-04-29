import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ShopLogin from "../components/Shop/ShopLogin";
import { useSelector } from "react-redux";

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller, seller } = useSelector((state) => state.seller);

  useEffect(() => {      
    if (isSeller === true) {            
      navigate(`/shop/${seller._id}`);
    }
  }, []);

  function ShopLoginPage() {
    return (
      <div>
        <ShopLogin />
      </div>
    );
  }
};

export default ShopLoginPage;
