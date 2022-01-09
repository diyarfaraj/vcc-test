import React, { useState, useEffect } from "react";
import { CarItem } from "../components/CarItem";
import "react-multi-carousel/lib/styles.css";
import { isMobile } from "react-device-detect";
import Carousel from "react-multi-carousel";
import { ButtonGroup } from "../components/CustomButton";
import { Car } from "../Interfaces/ICar";
import { ScreenSizes } from "../helpers/ScreenSizes";
import "../styles.css";
import { StyleProvider, ThemePicker } from "vcc-ui";

function App() {
  const [data, setData] = useState<Car[]>([]);

  useEffect(() => {
    fetch("./api/cars.json")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        console.log("data=>", data);
        setData(data);
      })
      .catch(function (err) {
        console.log(err, " error");
      });
  }, []);

  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <div className="main-body">
          {data && data.length && (
            <Carousel
              removeArrowOnDeviceType={[
                "tablet",
                "mobile",
                "superLargeDesktop",
                "desktop",
              ]}
              customButtonGroup={isMobile ? null : <ButtonGroup />}
              showDots={isMobile ? true : false}
              containerClass="carousel-container"
              responsive={ScreenSizes}
            >
              {data.map((item, key) => (
                <CarItem {...item} />
              ))}
            </Carousel>
          )}
        </div>
      </ThemePicker>
    </StyleProvider>
  );
}

export default App;
