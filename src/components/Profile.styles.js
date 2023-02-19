import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
`;
export const CardProfile = styled.div`
  width: 320px;
  heigth: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
`;
export const CardDescription = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const TitleProfile = styled.p`
  font-weight: 700;
  font-size: 26px;
  display: flex;
  justify-content: center;
  margin: 0;
`;
export const TagProfile = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  color: grey;
  font-weight: 500;
  font-size: 18px;
`;
export const LocationProfile = styled.p`
  margin: 0;
  display: flex;
  justify-content: center;
  color: grey;
  font-weight: 500;
  font-size: 18px;
`;
export const ListProfile = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;
export const BoxList = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #f0f8ff;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 20px;
  row-gap: 5px;
`;
