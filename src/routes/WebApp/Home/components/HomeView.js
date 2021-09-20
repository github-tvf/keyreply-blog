import React, { useEffect } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import moment from 'moment';
//slick setting
const pagesize = 10000
const pagenumber = 1
const settings = {
  dots: !1,
  infinite: !1,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  adaptiveHeight: !0,
  autoplaySpeed: 5e3,
  arrows: !1,
  centerPadding: '40px',
};
const HomeView = ({ currentUser, getAllBlogs, home }) => {
  useEffect(() => {
    getAllBlogs(pagesize, pagenumber)
  }, []);
  return (
    <>
      <div className="home-page">
        <section className="home-banner animated animate__fadeInUp">
          <img src="/images/Landmark81banner.jpg" alt="" />
          <div className="scroll-animated">
            <span >Scroll<br />Down</span>
            <img src="/images/scrolldown-icon.png" alt="" />
          </div>
        </section>
        <section className="news">
          <div className="tvf-container">
            <h3 className="page-title">Tin Tức Sự Kiện</h3>
            <ul className="list-news">
              {
                home.listBlog.length > 0 &&
                home.listBlog.filter(rw => rw.category === 'Hot').map((post, idx) => (
                  <li key={idx}>
                    <NavLink to={'/news'}>
                      <div className="thumb">
                        <img src="/images/thumb.jpg" alt="" className="thumb_img" />
                        <img src="/images/news-gif.png" alt="" className="thumb_trans" />
                      </div>
                      <h4 className="news-title"> {post.title}</h4>
                      <p className="news-date">{moment(post.createdAt).format('MM-DD-YYYY')}</p>
                    </NavLink>
                  </li>
                ))
              }
            </ul>
            <NavLink className="btn-view-more" to={'/news'}>Xem Thêm</NavLink>
          </div>
        </section>
        <section className="tfv-tech">
          <div className="tvf-container">
            <div className="content-wrap">
              <Controller>
                <Scene
                  indicators={false}
                  duration="100%"
                  triggerHook="onEnter"
                >
                  <Timeline>
                    <Tween
                      position="0"
                      from={{
                        xPercent: -50,
                      }}
                      to={{
                        xPercent: 0,
                      }}
                    >
                      <div className="left-info">
                        <h3 className="page-title">Technology of Future</h3>
                        <p className="des">
                          How we stand out – We are Young and Creative Tech Lovers driven by our endeavor devoting to each project we implement.
                        </p>
                        <div className="dragger-mouse">
                          <img src="/images/mouse.png" alt="" />
                          <div>
                            <img src="/images/ar-drag-l.png" alt="" />
                            <span>trượt để khám phá</span>
                            <img src="/images/ar-drag-r.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </Tween>
                    <Tween
                      position="0"
                      from={{
                        xPercent: 50,
                      }}
                      to={{
                        xPercent: 0,
                      }}
                    >

                      <ul className="right-info">
                        <Slider {...settings}>
                          <li className="tch-1">
                            <div className="item-category">
                              <a href="https://www.techvify.com.vn/" target="_blank" className="wrap-block">
                                <div className="ico">
                                  <img src="/images/b_transparent.gif" alt="" />
                                </div>
                                <h4 className="cat-name">New Technology</h4>
                                <div className="content">
                                  <img src="/images/TECHBANNER-2.png" alt="" />
                                  <div className="view-detail">
                                    <p>We build native, hybrid, and cross-platform apps that are powerful, highly scalable to deal with your business problems, attract users, and reinforce your brand.</p>
                                    <span className="btn-view-more">Xem Thêm</span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </li>
                          <li className="tch-2">
                            <div className="item-category">
                              <a href="https://www.techvify.com.vn/" target="_blank" className="wrap-block">
                                <div className="ico">
                                  <img src="/images/b_transparent.gif" alt="" />
                                </div>
                                <h4 className="cat-name">Industry 4.0</h4>
                                <div className="content">
                                  <img src="/images/TECHBANNER-2.png" alt="" />
                                  <div className="view-detail">
                                    <p>We build native, hybrid, and cross-platform apps that are powerful, highly scalable to deal with your business problems, attract users, and reinforce your brand.</p>
                                    <span className="btn-view-more">Xem Thêm</span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </li>
                          <li className="tch-3">
                            <div className="item-category">
                              <a href="https://www.techvify.com.vn/" target="_blank" className="wrap-block">
                                <div className="ico">
                                  <img src="/images/b_transparent.gif" alt="" />
                                </div>
                                <h4 className="cat-name">Ecommerce & Service</h4>
                                <div className="content">
                                  <img src="/images/TECHBANNER-2.png" alt="" />
                                  <div className="view-detail">
                                    <p>We build native, hybrid, and cross-platform apps that are powerful, highly scalable to deal with your business problems, attract users, and reinforce your brand.</p>
                                    <span className="btn-view-more">Xem Thêm</span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </li>
                        </Slider>
                      </ul>
                    </Tween>


                  </Timeline>
                </Scene>
              </Controller>
            </div>
          </div>
        </section>
        <section className="tvf-info">
          <Controller>
            <Scene
              indicators={false}
              duration="100%"
              triggerHook="onEnter"
            >
              <Timeline>
                <div className="tvf-container">
                  <h3 className="page-title">Giới thiệu công ty</h3>
                  <div className="row">
                    <div className="col">
                      <Tween
                        position="0"
                        from={{
                          xPercent: -100,
                        }}
                        to={{
                          xPercent: 0,
                        }}
                      >
                        <div className="sub-title">lịch sử hình thành</div>
                        <img src="/images/thumb_mini.jpg" alt="" />
                        <p>
                          In urgent situation, many people want to find the nearest pharmacy for themselves and family.
                          On a daily basis,  being busy may cause you forget daily medication.
                          You would like to order and track the availability of the medicines online.
                        </p>
                      </Tween>

                    </div>
                    <div className="col">
                      <Tween
                        position="0"
                        from={{
                          xPercent: 100,
                        }}
                        to={{
                          xPercent: 0,
                        }}
                      >
                        <div className="sub-title">hoạt động của công ty</div>
                        <img src="/images/Home-anh-3.jpg" alt="" />
                      </Tween>
                    </div>
                  </div>

                </div>
              </Timeline>
            </Scene>
          </Controller>
        </section>
      </div>
    </>
  );
};

export default HomeView;
