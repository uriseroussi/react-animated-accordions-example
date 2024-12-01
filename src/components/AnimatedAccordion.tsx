import { ReactNode, useEffect, useRef, useState } from 'react';

type AnimatedAccordionProps = {
  title: ReactNode;
  children: ReactNode;
};

const AnimatedAccordion = ({ title, children }: AnimatedAccordionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);

  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);

    if (!isOpen && containerRef.current) {
      setHeight(containerRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  };

  useEffect(() => {
    if (!isOpen || !childrenRef.current || !containerRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      setHeight(containerRef.current!.scrollHeight);
    });

    resizeObserver.observe(childrenRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [childrenRef.current, containerRef.current, isOpen]);

  return (
    <div className="border rounded">
      <button
        className="w-full px-4 py-2 text-left bg-gray-100 hover:bg-gray-200 font-medium"
        onClick={toggleAccordion}
      >
        {title}
      </button>

      <div
        ref={containerRef}
        className="border-t transition-all overflow-hidden duration-500"
        style={{
          height: `${height}px`,
        }}
      >
        <div ref={childrenRef} className="px-4 py-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AnimatedAccordion;
