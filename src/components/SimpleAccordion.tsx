import { ReactNode, useState } from 'react';

type SimpleAccordionProps = {
  title: ReactNode;
  children: ReactNode;
};

const SimpleAccordion = ({ title, children }: SimpleAccordionProps) => {
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
        className="px-4 py-2 border-t text-gray-700"
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        {children}
      </div>
    </div>
  );
};

export default SimpleAccordion;
