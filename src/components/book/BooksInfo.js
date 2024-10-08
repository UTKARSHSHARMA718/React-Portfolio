import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import CustomLoader from "../CustomLoader/CustomLoader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import useCustomNavigate from "../../customHooks/useCustomNavigate";
import withParticals from "../../HOC/withParticals/withParticals";
import useFetch from "../../customHooks/useFetch";
import { getValueFromBooksData } from "../../utils/util";
import { ReactComponent as LeftArrow } from "../../Assets/Images/svgs/left-arrow.svg";
import { BOOKS } from "../../Constants/routeNames";
import "./bookinfo.css";

const BooksInfo = () => {
  const { t } = useTranslation();
  const params = useParams();
  const { navigateTo } = useCustomNavigate();
  const { name } = params;
  const bookBuyLink = getValueFromBooksData({ name, attribute: "buyLink" });
  const [bookInfo, setBookInfo] = useState({
    thumbnail: "",
    title: "",
    desc: "",
    categories: "",
    previewLink: "",
  });

  const urlToGetBookData =
    process.env.REACT_APP_GOOGLE_BOOKS_END_POINTS +"?q=" +
    name +
    "&download=epub&key=" +
    process.env.REACT_APP_GOOGLE_API_KEY +
    "&maxResults=1";
  const { isLoading, error, fetchData, data } = useFetch({
    shouldPreventFetchWhileInitialRender: true,
  });

  const insertData = (res) => {
    setBookInfo({
      thumbnail: res[0]?.volumeInfo?.imageLinks?.thumbnail,
      title: res[0]?.volumeInfo?.title,
      authors: res[0]?.volumeInfo?.authors,
      desc: res[0]?.volumeInfo?.description,
      categories: res[0]?.volumeInfo?.categories,
      previewLink: res[0]?.volumeInfo?.previewLink,
    });
  };

  useEffect(() => {
    fetchData({ urlToFetch: urlToGetBookData, onSuccessCallBack: insertData });
  }, []);

  return (
    <div className="container">
      {isLoading && !error && <CustomLoader />}
      {!!error && (
        <ErrorMessage
          description={error?.message || error}
          onBtnClick={() =>
            fetchData({
              urlToFetch: urlToGetBookData,
              onSuccessCallBack: insertData,
            })
          }
        />
      )}
      {!isLoading && !error && data && (
        <div className="completeInside">
          <div className="infoContainer">
            {bookInfo?.thumbnail ? (
              <div className="frame">
                <img src={bookInfo?.thumbnail} alt="Book image" />
              </div>
            ) : (
              <CustomLoader size="small" />
            )}
            <div className="titleAndAuthorContainer">
              <div className="titleContainer">
                <p className="bookTitle" style={{ color: "greenyellow" }}>
                  {bookInfo?.title}
                </p>
              </div>
              <div className="authorContainer">
                <p className="authors" style={{ color: "gold" }}>
                  {`-By ${bookInfo?.authors}`}
                </p>
              </div>
            </div>
            <div className="descriptionContainer">
              <p className="desciption">
                {bookInfo?.desc ? bookInfo?.desc : "No description available!"}
              </p>
              <div className="categoriesContainer">
                <p className="categories">
                  {t("category")}:{" "}
                  {bookInfo?.categories ? bookInfo?.categories : "Not found"}
                </p>
              </div>
            </div>
            <div className="categoriesAndBottonBtnsContainer">
              <div className="buyAndPreviewLinkContainer">
                <a
                  className="previewLink"
                  href={bookInfo?.previewLink}
                  target="_blank"
                >
                  {t("see_preview")}
                </a>
                {!!bookBuyLink && (
                  <a className="buyLink" href={bookBuyLink} target="_blank">
                    {t("purchase_books")}
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* TODO: create a custom button component which also accepts SVG image */}
          <div className="backBtnContainer">
            <button className="BackButton" onClick={() => navigateTo(BOOKS)}>
              <LeftArrow className="leftArrowImage" />
              <p>{t("go_back")}</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default withParticals(BooksInfo);
