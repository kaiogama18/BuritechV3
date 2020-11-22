import styled from 'styled-components';


export const Container = styled.div`
    background-color: ${props => props.backgroundColor};
    padding: 2em 0;

    .wrapper {
        flex-wrap: wrap;
        text-align: center;
        margin-right: auto; /* 1 */
        margin-left:  auto; /* 1 */
    
        max-width: 960px; /* 2 */

        padding-right: 10px; /* 3 */
        padding-left:  10px; /* 3 */

        .invisible-tablet-mobile {
            display: inherit;
        }

        @media screen and (max-width: 992px) {
            .invisible-tablet-mobile {
                display: none;
            }
        }
    }
`;