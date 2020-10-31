import React, { useState, useEffect } from "react";
import { Header, Input, Segment } from 'semantic-ui-react'
import { getSearchResults } from '../../services/common/search'
import ArticlesList from '../Articles/ArticlesList'
import { debounce } from 'lodash'

const SearchComponent = (props) => {

  const [searchData, setSearchData] = useState({
    isBusy: false,
    results: []
  })

  const { isBusy, results } = searchData

  const handleSearch = debounce(async (text) => {
    try {
      setSearchData(prevData => ({ ...prevData, isBusy: true }))
      const results = await getSearchResults(text)
      setSearchData({
        ...searchData,
        results: results.data.articles,
        isBusy: false
      })
    } catch (error) {
      setSearchData({
        ...searchData,
        results: [],
        isBusy: false
      })
    }
  }, 300)

  return <Segment style={{ minHeight: '50vh', margin: '10px' }}>
    <Header>{'Search top news from GB by term'}</Header>
    <Input
      loading={isBusy}
      onChange={e => handleSearch(e.currentTarget.value)}
      icon='newspaper'
      iconPosition='left'
      style={{ marginTop: '50px', minWidth: '50vw', marginLeft: '20%' }}
      placeholder={'Search term...'} />
    {results.length > 0 ? <ArticlesList articles={results} /> : null}
  </Segment>
}
export default SearchComponent
