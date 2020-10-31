import React, { useState, useEffect } from "react";
import { Header, Image } from 'semantic-ui-react'

const Article = (props) => {

  const { title, content, urlToImage } = props

  const displayContent = () => {
    if (content && content.length > 260) {
      return content.substring(0, 260)
    }
    return content
  }

  return <>
    <Header style={{ margin: '10px 0' }}>{title}</Header>
    {urlToImage && <Image
      src={urlToImage}
    />
    }
    <p style={{ marginTop: '10px' }}>{displayContent()}</p>
  </>
}
export default Article
