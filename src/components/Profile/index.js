import React from "React"
import { useStaticQuery, graphql } from "gatsby"

import Avatar from "../Avatar"
import * as S from "./styled"


const Profile = () => {
  const {
    site: {
      siteMetadata: { title, position, description },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
          description
        }
      }
    }
  `)

  return (
    <S.ProfileWrapper>
      <S.ProfileLink
        cover 
        direction="left" 
        bg="#16202c" 
        duration={0.6}
        to="/"
      >
        <Avatar />  
        <S.ProfileAuthor>
          {title}
          <S.ProfilePosition>{position}</S.ProfilePosition>
        </S.ProfileAuthor>
      </S.ProfileLink>
      <S.ProfileDescription>{description}</S.ProfileDescription>
    </S.ProfileWrapper>
  )
}

export default Profile