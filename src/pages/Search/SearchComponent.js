import React, { useState, useEffect } from "react";
import { Header, Input, Segment } from 'semantic-ui-react'
import { searchAPIDebounced } from '../../services/common/search'
import ArticlesList from '../Articles/ArticlesList'

const SearchComponent = (props) => {

  const [results, setResults] = useState([])

  const handleSearch = async (e, data) => {
    try {
      const result = await searchAPIDebounced(e.currentTarget.value)
      setResults(result.data.articles)
    } catch (error) {

    }
  }

  return <Segment style={{ minHeight: '50vh', margin: '10px' }}>
    <Header>{'Search top news from GB by term'}</Header>
    <Input
      onChange={(e, data) => handleSearch(e, data)}
      icon='newspaper'
      iconPosition='left'
      style={{ marginTop: '50px', minWidth: '50vw', marginLeft: '20%' }}
      placeholder={'Search term...'} />
    {results.length > 0 && <ArticlesList articles={results} />}
  </Segment>
}
export default SearchComponent
