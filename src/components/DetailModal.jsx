import axios from "axios";
import React, { useEffect, useState } from "react";
import { options2 } from "../constant";
import Loader from "./Loader";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useDispatch } from "react-redux";
import { setPath } from "../redux/slices/flightSlice";

const DetailModal = ({ closeModal, detailId }) => {
  const [d, setDetail] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setDetail(null);

    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        options2
      )
      .then((res) => {
      setDetail(res.data);
      dispatch(setPath(res.data.trail));
      })
      .catch((err) => console.error(err));
  }, [detailId]);


  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <p className="close-area">
          <span onClick={closeModal}>X</span>
        </p>
        {!d ? (
          <Loader />
        ) : !d.airport.destination || !d.airport.origin ? (
          <p className="warn">Bu Uçuşun Verileri Gizlidir!</p>
        ) : (
          <>
            <h2>{d.aircraft.model.text}</h2>
            <h2>{d.aircraft.model.code}</h2>

            <p>
              <span>Kuyruk Kodu : </span>
              <span>{d.aircraft.registration}</span>
            </p>

            <div className="slider">
              <Splide
               options={ {
                rewind: true, //başa sarma
                width:"300px" ,
                height:"200px",
                gap   : '1rem',
            
              } }>
                <SplideSlide >
                  <img  src={d.aircraft.images?.large[0]?.src} alt="plane-pic" />
                </SplideSlide>
                <SplideSlide>
                  <img src={d.aircraft.images?.large[1]?.src} alt="plane-pic1" />
                </SplideSlide>
                <SplideSlide>
                  <img src={d.aircraft.images?.large[2]?.src} alt="plane-pic2" />
                </SplideSlide>
                <SplideSlide>
                  <img src={d.aircraft.images?.large[3]?.src} alt="plane-pic3" />
                </SplideSlide>
                <SplideSlide>
                  <img src={d.aircraft.images?.large[4]?.src} alt="plane-pic4"  />
                </SplideSlide>
              </Splide>
            </div>

              <p>
                <span>Şirket : </span>
                <span>{d.airline.short}</span>
              </p>

              <p>
                <span>Kalkış: </span>
                <a target="_blank" href={d.airport.origin.website}>{d.airport.origin?.name}</a>
              </p>

              <p>
                <span>Hedef: </span>
                <a target="_blank" href={d.airport.destination.website}>{d.airport.destination?.name}</a>
              </p>

              <p className={`status ${d.status.icon}`}>{d.status.text}</p>
            
            
          </>
        )}
      </div>
    </div>
  );
};

export default DetailModal;
