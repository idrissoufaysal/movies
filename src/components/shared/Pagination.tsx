import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useMoviesFilters } from "@/context/movieSotore";

export function PaginationDemo() {
  const { page, setPage,movies, totalResults } = useMoviesFilters();

  const itemsPerPage = 10;
  const totalPages =movies && movies.length > 0 ?  Math.ceil(totalResults / itemsPerPage) :1;

  // Limite de pages affichées autour de la page courante
  const maxPagesToShow = 5;
  const startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevious} />
        </PaginationItem>

        {/* Ajout d'ellipse au début si nécessaire */}
        {startPage > 1 && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => setPage(1)}>1</PaginationLink>
            </PaginationItem>
            <PaginationEllipsis />
          </>
        )}

        {/* Afficher les pages autour de la page actuelle */}
        {[...Array(endPage - startPage + 1)].map((_, index) => {
          const pageIndex = startPage + index;
          return (
            <PaginationItem key={pageIndex}>
              <PaginationLink
                onClick={() => setPage(pageIndex)}
                isActive={page === pageIndex}
              >
                {pageIndex}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Ajout d'ellipse à la fin si nécessaire */}
        {endPage < totalPages && (
          <>
            <PaginationEllipsis />
            <PaginationItem>
              <PaginationLink onClick={() => setPage(totalPages)}>
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
