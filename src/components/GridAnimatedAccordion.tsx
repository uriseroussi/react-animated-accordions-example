import { ReactNode, useState } from 'react';

type GridAnimatedAccordionProps = {
  title: ReactNode;
  children: ReactNode;
};

const GridAnimatedAccordion = ({
  title,
  children,
}: GridAnimatedAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="border rounded">
      <button
        className="w-full px-4 py-2 text-left bg-gray-100 hover:bg-gray-200 font-medium"
        onClick={toggleAccordion}
      >
        {title}
      </button>

      <div
        className="border-t transition-[grid-template-rows] grid duration-500"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
        }}
      >
        <div className="overflow-hidden">
          <div className="px-4 py-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default GridAnimatedAccordion;
