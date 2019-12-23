import React from "react"
import * as S from "./styled"
import propTypes from "prop-types"

const RecommendedPost = ({ next, previous }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink 
        to={previous.fields.slug} 
        className="previous" 
        cover 
        direction="left" 
        bg="#16202c"
        duration={0.6}
      >
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}

    {next && (
      <S.RecommendedLink 
        to={next.fields.slug}
        className="next"
        cover 
        direction="right" 
        bg="#16202c"
        duration={0.6}
      >
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
)

RecommendedPost.propTypes = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired
    }),
  }),
}

export default RecommendedPost