import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowRoundForward } from "react-icons/io";
// Import Swiper styles
import "swiper/css";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  const [isNav, setIsNav] = useState(false);
  const cursorRef = useRef(null);
  const textRef = useRef(null);
  const bottomNavRef = useRef(null);
  const bottomNavWrapperRef = useRef(null);
  const loader = useRef(null);
  const scrollRef = useRef();
  const rjRef = useRef(null);

  const bottomTextRef = useRef(null);
  const footerContent = useRef(null);
  const navRef = useRef(null);
  const lineRef = useRef(null);

  const handleMouseMove = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX + "px",
      y: e.clientY + "px",
    });
  };

  const handleMouseEnter = (e) => {
    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
    });
  };
  const handleMouseLeave = (e) => {
    gsap.to(cursorRef.current, {
      scale: 0,
      opacity: 0,
    });
  };

  let tl = gsap.timeline();
  useEffect(() => {
    const textEl = textRef.current;
    const myText = new SplitType(textEl, { type: "lines" });
    tl.from(myText.lines, {
      y: 30,
      stagger: 0.2,
      opacity: 0,
      duration: 0.5,
      scrub: true,
    });

    tl.to(textEl, {
      y: 0,
      opacity: 1,
    });

    const el = loader.current;
    const rjEl = rjRef.current;
    tl.from(el.children, {
      x: 40,
      stagger: 0.2,
      duration: 1,
      opacity: 0,
    });
    tl.to(el.children, {
      x: 0,
      stagger: 0.1,
      opacity: 0,
    });
    tl.to(el, {
      display: "none",
      opacity: 0,
      duration: 1,
    });
    tl.from(rjEl?.children, {
      y: 100,
      stagger: 0.1,
      opacity: 0,
      duration: 0.5,
      // delay:0.6
    });
    tl.to(rjEl?.children, {
      y: 0,
      stagger: 0.1,
      opacity: 1,
      duration: 0.5,
      // delay:0.6
    });
    const footerContentRef = footerContent.current;
    const bottomTxt = bottomTextRef.current;
    const bottomNavWrapper = bottomNavWrapperRef.current;
    const bottomNav = bottomNavRef.current;
    const line = lineRef.current;
    const bottomTextTL = gsap.timeline({
      scrollTrigger: {
        trigger: [footerContentRef, bottomNavWrapper,line],
        // pin: true,
        scrub: 1,
        // markers: true
      },
    });
    bottomTextTL.from(line,{
      x:0
    })
    bottomTextTL.from(bottomTxt, {
      y: -200,
      duration: 1,
      opacity: 1,
    });
    bottomTextTL.to(bottomTxt, {
      y: 20,
      // opacity:1,
      duration: 1,
      opacity: 1,
    });

    // bottomTextTL.from(bottomNav,{
    //   y:-30,
    //   duration:1,
    //   opacity:1
    // })
    // bottomTextTL.to(bottomNav,{
    //   y:0,
    //   duration:1,
    //   opacity:1
    // });
  }, []);

  useEffect(() => {
    const el = navRef.current;

    isNav
      ? gsap.fromTo(
          el,
          {
            y: -1000,
          },
          {
            y: 0,
          }
        )
      : gsap.fromTo(
          el,
          {
            y: 0,
          },
          {
            y: -1100,
          }
        );
  }, [isNav]);
  return (
    <main>
      <div
        id="loader"
        ref={loader}
        className="fixed h-full w-full  bg-black z-[990] flex items-center justify-center"
      >
        <h3 className="text-xl text-white ">Tommorow's brand today </h3>
      </div>
      <div
        id="page1"
        className=""
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <div
          id="cursor"
          ref={cursorRef}
          className=""
          style={{ scroll: scroll }}
        >
          <h5>play ree</h5>
        </div>
        <video
          src="/videos/video1.mp4"
          className="w-full h-full object-cover absolute"
          autoPlay
          loop
          muted
        ></video>
        <div
          id="page1_content"
          className="z-10 relative w-full h-full  text-white flex flex-col items-center justify-between"
          ref={scrollRef}
        >
          <nav className="flex items-center w-full justify-between py-[3vw] px-[3vw]">
            <h1 className="text-xl md:text-[1.4vw] cursor-pointer">
              The Venture Agency
            </h1>
            <h4
              className=" text-xl cursor-pointer border rounded-full px-3 hover:bg-red-400  duration:400 md:border-0"
              onClick={() => setIsNav(true)}
            >
              Menu
            </h4>
            <div
              className="venture_menu h-[100vh] w-[100vw] p-4 bg-[#FF5F38] fixed top-0 left-0 z-[1111] flex items-center flex-col justify-between"
              ref={navRef}
            >
              <div className="header flex items-center justify-between pe-3 w-full">
                <h3
                  className="text-2xl  text-black"
                  style={{ fontFamily: "rj" }}
                >
                  rejouice
                </h3>
                <button
                  className="menu-res border border-black rounded-full p-2 w-12 h-12 text-center"
                  onClick={() => setIsNav(false)}
                >
                  <RxCross2 className="text-black mx-auto" />
                </button>
              </div>
              <ul className="middle_menu text-left w-full text-black">
                <li
                  className="btn-flip capitalize text-5xl hover:underline duration-400 cursor-pointer mb-1"
                  data-front="Home"
                  data-back="Home"
                ></li>
                <li
                  className="btn-flip capitalize text-5xl hover:underline duration-400 cursor-pointer mb-1"
                  data-front="Work"
                  data-back="Work"
                ></li>
                <li
                  className="btn-flip capitalize text-5xl hover:underline duration-400 cursor-pointer mb-1"
                  data-front="About"
                  data-back="About"
                ></li>
                <li
                  className="btn-flip capitalize text-5xl hover:underline duration-400 cursor-pointer mb-1"
                  data-front="Service"
                  data-back="Service"
                ></li>
                <li
                  className="btn-flip capitalize text-5xl hover:underline duration-400 cursor-pointer mb-1"
                  data-front="Contact"
                  data-back="Contact"
                ></li>
              </ul>
              <ul className="footer-nav w-full text-left">
                <li className="flex items-center text-black text-xl cursor-pointer">
                  <span>X</span>
                  <IoIosArrowRoundForward
                    style={{ transform: "rotate(-30deg)" }}
                    className="hover:rotate-0 cursor-pointer"
                  />
                </li>
                <li className="flex items-center text-black text-xl cursor-pointer">
                  <span>Instagram</span>
                  <IoIosArrowRoundForward
                    style={{ transform: "rotate(-30deg)" }}
                    className="hover:rotate-0 cursor-pointer"
                  />
                </li>
                <li className="flex items-center text-black text-xl cursor-pointer">
                  <span>Linkedin</span>
                  <IoIosArrowRoundForward
                    style={{ transform: "rotate(-30deg)" }}
                    className="hover:rotate-0 cursor-pointer"
                  />
                </li>
              </ul>
            </div>
          </nav>
          <h1 className="big_h1 text-[26.5vw]" ref={rjRef}>
            <span>r</span>
            <span>e</span>
            <span>j</span>
            <span>o</span>
            <span>u</span>
            <span>i</span>
            <span>c</span>
            <span>e</span>
          </h1>
        </div>
      </div>
      <div id="page2" className="px-4 md:px-10 py-16">
        <div className="flex flex-col">
          <div className="upper_content flex items-center justify-between mb-2">
            <h3 className="text-2xl">
              A brand accelerator
              <br /> with two engagement models.
            </h3>
            <h3 className="text-2xl">Paris & San Diego</h3>
          </div>
          <hr className="mb-5 bg-black h-[1.2px]" />
        </div>

        <div className="bottom_content">
          <p className="md:text-6xl text-4xl font-normal our-text" ref={textRef}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We are a digital brand
            accelerator curating dream teams for dream clients. We design,
            develop, and scale market-defining brands by unlocking their hidden
            potential. Choose full cash compensation or offset up to 50% of our
            fees for equity in your company. Your vision, your decision.
          </p>
        </div>
      </div>
      <div
        id="page3"
        className="py-24 h-[90vh] flex items-center justify-center"
      >
        <div className="ps-5 md:ps-0">
          <h4 className="text-lg text-center mb-5 capitalize">
            <span className="">agency and venture</span>
            <button className="ms-2 rounded-xl text-sm bg-black px-2 py-1 text-white">
              models
            </button>
          </h4>
          <a className="text_underline text-5xl md:text-6xl capitalize" href="#">
            Explore our services
            <br />& engagement models
          </a>
        </div>
      </div>
      <div id="page4" className="px-4 md:px-10 pb-24">
        <div className="upper_side flex items-center justify-between mb-5">
          <h2 className="text-2xl">Transforming visions into brands.</h2>
          <h2 className="text-2xl">See the work</h2>
        </div>
        <div className="page_content flex-col sm:flex md:flex-row items-center justify-center gap-x-4  h-full">
          <div className="work relative">
            <img
              src="https://images.prismic.io/rejouice/d8e1fa1f-4f24-41e1-a249-098c62df5aff_Group+46+%281%29.jpg?auto=compress,format"
              alt="work_upper_image"
              className="absolute top-0 left-0 w-full h-full"
            />
            <video
              autoPlay
              loop
              muted
              src="/videos/firstWork.mp4"
              className="h-full object-cover w-full"
            ></video>
          </div>
          <div className="work relative my-5 md:my-0">
            <img
              src="https://images.prismic.io/rejouice/e0350a3d-c390-4d97-af1a-5c86bc822b52_Group+3929.jpg?auto=compress,format"
              alt="work_upper_image"
              className="absolute top-0 left-0 w-full h-full"
            />
            <video
              src="/videos/work3.mp4"
              className="h-full object-cover w-full"
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div className="work relative">
            <img
              src="https://images.prismic.io/rejouice/2874f084-ec6c-4a19-b025-a55c1e6db929_Group+3692.jpg?auto=compress,format"
              alt="work_upper_image"
              className="absolute top-0 left-0 w-full h-full"
            />
            <video
              src="/videos/work2.mp4"
              className="h-full object-cover w-full"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
      </div>
      <div
        id="page5"
        className="bg-white h-[90vh]  flex items-center justify-center"
      >
        <div className="center w-full  flex items-center justify-center">
          <video
            src="/videos/RJ-BALL-BLUE-ORANGE-scaled.webm"
            autoPlay
            muted
            loop
            className=""
          ></video>
   
        </div>
      </div>
      <div id="page6" className="h-[100vh] py-10 w-full">
        <div className="slider_header w-[95%] mx-auto px-5 md:px-0">
          <h1
            className="md:text-9xl text-6xl mb-5"
            style={{ fontFamily: "rj", fontWeight: 500 }}
          >
            Get in touch.
          </h1>
          <hr className="mb-7"
          ref={lineRef} />
        </div>
        <div className="slider_">
          <Swiper
            spaceBetween={20}
            // slidesPerView={4}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            loop={true}
            autoplay={{
              delay: 600, // Time between slides in milliseconds
              disableOnInteraction: true, // Allow manual interaction to stop autoplay
            }}
            draggable={true}
            grabCursor={true}
          >
            <SwiperSlide className="slider_box">
              <img
                src="/images/woman.jpg"
                className="w-full h-full"
                alt="slider_image"
              />
            </SwiperSlide>
            <SwiperSlide className="slider_box">
              <img
                src="/images/reel.webp"
                className="w-full h-full"
                alt="slider_image"
              />
            </SwiperSlide>

            <SwiperSlide className="slider_box">
              <img
                src="/images/vehicle.avif"
                className="w-full h-full"
                alt="slider_image"
              />
            </SwiperSlide>
            <SwiperSlide className="slider_box">
              <img
                src="/images/zip.avif"
                className="w-full h-full"
                alt="slider_image"
              />
            </SwiperSlide>
            <SwiperSlide className="slider_box">
              <img
                src="/images/cargo.jpg"
                className="w-full h-full"
                alt="slider_image"
              />
            </SwiperSlide>
            <SwiperSlide className="slider_box">
              <img
                src="/images/basic.avif"
                className="w-full h-full"
                alt="slider_image"
              />
            </SwiperSlide>
            <SwiperSlide className="slider_box">
              <img
                src="/images/ringx2.avif"
                className="w-full h-full"
                alt="slider_image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div
        id="page7"
        className="py-24 h-[90vh] flex items-center justify-center"
      >
        <div className="">
          <h4 className="text-lg text-center mb-5 capitalize">
            <span className="">Our strength lies in our people</span>
          </h4>
          <a className="text_underline text-6xl" href="#">
            Meet your team
          </a>
        </div>
      </div>
      <div
        id="page8"
        className="h-[60vh] overflow-hidden relative bg-black "
        ref={bottomNavWrapperRef}
      >
        <div className="p-8 w-full h-full flex flex-col items-center justify-between ">
          <div
            className="flex w-full items-baseline justify-between flex-wrap gap-y-4 md:gap-y-0"
            ref={bottomNavRef}
          >
            <div className="left text-white">
              <h3
                className="text-2xl text-gray-300"
                style={{ fontFamily: "nb" }}
              >
                Relax.We got you
              </h3>
              <button
                type="button"
                style={{ fontFamily: "nb" }}
                className="border px-4 py-3 text-white ease bg-transparent duration-200 mt-2 rounded-lg hover:bg-white hover:text-black"
              >
                Take a seat
              </button>
            </div>
            <div className=" flex md:gap-x-40" style={{ fontFamily: "nb" }}>
              <ul className="flex flex-col text-xl text-gray-300">
                <li>Home</li>
                <li>Work</li>
                <li>About</li>
                <li>Services & Models</li>
                <li>Contact</li>
              </ul>
              <ul className="flex flex-col text-xl text-gray-300">
                <li>X</li>
                <li>Instagram</li>
                <li>Linkedin</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex items-center justify-between ">
            <p
              className="text-gray-400 capitalize"
              style={{ fontFamily: "rj" }}
            >
              san diego-california <br />
              paris-france
            </p>
            <div className="d:flex md:gap-x-40 gap-y-4 text-gray-400">
              <p>biz@rejuice.com</p>
              <p>{new Date().getFullYear()} legal</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="page9"
        className="h-[50vh] bg-black text-white  w-full overflow-hidden pb-2 mx-auto text-center "
        ref={footerContent}
      >
        <h1
          className="text-[23.5vw] "
          style={{ fontFamily: "rj" }}
          ref={bottomTextRef}
        >
          rejouice
        </h1>
      </div>
    </main>
  );
};

export default App;
