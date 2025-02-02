import { ModalProps } from "./modal.types";
import useOutsideClick from "../../hooks/useOutsideClick";

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  const ref = useOutsideClick<HTMLDivElement>(onClose);

  return (
    open && (
      <div className='backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-gray-700/10'>
        <div
          ref={ref}
          className='fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-800 p-4 transition-all duration-500 ease-out w-[calc(100vw-2rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto'>
          <div className='flex items-center justify-between border-b border-b-gray-500 pb-2 mb-6'>
            <p className='font-bold text-base'>{title}</p>
            <button onClick={onClose}>X</button>
          </div>
          {children}
        </div>
      </div>
    )
  );
};
