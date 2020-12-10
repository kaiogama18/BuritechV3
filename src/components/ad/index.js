import React from 'react'
import {Button, Title, Container, Item } from '..'
import { graphql, useStaticQuery } from 'gatsby'
import { Ad } from './styles'
import BackgroundImage from 'gatsby-background-image'


export default () => {

	const data = useStaticQuery(graphql`
	    query {
	      mobileImage: file(relativePath: { eq: "ad/mobile.webp" }) {
		base
		childImageSharp {
		  fluid(maxWidth: 1000, quality: 100) {
		    ...GatsbyImageSharpFluid_withWebp
		    ...GatsbyImageSharpFluidLimitPresentationSize
		  }
		}
	      }
	      desktopImage: file(
		relativePath: { eq: "ad/ultrawide.webp" }
	      ) {
		base
		childImageSharp {
		  fluid(maxWidth: 2000, quality: 100) {
		    ...GatsbyImageSharpFluid_withWebp
		  }
		}
	      }
	      normalImage: file(relativePath: { eq: "ad/widescreen.webp" }) {
		base
		childImageSharp {
		  fluid(maxWidth: 1000, quality: 100) {
		    ...GatsbyImageSharpFluid_withWebp
		  }
		}
	      }
	    }
	  `)

	  const sources = [ data.mobileImage.childImageSharp.fluid,
	    { ...data.desktopImage.childImageSharp.fluid,
	      media: `(min-width: 1440px)`,
	    },
	    {
	      ...data.normalImage.childImageSharp.fluid,
	      media: `(min-width: 768px)`,
	    },
	  ]

	return (
		<Ad img={sources}>
		<BackgroundImage Tag="section" fluid={sources}>
		<Container vertical> 
		<Item flex>
				<Title normal>Faça um orçamento</Title> 
				<p>Nos conte sobre sua ideia e iremos te ajudar a torná-la realidade</p>
				<Button text="Enviar Email" link="/contact"/>
	</Item>
		</Container>
		</BackgroundImage>
		</Ad>
	)
}
				      
			
