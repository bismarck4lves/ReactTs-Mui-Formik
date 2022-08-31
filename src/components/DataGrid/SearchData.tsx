import SearchIcon from "@mui/icons-material/Search";
import { InputBaseProps } from "@mui/material";
import { debounce } from "lodash";
import { useCallback, useMemo } from "react";
import { Search, SearchIconWrapper, StyledInputBase } from "./styles";

type SearchDataProps = InputBaseProps & {
  onSeach?: (val) => any;
  debounceTime?: number;
};
export function SearchData({
  debounceTime = 300,
  onSeach,
  ...rest
}: SearchDataProps) {
  const onHandleSearch = useCallback((event) => {
    onSeach(event.target.value);
  }, []);

  const debouncedEventHandler = useMemo(
    () => debounce(onHandleSearch, debounceTime),
    [onHandleSearch]
  );

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        {...rest}
        onKeyDown={debouncedEventHandler}
      />
    </Search>
  );
}
