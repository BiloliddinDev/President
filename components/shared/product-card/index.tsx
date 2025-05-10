import Image from "next/image";
import React, { FC } from "react";
import Heart from "@/public/svg/heartBlack.svg";

import { ProductCardProps } from "@/interface/product-card-type";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
const ProductCard: FC<ProductCardProps> = ({ imgUrl, name, status, price }) => {
  return (
    <Card>
      <CardHeader>
        <div>
          <Image src={Heart} alt="Heart icon" className="float-right" />
        </div>
      </CardHeader>
      <CardContent>
        <Image src={imgUrl} alt="product img" className="w-[255px]" />
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
