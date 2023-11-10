import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h4>Trade-In-Offer</h4>
          <h2>Super Value Deals</h2>
          <h1>On All Products</h1>
          <p>Save More With Coupons & upto 70% Off !</p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};
export default Banner;
