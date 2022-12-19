import { useEffect, useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
// import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate";

import { selectSort, setSort } from "../../store/slices/sortSlice";
import { Wrapper, Label, ArrowUp, ArrowDown, Popup, Li } from "./Sort.styled";

interface CategoriesProps {
  sortNamesArr: string[];
}

const Sort = ({ sortNamesArr }: CategoriesProps) => {
  // useWhyDidYouUpdate('sort', {sortNamesArr})
  const activeSort = useAppSelector(selectSort);
  const dispatch = useAppDispatch();
  const sortRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  const chosenSortName = sortNamesArr[activeSort];

  const changeActiveSortName = (index: number) => {
    dispatch(setSort(index));
    setOpen(false);
  };

  useEffect(() => {
    const handleBodyClick = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    if (open) {
      document.body.addEventListener("click", handleBodyClick);
    }

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [open]);

  return (
    <Wrapper onClick={() => setOpen(!open)} ref={sortRef}>
      <Label>
        {open ? <ArrowUp /> : <ArrowDown />}
        <b>Sort by</b>
        <span>{chosenSortName}</span>
      </Label>
      {open && (
        <Popup>
          <ul>
            {sortNamesArr.map((sortName, i: number) => (
              <Li
                key={sortName}
                onClick={() => changeActiveSortName(i)}
                chosen={chosenSortName === sortName}
              >
                {sortName}
              </Li>
            ))}
          </ul>
        </Popup>
      )}
    </Wrapper>
  );
};
export default Sort;
