import React, { useContext, useState } from "react";
import { Label } from 'semantic-ui-react'
import { getSearchResults } from '../../services/common/search'
import ArticlesList from '../Articles/ArticlesList'
import { debounce } from 'lodash'
import notify from '../../services/common/notify'
import { StyledInput, StyledSegment } from './style'
import { LanguageContext } from "../../LanguageContext";

const SearchComponent = (props) => {

  const { language } = useContext(LanguageContext)

  const [searchData, setSearchData] = useState({
    isBusy: false,
    results: [],
    searchValue: ''
  })

  const { isBusy, results, searchValue } = searchData

  const handleSearch = debounce(async (text) => {
    try {
      setSearchData(prevData => ({ ...prevData, isBusy: true }))
      let results = []
      if (text !== '') {
        const searchResponse = await getSearchResults(language.id, text)
        results = searchResponse.data.articles
      }
      setSearchData({
        ...searchData,
        searchValue: text,
        results,
        isBusy: false
      })
    } catch (error) {
      notify(error.response.data.message, 'error')
      setSearchData({
        ...searchData,
        searchValue: text,
        results: [],
        isBusy: false
      })
    }
  }, 300)

  const renderArticles = () => {
    return results.length > 0 ?
      (
        <ArticlesList
          hideTitle={true}
          styleCardsGroup={{ overflowY: 'auto', maxHeight: '65vh', }}
          urlData={{ articleGroup: 'q', articleId: searchValue }}
          {...props}
          articles={results} />
      ) : null
  }

  return (
    <StyledSegment>
      <div className="wrapper">
        <Label size="huge">{`Search top news from ${language.country} by term:`}</Label>
        <StyledInput
          loading={isBusy}
          onChange={e => handleSearch(e.currentTarget.value)}
          icon='newspaper'
          iconPosition='left'
          placeholder={'Search term...'} />
      </div>
      {searchValue !== '' && results.length === 0 ? <p className="noResultsMessage">{'There are no results to display...'}</p> : renderArticles()}
    </StyledSegment>
  )
}
export default SearchComponent
