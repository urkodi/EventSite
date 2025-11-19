import type { ComponentType } from "react";
type SVGComponent = ComponentType<any>;

interface CategoryProps {
    icon: string | SVGComponent;
    //title: string;
}

function Category({icon: Icon}: CategoryProps) {
  return (
    <div className="flex gap-1 items-center justify-center bg-white m-auto py-1.5 px-2 rounded-full">
      <Icon width="2em" height="2em" />
    </div>
  );
}
export default Category;