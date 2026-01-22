import type { GridSortModel, GridPaginationModel } from "@mui/x-data-grid";

import { useRef, useMemo, useState, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDynamicFilters } from "./use-dynamic-filters";


function parseJSON<T>(value: string | null, fallback: T): T {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

interface UseUrlSyncedDataGridOptions<T extends Record<string, any>> {
  defaultPage?: number;
  defaultPageSize?: number;
  defaultSort?: GridSortModel;
  initialFilters: T;
}

export function useUrlSyncedDataGrid<T extends Record<string, any>>(
  options: UseUrlSyncedDataGridOptions<T>
) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const {
    defaultPage = 0,
    defaultPageSize = 10,
    defaultSort = [{ field: "updatedAt", sort: "desc" }],
    initialFilters,
  } = options;

  const urlFilters = useMemo(
    () => parseJSON<T>(searchParams.get("filters"), initialFilters),
    [searchParams, initialFilters]
  );

  const { filters, setFilters, resetFilters } = useDynamicFilters(urlFilters);

  const paginationModelInitial = useMemo(
    () => ({
      page: parseInt(searchParams.get("page") ?? defaultPage.toString(), 10),
      pageSize: parseInt(searchParams.get("pageSize") ?? defaultPageSize.toString(), 10),
    }),
    [searchParams, defaultPage, defaultPageSize]
  );

  const sortModelInitial = useMemo(() => {
    const sortParam = searchParams.get("sortModel");
    return parseJSON<GridSortModel>(sortParam, defaultSort);
  }, [searchParams, defaultSort]);

  const [paginationModel, setPaginationModel] =
    useState<GridPaginationModel>(paginationModelInitial);
  const [sortModel, setSortModel] = useState<GridSortModel>(sortModelInitial);

  const hasMounted = useRef(false);

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    const newParams = new URLSearchParams(searchParams.toString());

    const shouldAddPage = paginationModel.page !== defaultPage;
    const shouldAddPageSize = paginationModel.pageSize !== defaultPageSize;
    const shouldAddSort = JSON.stringify(sortModel) !== JSON.stringify(defaultSort);
    const shouldAddFilters = JSON.stringify(filters) !== JSON.stringify(initialFilters);

    if (shouldAddPage) {
      newParams.set("page", paginationModel.page.toString());
    } else {
      newParams.delete("page");
    }

    if (shouldAddPageSize) {
      newParams.set("pageSize", paginationModel.pageSize.toString());
    } else {
      newParams.delete("pageSize");
    }

    if (shouldAddSort && sortModel.length > 0) {
      newParams.set("sortModel", JSON.stringify(sortModel));
    } else {
      newParams.delete("sortModel");
    }

    if (shouldAddFilters && Object.keys(filters).length > 0) {
      newParams.set("filters", JSON.stringify(filters));
    } else {
      newParams.delete("filters");
    }

    const newUrl = `${pathname}?${newParams.toString()}`;
    router.replace(newUrl, { scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationModel, sortModel, filters]);

  return {
    paginationModel,
    setPaginationModel,
    sortModel,
    setSortModel,
    filters,
    setFilters,
    resetFilters,
  };
}
