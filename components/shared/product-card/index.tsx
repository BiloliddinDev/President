import Image from "next/image";
import React, { FC } from "react";
import Heart from "@/public/svg/heartBlack.svg";

import { ProductCardProps } from "@/interface/product-card-type";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const ProductCard: FC<ProductCardProps> = ({ imgUrl, name, status, price }) => {
  return (
    <Card className="shadow-none p-0 border-none">
      <CardHeader className="p-0 m-0">
        <div>
          <Image src={Heart} alt="Heart icon" className="float-right" />
        </div>
      </CardHeader>
      <CardContent className="p-0 m-0">
        <Image src={imgUrl} alt="product img" />
        <Badge variant="outline" className="my-[16px]">
          {status}
        </Badge>
        <p className="text-lg">{name}</p>
        <p className="text-gray-400">{price}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
