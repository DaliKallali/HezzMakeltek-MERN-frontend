import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MenuItem as MenuItemType } from "@/types";
import { BadgePlus, BadgeMinus } from "lucide-react";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
  removeOneFromCart: () => void;
};

const MenuItem = ({ menuItem, addToCart, removeOneFromCart }: Props) => {
  return (
    <Card>
      <CardHeader>
        <div className="grid grid-cols-3 gap-4">
          <CardTitle className="col-span-2">{menuItem.name}</CardTitle>
          <div className="flex flex-col">
            <BadgePlus
              className="cursor-grab"
              color="green"
              onClick={addToCart}
            />
            <BadgeMinus
              className="cursor-pointer"
              color="red"
              onClick={removeOneFromCart}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="font-bold">
        {(menuItem.price / 100).toFixed(2)} TND
      </CardContent>
    </Card>
  );
};

export default MenuItem;
