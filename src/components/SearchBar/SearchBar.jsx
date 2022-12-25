import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { Box } from 'components/Box';
import { Form, Button, SearchInput } from 'components/SearchBar';
import { theme } from 'constants/theme';

export const SearchBar = ({ onSearchSubmit, value }) => {
  const [search, setSearch] = useState('');

  // -------------------------------------------------
  const handleSubmit = e => {
    e.preventDefault();
    onSearchSubmit(search);
  };

  // -------------------------------------------------
  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  // -------------------------------------------------
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="searchBar"
      paddingTop={6}
      paddingBottom={6}
      color="textPrimary"
      as="div"
    >
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <ImSearch size={theme.sizes.iconSearch} />
        </Button>
        <SearchInput
          type="text"
          aria-label="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleInputChange}
          value={value ? value : search}
        />
      </Form>
    </Box>
  );
};

SearchBar.propTypes = {
  onSearchSubmit: PropTypes.func.isRequired,
};
