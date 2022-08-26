import styled from 'styled-components';

const ProductStyle = styled.div`
  display: flex;
  position: relative;
  background-color: white;
  flex-direction: column;
  padding: 1.5rem;
  img {
    width: 100%;
    cursor: pointer;
  }
`;

module.exports = {
  ProductStyle,
};
