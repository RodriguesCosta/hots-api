import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  background-color: #12092c;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#0e0520),
    to(#1b1146)
  );
  background: linear-gradient(0deg, #0e0520, #1b1146);
  display: flex;
  max-width: 100vw;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;

  > section {
    width: 100vw;
    position: relative;

    > img {
      width: 100vw;
    }
  }

  > .row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const HeaderData = styled.div`
  top: 15vh;
  left: 20px;
  position: absolute;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 50vw;

  > .row {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  h1 {
    color: #fff;
    font-size: 3rem;
    line-height: 1.2em;
    text-shadow: 0 0 16px #009cff;
    margin: 0;
    text-transform: uppercase;
  }

  span {
    font-size: 24px;
    line-height: 1.2em;
    color: #6cf;
    text-transform: uppercase;
  }

  p {
    color: #8eb1bc;
    line-height: 1.4em;
    font-size: 18px;
    margin-left: 20px;
  }
`;

export const HeroType = styled.div`
  display: flex;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  background-color: #12092c;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#0e0520),
    to(#1b1146)
  );
  background: linear-gradient(0deg, #0e0520, #1b1146);
`;
