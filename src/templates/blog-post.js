import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Ratings from "../components/Ratings";

const addClassToImg = (text) => {
  return text.replace("<p><img src", "<p><img class='blogImg' src")
}

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  ratingTaste,
  ratingTexture,
  ratingPrice,
  ratingMouthFeel,
  ratingXFactor,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title} {ratingTaste}
            </h1>
            <p>{description}</p>
            <PostContent content={addClassToImg(content)} />
            <Ratings
              ratingTaste={ratingTaste}
              ratingTexture={ratingTexture}
              ratingPrice={ratingPrice}
              ratingMouthFeel={ratingMouthFeel}
              ratingXFactor={ratingXFactor}
            />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  ratingTaste: PropTypes.number,
  ratingTexture: PropTypes.number,
  ratingPrice: PropTypes.number,
  ratingMouthFeel: PropTypes.number,
  ratingXFactor: PropTypes.number,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        ratingTaste={post.frontmatter.ratingTaste}
        ratingTexture={post.frontmatter.ratingTexture}
        ratingPrice={post.frontmatter.ratingPrice}
        ratingMouthFeel={post.frontmatter.ratingMouthFeel}
        ratingXFactor={post.frontmatter.ratingXFactor}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        ratingTaste
        ratingTexture
        ratingPrice
        ratingMouthFeel
        ratingXFactor
        tags
      }
    }
  }
`
