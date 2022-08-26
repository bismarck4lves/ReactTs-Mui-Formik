import {
  createSearchParams,
  URLSearchParamsInit,
  useNavigate,
  useSearchParams
} from "react-router-dom";

export function useQueryParams() {
  const [searchParams] = useSearchParams();
  const baseNavigate = useNavigate();

  function get() {
    return Object.fromEntries([...searchParams]);
  }

  function set(params: URLSearchParamsInit) {
    return `?${createSearchParams(params)}`;
  }

  const navigate = (pathname, params) => {
    return baseNavigate({ pathname, search: set(params) });
  };

  return {
    get,
    set,
    navigate,
    baseNavigate
  };
}
