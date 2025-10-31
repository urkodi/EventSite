import type { ComponentType } from "react";
type SVGComponent = ComponentType<any>;

interface CategoryProps {
    icon: SVGComponent;
    //title: string;
}

function Category({icon: Icon}: CategoryProps) {
  return (
    <div className="flex gap-1 items-center justify-center bg-white m-auto py-1.5 px-2 rounded-2xl">
      <Icon width="2em" height="2em" />
    </div>
  );
}
export default Category;