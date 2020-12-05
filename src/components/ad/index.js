import React from 'react'
import Img from 'gatsby-image'
import {Carousel} from 'react-bootstrap'
import {Title, Button } from '..'
import { graphql, useStaticQuery } from 'gatsby'

export default () => {
	
	const data = useStaticQuery(graphql`query { image: file(relativePath: { eq: "banner/banner-widescreen.webp"}) {
		childImageSharp { fluid(maxWidth: 1000, quality: 100) { ...GatsbyImageSharpFluid_withWebp }
				}
			}
		}
	`)
	
	return (
		<Carousel indicators={false} controls={false}>
			<Carousel.Item>	
				<Img fluid={data.image.childImageSharp.fluid}/>
				<Carousel.Caption>
					<Title normal>Faça um orçamento </Title>
					<Button text='Enviar Email' link='/contact' />
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}
