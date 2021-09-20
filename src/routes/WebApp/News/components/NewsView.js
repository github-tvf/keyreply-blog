import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { category } from 'components/common'
import moment from 'moment';
const pagesize = 10000
const pagenumber = 1
const NewsView = ({ currentUser, home, getAllBlogs }) => {
  const [activeMenu, setActiveMenu] = React.useState('all');
  useEffect(() => {
    console.log('abc')
    getAllBlogs(pagesize, pagenumber)
  }, []);
  console.log(home)
  return (
    <>
      <div className="news-page">
        <div className="tvf-container">
          <h3 className="page-title">tin tức sự kiện</h3>
          <ul className="news-menu">
            <li>
              <a href="#" className={`${activeMenu == 'all' ? 'active' : ''}`}>{'All news'} </a>
            </li>
            {
              category.map((item, idx) => (
                <li key={idx}>
                  <a href="#" className={`prevent-click`}>{item.name} </a>
                </li>
              ))
            }
          </ul>
          <div className="row">
            <div className="col-md-7">
              {
                home.listBlog.length > 0 &&
                < div className="big-news">
                  <NavLink to={'/news/detail?id=' + home.listBlog.find(rw => rw.category === 'Hot').id}>
                    <div className="thumb">
                      <img src={home.listBlog.find(rw => rw.category === 'Hot').thumbnail != '' ? home.listBlog.find(rw => rw.category === 'Hot').thumbnail : "/images/thumb.jpg"}
                        alt="" className="thumb_img" />
                      <img src="/images/news-gif.png" alt="" className="thumb_trans" />
                    </div>
                    <div className="big-title">
                      <span className="big-cate">{home.listBlog.find(rw => rw.category === 'Hot').category}</span>
                      <h4 className="news-title"> {home.listBlog.find(rw => rw.category === 'Hot').title}</h4>
                      <p className="news-date">{moment(home.listBlog.find(rw => rw.category === 'Hot').createdAt).format('MM-DD-YYYY')}</p>
                    </div>
                  </NavLink>
                </div>
              }
              <div className="wrap-news">
                <ul className="list-news row">
                  {
                    home.listBlog.length > 0 &&
                    home.listBlog.map((item, idx) => (
                      <li key={idx} className="col-md-6">
                        <NavLink to={'/news/detail?id='+item.id}>
                          <div className="thumb">
                            <img src={item.thumbnail != '' ? item.thumbnail : "/images/thumb.jpg"} alt="" className="thumb_img" />
                            <img src="/images/news-gif.png" alt="" className="thumb_trans" />
                          </div>
                          <h4 className="news-title"> {item.title}</h4>
                          <p className="news-date">{moment(item.createdAt).format('MM-DD-YYYY')}</p>
                        </NavLink>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <ul className="top-news">
                {
                  home.listBlog.length > 0 &&
                  home.listBlog.filter(rw => rw.category === 'Hot').map((item, idx) => (
                    <li key={idx}>
                      <NavLink to={'/news/detail?id='+item.id}>
                        <div className="thumb">
                          <img src={item.thumbnail != '' ? item.thumbnail : "/images/thumb.jpg"} alt="" className="thumb_img" />
                          <img src="/images/news-gif.png" alt="" className="thumb_trans" />
                        </div>
                        <h4 className="news-title"> {item.title}</h4>
                        <p className="news-date">{moment(item.createdAt).format('MM-DD-YYYY')}</p>
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsView;
