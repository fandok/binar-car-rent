import axios from "axios";
import React, { useEffect, useState } from "react";
import CarIndex from "../cars/carIndex";
import FormFilter from "../formFilter/formFilter";
import Footer from "../home/footer";
import OurService from "../home/ourService";
import SidebarNav from "../home/sidebar/Sidebar";

const CarListPage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = (params = {}) => {
    axios
      .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car", {
        params,
      })
      .then((res) => {
        setData(res.data);
      });
  };

  const filterForm = (params) => {
    getData(params);
  };

  return (
    <>
      <SidebarNav />
      <OurService />
      <FormFilter filterForm={filterForm} />
      <CarIndex data={data} />
      <Footer />
    </>
  );
};

export default CarListPage;
