import IconComponent from "@/components/icon/icon-view";
import Link from "next/link";

export const ServiceCard = ({
  text,
  iconName,
  link,
}: {
  text: string;
  iconName: string;
  link: string;
}) => {
  return (
    <Link href={`service/${link}`}>
      <div
        data-property-1="Default"
        className="px-4.5 md:px-9 md:py-7 bg-white rounded outline  outline-offset-[-1px] outline-gray-200 flex flex-col md:flex-row justify-center  md:justify-start items-center gap-4 md:gap-6 min-h-[161px] "
      >
        <div className="w-32 justify-start text-primary text-sm font-medium font-['Inter'] leading-tight order-1 md:order-0 text-center">
          {text}
        </div>
        <div className="w-14 h-14 relative order-0 md:order-1">
          <IconComponent name={iconName} />
        </div>
      </div>
    </Link>
  );
};
