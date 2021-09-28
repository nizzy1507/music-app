import { useForm } from 'react-hook-form';
import { Search, Close } from '../Icons';

import { SearchBoxWrapper, SearchIcon, ClearSearchIcon, SearchInput } from './styledComponents';

interface SearchBoxProps {
  onSearch?: (e: any) => void;
}

const SearchBox = ({ onSearch }: SearchBoxProps) => {
  const { register, setValue, watch } = useForm<{ searchQuery: string }>();
  const watchSearchQuery = watch('searchQuery');

  return (
    <SearchBoxWrapper>
      <SearchIcon>
        <Search />
      </SearchIcon>

      <SearchInput
        placeholder="Artist, songs, or podcasts"
        {...register('searchQuery', {
          onChange: onSearch,
        })}
      />

      {watchSearchQuery && (
        <ClearSearchIcon onClick={() => setValue('searchQuery', '')}>
          <Close />
        </ClearSearchIcon>
      )}
    </SearchBoxWrapper>
  );
};

export default SearchBox;
