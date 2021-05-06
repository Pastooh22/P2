import React, { FC } from 'react';
import { View, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Colors from '../../constans/Colors';
import Header from '../../components/Header';

const WelcomeText = styled.Text`
    margin: 20px 20px
    font-size: 16px;
    color: ${Colors.black};
`;

const CustomImage = styled.Image`
    width: 100px;
    height: 100px;
    margin-top: 10px;
    margin-left: 21px;
    margin-right: 35px;
    borderRadius: 50px;
`;

interface IHomeProps { }

const Home: FC<IHomeProps> = (props) => {
    return ( 
        <ScrollView stickyHeaderIndices={[0]}>
        <Header title="RecipeApp" />
        <View>
            <WelcomeText>
            </WelcomeText>
        </View>
        </ScrollView>
    );
};

export default Home;