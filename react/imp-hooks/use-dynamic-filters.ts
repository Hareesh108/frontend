import { useSetState } from "./use-set-state";


export function useDynamicFilters<T extends Record<string, any>>(initialValues: T) {
  const {
    state: filters,
    setState: setFilters,
    onResetState: resetFilters,
  } = useSetState(initialValues);

  return { filters, setFilters, resetFilters };
}
