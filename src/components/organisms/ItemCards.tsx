import { Pagination, Stack, TextField } from "@mui/material";
import { useLayoutEffect, useState, useMemo } from "react";
import { shopProducts } from "../../data/shopProducts";
import { ItemCard } from "../atoms/card/ItemCard";
import { SortButton } from "../atoms/button/SortButton";
import { TFilter } from "../../types/types";

const itemsPerPage = 12;

const ItemCards: React.FC = () => {
  const [page, setPage] = useState<number>(1);
  const [filters, setFilters] = useState<TFilter>({});

  const filteredProducts = useMemo(() => {
    let filtered = [...shopProducts];

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    if (filters.priceSort) {
      filtered.sort((a, b) => {
        if (filters.priceSort === "asc") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }

    return filtered;
  }, [shopProducts, filters]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentComponents = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleFilterChange = (newFilters: TFilter) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handlePriceSort = (sortDirection: "asc" | "desc" | null) => {
    handleFilterChange({ ...filters, priceSort: sortDirection });
  };

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  return (
    <div>
      <div className="flex flex-col justify-evenly items-center mt-4">
        <TextField
          color="success"
          label={<h3 className="text-black">Поиск по названию или описанию</h3>}
          value={filters.searchQuery || ""}
          onChange={(e) =>
            handleFilterChange({ ...filters, searchQuery: e.target.value })
          }
          className="flex justify-center bg-[rgb(237,233,225)] shadow-lg mb-4 p-2 border border-black/30 rounded-lg w-[50%]"
        />

        <div className="flex flex-row justify-evenly items-center mb-4">
          <SortButton callback={() => handlePriceSort("asc")}>
            Сортировать по цене (по возрастанию)
          </SortButton>
          <SortButton callback={() => handlePriceSort("desc")}>
            Сортировать по цене (по убыванию)
          </SortButton>
          <SortButton callback={() => handlePriceSort(null)}>
            Сбросить сортировку цен
          </SortButton>
        </div>
      </div>

      <div className="flex flex-wrap">
        {currentComponents.map((product) => (
          <div className="flex flex-col mb-6 p-2 w-1/3" key={product.id}>
            <ItemCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              numberOfstars={product.numberOfstars}
              src={product.src}
              product={product}
            />
          </div>
        ))}
      </div>
      <Stack spacing={2}>
        <Pagination
          size="large"
          className="flex justify-center transition-all"
          count={totalPages}
          page={page}
          onChange={handleChange}
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#076e2f",
              "&.Mui-selected": {
                backgroundColor: "#076e2f",
                color: "white",
              },
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default ItemCards;
