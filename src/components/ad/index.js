import React from 'react'
import {Title, Button } from '..'
import { graphql, useStaticQuery } from 'gatsby'
import { Ad } from './styles'
export default () => {

	const data = useStaticQuery(graphql`
	    query {
	      mobileImage: file(relativePath: { eq: "banner/banner-mobile.webp" }) {
		base
		childImageSharp {
		  fluid(maxWidth: 1000, quality: 100) {
		    ...GatsbyImageSharpFluid_withWebp
		    ...GatsbyImageSharpFluidLimitPresentationSize
		  }
		}
	      }
	      desktopImage: file(
		relativePath: { eq: "banner/banner-ultrawide.webp" }
	      ) {
		base
		childImageSharp {
		  fluid(maxWidth: 2000, quality: 100) {
		    ...GatsbyImageSharpFluid_withWebp
		  }
		}
	      }
	      normalImage: file(relativePath: { eq: "banner/banner-widescreen.webp" }) {
		base
		childImageSharp {
		  fluid(maxWidth: 1000, quality: 100) {
		    ...GatsbyImageSharpFluid_withWebp
		  }
		}
	      }
	    }
	  `)

	  const sources = [
	    data.mobileImage.childImageSharp.fluid,
	    {
	      ...data.desktopImage.childImageSharp.fluid,
	      media: `(min-width: 1440px)`,
	    },
	    {
	      ...data.normalImage.childImageSharp.fluid,
	      media: `(min-width: 768px)`,
	    },
	  ]

	return (
		<Ad>
			<Title>Faça um orçamento</Title>
			<Button text="Enviar Email" link="/contact"/>
		</Ad>
	)
}
