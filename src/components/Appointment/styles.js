import styled from 'styled-components';

export const Container = styled.View`
    margin-bottom: 15px;
    padding: 20px;
    border-radius: 4px;
    background: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Left = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const Info = styled.View`
    flex: 1;
    margin-left: 15px;
`;

export const Name = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #333;
`;

export const Time = styled.Text`
    color: #999;
    font-size: 13px;
    margin-top: 4px;
`;
