import styled from 'styled-components';

export const StatisticBox = styled.div`
  width: 320px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: #ffffff;
  margin-bottom: 32px;
  overflow: hidden;
`;

export const UlStats = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  justify-content: space-between;
  margin: 0;
  padding: 0;
`;

export const ListStats = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100%;
  background: #f0f8ff;
`;
export const ListDescription = styled.p`
  font-size: 24px;
  font-weight: 900;
`;
