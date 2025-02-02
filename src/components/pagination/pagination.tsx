import { useNavigate } from "react-router-dom";

export const Pagination: React.FC<{
  page: number;
  total_pages: number;
}> = ({ page, total_pages }) => {
  const navigate = useNavigate();

  const handleNext = () => {
    if (page < total_pages) {
      navigate(`?page=${page + 1}`);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      navigate(`?page=${page - 1}`);
    }
  };

  return (
    <div className='w-full h-20 flex items-center justify-center'>
      <div className='w-60 h-full flex items-center justify-center gap-x-4'>
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className={`w-14 h-12 rounded-md border border-gray-500 flex items-center justify-center ${
            page === 1
              ? "text-gray-500 cursor-not-allowed"
              : "text-white cursor-pointer"
          }`}>
          prev
        </button>
        <span className='w-14 h-12 rounded-md border border-gray-500 flex items-center justify-center'>
          {page}
        </span>
        <button
          onClick={handleNext}
          disabled={page === total_pages}
          className={`w-14 h-12 rounded-md border border-gray-500 flex items-center justify-center ${
            page === total_pages
              ? "text-gray-500 cursor-not-allowed"
              : "text-white cursor-pointer"
          }`}>
          next
        </button>
      </div>
    </div>
  );
};
