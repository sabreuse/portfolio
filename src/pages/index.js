import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import '../styles/index.css'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <h1>Hi people</h1>
    <p>
      This is a space for me to play with new technologies. Some of them will
      turn into larger experiments; some will probably always just be proofs of
      concept. Either way, enjoy exploring!
    </p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <div className="article-container">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className="article-box">
          <h3 className="title">
            <Link
              to={node.fields.slug}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <h3 className="title">{node.frontmatter.title}</h3>
            </Link>
          </h3>
          <p className="author">{node.frontmatter.author}</p>
          <p className="date">
            {node.frontmatter.date} {node.timeToRead}min read
          </p>
          <p className="excerpt">{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`
