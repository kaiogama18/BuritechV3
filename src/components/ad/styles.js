import styled from 'styled-components'

export const Ad = styled.div`
	//background: linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(255,255,255,0.4) 100%), url();
	.bc-banner {
	      position:relative;
	      border:1px solid #ccc;
	      overflow:hidden;

  

	}
	   
	   .bc-banner-header {
	      background-color:#fff;
	      position:relative;
	      z-index:2;
	      padding:1rem;
	   }
	   
	   .bc-banner-body {
	      position:relative;
	      z-index:2;
	      padding:2rem;
		

	   }
	   .bc-banner .bc-banner-cover {
	      position:absolute;
	      opacity: 0.3;
	      filter: alpha(opacity=30); /* For IE8 and earlier */
	      object-fit: cover;
	      top:0;
	      z-index:1;
	      height: 100%;
	      width: 100%;
	   }
`;
