import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface Props {}

function IntroSlider({}: Props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    fade:true,
    autoplaySpeed:5000
    
  };

  interface SliderData {
    title: string;
    content: string;
    image: string;
  }

  const SliderD: SliderData[] = [
    {
      title: "Setup automated rewards and promotions",
      content:
        "Grow your brand with our complete loyalty,  customer engagement and user retention platform and  Ensure your existing customers keep coming back to you",
      image: "/asset/ben1.png",
    },
    {
      title:
        "Your customers easily signup  and checkin with their mobile number",
      content:
        "Grow your brand with our complete loyalty,  customer engagement and user retention platform and  Ensure your existing customers keep coming back to you",
      image: "/asset/ben2.png",
    },
    {
      title: "Send promotions that can spike customer visit by 70%",
      content:
        "Grow your brand with our complete loyalty,  customer engagement and user retention platform and  Ensure your existing customers keep coming back to you",
      image: "/asset/ben3.png",
    },
  ];

  const renderSlider = SliderD.map((i, index) => {
    return (
      <div key={index} className=" text-center mt-8">
        <Image src={i.image} width="250px" height="240px" />
        <h3 className=" text-[18px] mt-2 mb-[20px] text-[#363352] font-[700]">
          {i.title}
        </h3>
        <p className=" text-[13px] text-[#363352] font-[400]">{i.content}</p>
      </div>
    );
  });

  return (
    <div className="bg-white rounded-[20px] px-[70px] pt-[35px] py-[55px]">
      <Image src={"/asset/logo.png"} width={"148px"} height={"35px"} />

      <div>
        <Slider {...settings}>{renderSlider}</Slider>
      </div>
    </div>
  );
}

export default IntroSlider;
