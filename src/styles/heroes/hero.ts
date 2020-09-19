import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background: #1b1146;
  display: flex;
  max-width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;

  > section {
    overflow: hidden;
    width: 1400px;
    margin: 0 auto;

    > img {
      margin: 0 auto;
    }
  }
`;

export const HeaderData = styled.div`
  position: absolute;
  flex: 1;
  display: flex;
  flex-direction: column;

  h1 {
    color: #fff;
  }
`;
