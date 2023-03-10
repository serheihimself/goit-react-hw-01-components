import styled from 'styled-components';

export const BoxFriends = styled.div`
  width: 320px;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 32px;
  padding: 6px;
`;
export const UlFriends = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  row-gap: 10px;
`;
export const ListFriends = styled.li`
  display: flex;
  flex-direction: flex-start;
  padding: 15px;
  align-items: center;
  box-shadow: 2px 2px 2px grey;
  background: #f0f8ff;
  border-radius: 10px;
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 20px;
  background: ${props => (props.isOnline ? 'green' : 'red')};
`;
export const FriendName = styled.p`
  margin-left: 16px;
  font-size: 22px;
  font-weight: 700;
`;
