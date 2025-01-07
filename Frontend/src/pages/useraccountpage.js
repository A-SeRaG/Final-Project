import React from 'react';
import Footer from "../components/footer.js";
import SwiperParent from "../components/swiper.js";
import Timer from "../components/timer.js";
import Basicard from "../components/sales.js";
import CategoryBasic from "../components/category.js";
import ArrivalBasic from "../components/arrival.js";
import Release from "../components/release.js";

const Useracount = () => {

  return (
    <div>
      {/* Content of Useracount */}
      <SwiperParent />
      <Timer />
      <Basicard />
      <CategoryBasic />
      <ArrivalBasic />
      <Release />
      <Footer />
    </div>
  );
};

export default Useracount;
