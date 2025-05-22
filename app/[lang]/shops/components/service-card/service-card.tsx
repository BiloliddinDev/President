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
        className="px-9 py-7 bg-white rounded outline  outline-offset-[-1px] outline-gray-200 inline-flex justify-start items-center gap-6"
      >
        <div className="w-32 justify-start text-primary text-sm font-medium font-['Inter'] leading-tight">
          {text}
        </div>
        <div className="w-14 h-14 relative">
          <div />
          <IconComponent name={iconName} />
        </div>
      </div>
    </Link>
  );
};
