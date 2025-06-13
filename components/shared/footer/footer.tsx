"use client";

import IconComponent from "@/components/icon/icon-view";
import { Button } from "@/components/ui/button";
import { FooterLogo } from "@/components/ui/logo";
import {
  companyList,
  newProductsList,
  supportList,
} from "@/constants/footer-lists";
import Link from "next/link";
import CustomAccordion from "../custom-accordion/custom-accordion";

export const Footer = () => {
  return (
    <footer className={"container"}>
      <div
        className={
          "flex flex-wrap md:flex-nowrap flex-col sm:flex-row  justify-between mt-[100px] mb-4 items-start pb-11 border-b-[1px] border-gray-200"
        }
      >
        <div className={"flex flex-col items-start gap-6 mb-5"}>
          <FooterLogo />
          <p
            className={
              " w-full md:max-w-[278px] text-gray-600 text-sm font-normal  leading-normal "
            }
          >
            President Business Gifts is not just a premium gift brand. President
            Business Gifts is not just a premium gift brand. President Business
            Gifts is not just a premium gift brand.
          </p>
          <Button className="self-center md:self-start ">Login in</Button>
        </div>

        <div className={"hidden md:flex flex-col items-start"}>
          <h2
            className={
              "text-gray-500 text-sm  font-medium leading-normal mb-[40px]"
            }
          >
            SUPPORT
          </h2>
          <ul>
            {supportList.map((item) => (
              <li
                key={item.id}
                className={
                  " text-gray-600 text-sm mb-4 font-medium leading-normal"
                }
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <CustomAccordion
          className="block md:hidden"
          accordionTrigger="Support"
          accordionTriggerStyles="text-gray-500 text-sm  font-medium leading-normal uppercase"
          itemValue="item"
          accordionContent={
            <ul>
              {supportList.map((item) => (
                <li
                  key={item.id}
                  className={
                    "text-gray-600 text-sm mb-4 font-medium leading-normal"
                  }
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          }
        />
        <div className={"hidden md:flex flex-col items-start"}>
          <h2
            className={
              "text-gray-500 text-sm font-medium leading-normal mb-[40px]"
            }
          >
            COMPANY
          </h2>
          <ul>
            {companyList.map((item) => (
              <li
                key={item.id}
                className={
                  "text-gray-600 text-sm mb-4 font-medium leading-normal"
                }
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <CustomAccordion
          className="block md:hidden"
          accordionTrigger="company"
          accordionTriggerStyles="text-gray-500 text-sm  font-medium leading-normal uppercase"
          itemValue="item"
          accordionContent={
            <ul>
              {companyList.map((item) => (
                <li
                  key={item.id}
                  className={
                    "text-gray-600 text-sm mb-4 font-medium leading-normal"
                  }
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          }
        />
        <div className={"hidden md:flex  flex-col items-start"}>
          <h2
            className={
              "text-gray-500 text-sm font-medium leading-normal mb-[40px]"
            }
          >
            New Products
          </h2>

          <ul>
            {newProductsList.map((item) => (
              <li
                key={item.id}
                className={
                  "text-gray-600 text-sm mb-4 font-medium leading-normal"
                }
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <CustomAccordion
          className="block md:hidden"
          accordionTrigger="New products"
          accordionTriggerStyles="text-gray-500 text-sm  font-medium leading-normal uppercase"
          itemValue="item"
          accordionContent={
            <ul className="">
              {newProductsList.map((item) => (
                <li
                  key={item.id}
                  className={
                    "text-gray-600 text-sm mb-4 font-medium leading-normal"
                  }
                >
                  <Link href={item.link}>{item.name}</Link>
                </li>
              ))}
            </ul>
          }
        />
        <div className={"flex flex-col items-start"}>
          <h2
            className={
              "text-gray-500 text-sm font-medium leading-normal my-5 md:mb-[40px]"
            }
          >
            ACCEPTED PAYMENTS
          </h2>
          <div className={"flex flex-wrap md:flex-nowrap  items-center gap-4"}>
            <div>
              <IconComponent name="mastercard" />
            </div>
            <div>
              <IconComponent name="amex" />
            </div>
            <div>
              <IconComponent name="visa" />
            </div>
          </div>
          <a
            href="tel:+998712030500"
            className="font-xl my-5 text-gray-500 hover:text-black"
          >
            {" "}
            +998 71 203 05 00
          </a>
          <h2
            className={
              "text-gray-500 text-sm font-medium leading-normal mb-5 md:mb-[40px]"
            }
          >
            SOCIAL MEDIA
          </h2>
          <ul className={"flex gap-6 flex-wrap md:flex-nowrap"}>
            <li>
              <IconComponent name="whatsapp" />
            </li>
            <li>
              <IconComponent name="instagram" />
            </li>
            <li>
              <IconComponent name="facebook" />
            </li>
            <li>
              <IconComponent name="telegram" />
            </li>
            <li>
              <IconComponent name="youtube" />
            </li>
          </ul>
        </div>
      </div>
      <p
        className={
          "text-gray-600 text-sm font-normal leading-normal text-center pb-6"
        }
      >
        © 2025 President Business Gifts. All rights reserved.
      </p>
    </footer>
  );
};

//
// <div>
//     <h2>ACCEPTED PAYMENTS</h2>
//
// </div>
