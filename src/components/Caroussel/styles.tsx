import styled from 'styled-components'

export const Container = styled.div`


  .swiper-button-next {
    display: flex;
    top: 50%;
    right: 3px;
    padding: 8px 20px;
    background-color: #26292b;
    border-radius: 50px;
    box-shadow: 0px 0px 10px 0px #e0a6bb;
    cursor: pointer;
  }

  .swiper-button-prev {
    display: flex;
    top: 50%;
    left: 3px;
    padding: 8px 20px;
    background-color: #26292b;
    border-radius: 50px;
    box-shadow: 0px 0px 10px 0px #dd1d62;
    cursor: pointer;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 14px;
    font-weight: bold;
    color: #fff;
  }

  .swiper-pagination-bullet {
    background-color: #2e2e2e50;
    border: 2px solid #ec1415;
    padding: 3px;

    //Mobile
    @media (max-width: 768px) {
      padding: 2px;
    }
  }

  .swiper-pagination-bullet-active {
    background-color: #ec1415;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: -10px;
  }
`