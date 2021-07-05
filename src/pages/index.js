import * as React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { BLOCKS } from '@contentful/rich-text-types'
import { renderRichText} from "gatsby-source-contentful/rich-text"

const IndexPage = ({data}) => {
  console.log(data.allContentfulAtricle.edges);

  const articles = data.allContentfulAtricle.edges;

  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log('dupka')
        console.log(node)
        return <img src={node.data.target.fixed.src} alt={node.data.target.descriptions}/>
      }
    }
  }

  const output = renderRichText(articles[0].node.content, options)
  return (
    <Layout>
      <Seo title="Home" />
      {
        articles.map(article => (
          <div key={article.node.title}>
            <h1>{article.node.title}</h1>
            <div>{output}</div>
          </div>
        ))
      }
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </Layout>
  )
}

export default IndexPage;

export const query = graphql`
{
  allContentfulAtricle {
    edges {
      node {
        content {
          raw
          references {
            ... on ContentfulAsset {
              __typename
              contentful_id
              fixed(width: 1600) {
                width
                height
                src
                srcSet
              }
            }
            description
            title
          }
        }
        title
      }
    }
  }
}
`
