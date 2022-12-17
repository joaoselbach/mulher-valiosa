import styled from "styled-components";
import { layout, typography } from "styled-system";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 60px 0px;
`;

export const Title = styled.span`
  font-size: 58px;
  font-weight: bold;
  color: #2e2e2e;
  text-align: center;
  ${typography}
`;

export const TitleSpan = styled.span`
  background: linear-gradient(286.21deg, #c7005e 0%, #3da7db 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${typography}
`;

export const Description = styled.span`
  font-size: 18px;
  line-height: 35px;
  margin-top: 10px;
  max-width: 800px;
  margin-top: 10px;
  color: #2e2e2e;
  text-align: center;
  ${typography}
  ${layout}
`;

export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  margin: 80px 0px; 

  iframe {
    z-index: 2;
    border-radius: 20px;
    margin: 0px 20px;

    @media (max-width: 768px) {
      height: 400px
    }
  }
`;

export const BackgroundBlur = styled.div`
  position: absolute;
  width: 1015px;
  height: 610px;
  border-radius: 20px;
  background: linear-gradient(90deg, #3ea9dd 0%, #d01a70 100%);
  filter: blur(10px);

  @media (max-width: 1028px) {
    width: 96%;
  }

  @media (max-width: 768px) {
    width: 94%;
    height: 405px
  }
`;

export const RequestButton = styled.button`
  padding: 18px 28px;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(180deg, #d01b71 0%, #ae175f 100%);
  text-shadow: 0px 0px 12px #cececee2;
  transition: all ease 0.3s;
  cursor: pointer;

  :hover {
    transform: scale(1.03);
    box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.3);
  }
`;
