import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Ratings from "../components/Ratings";
import { DiscussionEmbed } from 'disqus-react';

const addClassToImg = (text) => {
  if (typeof (text) != "string") return;
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
  id
}) => {
  const PostContent = contentComponent || Content

  const [windowUrl, setwindowUrl] = useState("")

  useEffect(() => {
    setwindowUrl(window.location.href)

  }, [])

  return (
    <section className="section blogBg">
      {helmet || ''}
      <div className="container content" style={{ backgroundColor: "white", borderRadius: "5px" }}>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
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
            <div style={{ paddingTop: "30px" }}>
              {/* This is causing an error in the editor probably */}
              {!windowUrl.includes("admin") &&
                <DiscussionEmbed
                  shortname='choccy'
                  config={
                    {
                      url: "https://www.choccy.darrenxu.com/",
                      identifier: id,
                      title: title,
                    }
                  }
                />
              }
            </div>
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
  id: PropTypes.string
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        id={post.id}
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
