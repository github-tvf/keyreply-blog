import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
const pagesize = 10000
const pagenumber = 1
const NewsDetailView = ({ currentUser, location, newsDetail, getBlogByID, getRelatedNews }) => {
  useEffect(() => {
    if (new URLSearchParams(location.search).get("id")) {
      getBlogByID(new URLSearchParams(location.search).get("id"))
      getRelatedNews(pagesize, pagenumber)
    }
  }, [new URLSearchParams(location.search).get("id")]);
  return (
    <>
      <div className="news-details">
        <div className="tvf-container">
          {
            newsDetail.postDetail &&
            <>
              <h3 className="news-title">{newsDetail.postDetail.title}</h3>
              <span className="created-date">{moment(newsDetail.postDetail.createdAt).format('MM-DD-YYYY')}</span>
              <div className="news-detail" dangerouslySetInnerHTML={{ __html: newsDetail.postDetail.content }}></div>
              <hr />
            </>
          }
          <h3 className="page-title">tin tức khác</h3>
          <ul className="list-news row">
            {
              newsDetail.realtedNews.length > 0 &&
              newsDetail.realtedNews.map((item, idx) => (
                idx < 3 &&
                <li key={idx} className="col-md-4">
                  <NavLink to={'/news/detail?id=' + item.id}>
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
    </>
  );
};

export default NewsDetailView;
