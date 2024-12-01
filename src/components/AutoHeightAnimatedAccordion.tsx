import { ReactNode, useState } from 'react';

type AutoHeightAnimatedAccordionProps = {
  title: ReactNode;
  children: ReactNode;
};

const AutoHeightAnimatedAccordion = ({
  title,
  children,
}: AutoHeightAnimatedAccordionProps) => {
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
        className="border-t transition-all overflow-hidden duration-500"
        style={{
          height: isOpen ? 'auto' : 0,
        }}
      >
        <div className="px-4 py-2">{children}</div>
      </div>
    </div>
  );
};

export default AutoHeightAnimatedAccordion;
