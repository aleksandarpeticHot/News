import React, { useContext, useEffect, useRef, useState } from "react"
import { debounce } from 'lodash'
import type { LanguageType } from '../../types/languageType'
import { LanguageContext } from "../../LanguageContext"

/* Components */
import HeaderComp from '../../components/Header/HeaderComp'
import ArticlesList from '../Articles/ArticlesList'
import LoaderComp from '../../components/Loader/LoaderComp'

/* Styles */
import { StyledInput, StyledSegment } from './style'

/* Services */
import notify from '../../services/common/notify'
import { getSearchResults } from '../../services/common/search'

/* Constants */
import { LabelsToTranslate } from '../../Constants'


type SearchComponentProps = {
  language: LanguageType
}

const SearchComponent = (props: SearchComponentProps) => {


  const inputRef = useRef(null)

  const { language } = useContext(LanguageContext)

  const [searchData, setSearchData] = useState({
    isBusy: false,
    results: [],
    searchValue: '',
  })

  const { isBusy, results, searchValue } = searchData

  useEffect(() => {
    setSearchData({
      ...searchData,
      searchValue: '',
      results: [],
      isBusy: false
    })
    inputRef.current.value = ''
  }, [props])

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
      if (error.response) {
        notify(error.response.data.message, 'error')
      }
      else {
        notify('General error.', 'error')
      }
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
          {...props}
          hideTitle={true}
          style={{ overflowY: 'auto', maxHeight: '75vh', margin: '10px' }}
          urlData={{ articleGroup: 'q', articleId: searchValue }}
          articles={results} />
      ) : null
  }

  return (
    <StyledSegment>
      <div className="wrapper">
        <div style={{ textAlign: 'center' }}>
          <HeaderComp style={{ marginTop: '50px' }} title={`Search top news from ${language.country} by term:`} />
          <StyledInput
            onChange={e => handleSearch(e.currentTarget.value)}
            ref={inputRef}
            placeholder={LabelsToTranslate.SEARCH_TERM} />
        </div>
      </div>
      <LoaderComp isBusy={isBusy} />
      {searchValue !== '' && results.length === 0 ? <p className="noResultsMessage">{LabelsToTranslate.NO_RESULTS_MESSAGE}</p> : renderArticles()}
    </StyledSegment>
  )
}
export default SearchComponent
