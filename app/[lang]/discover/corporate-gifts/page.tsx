import { BreadcrumbDynamic } from "@/components/shared/breadcrumb-dynamic/breadcrumb-dynamic";
import React from "react";
import CommonHeader from "../components/common-header";
import ImageWithText from "./image-with-text";
import Wallet from "@/public/images/wallet.png";
import Souviner from "@/public/images/souviner.png";
import PresidentWatch from "@/public/images/president-watch.png";
import CommonWatchSection from "../components/common-watch";
const CorporateGifts = () => {
  return (
    <div className="container max-w-screen-xl mx-auto px-2 md:px-4  md:!mt-26 !mt-42 ">
      <div className="mb-10">
        <BreadcrumbDynamic />
      </div>
      <CommonHeader
        contentLink
        title="Corporate gifts"
        maintextColor="#0E1422"
        maintext="Corporate gifts are the perfect opportunity to show appreciation, reward trust or foster encouragement for any business occasion."
      />
      <ImageWithText
        orderText="order-1"
        orderImg="order-2"
        imgSrc={Wallet}
        alt="wallet"
        title="Personalization options"
        subtitle="Engrave the name of the recipient or your logo on a writing instrument, a watch or emboss our leather goods.
"
      />
      <ImageWithText
        orderText="order-2"
        orderImg="order-1"
        imgSrc={Souviner}
        alt="souviner"
        title="Finding the right business gift"
        subtitle="Be it company anniversaries, important milestones, sales incentives or loyalty and reward programmes, Montblanc gifts make the occasion meaningful, ensuring the gift becomes a lifelong memory for the recipient. Gifts can be personalised for that extra thoughtful touch so each product is tailored to either the occasion or the recipient’s unique character."
      />
      <ImageWithText
        orderText="order-1"
        orderImg="order-2"
        imgSrc={PresidentWatch}
        alt="president watch"
        title="Gift for special occasions"
        subtitle="From company milestones, important business deals to anniversaries or special occasions, pay tribute to the meaning behind these occasions."
      />
      <CommonWatchSection
        videoSrc={"/videos/watch-video.mp4"}
        description="Tokens of appreciation"
        textInfo="Sometimes, the greatest gifts are the unexpected ones. Montblanc Accessories are ideal for such surprises. It doesn’t have to be a big event or milestone to show your business partners, colleagues or clients that they’re valued. Be it a corporate event, a small thank you to celebrate the signing of a contract, or simply no reason at all, Montblanc offers treasured items that act as small, heartfelt signs of appreciation."
      />
    </div>
  );
};

export default CorporateGifts;
