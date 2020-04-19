import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {format, parseISO} from 'date-fns';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Header from '../../components/Header';
import api from '../../services/api';

import {
  Container,
  Title,
  TitleView,
  Problem,
  ProblemText,
  Date,
  NoProblemView,
  NoProblemText,
} from './styles';

export default function ViewProblem({navigation}) {
  const delivery = navigation.getParam('delivery');
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const {data} = await api.get(`/delivery/${delivery.id}/problems`);

      console.tron.log(data);

      const problemList = data.map(p => ({
        ...p,
        createdFormattedDate: format(parseISO(p.createdAt), 'dd/MM/yyyy'),
      }));

      console.tron.log(problemList);

      setProblems(problemList);
    }
    loadProblems();
  }, [delivery.id]);

  return (
    <Container>
      <TitleView>
        <Title>{delivery.product_name}</Title>
      </TitleView>
      {problems.length === 0 ?
        (
          <NoProblemView>
            <NoProblemText>Não existem problemas cadastrados para esta entrega.</NoProblemText>
          </NoProblemView>
        ) :
        (
        <FlatList
          data={problems}
          keyExtractor={item => String(item.id)}
          initialNumToRender={50}
          renderItem={({item}) => (
            <Problem>
              <ProblemText>{item.description}</ProblemText>
              <Date>{item.createdFormattedDate}</Date>
            </Problem>
          )}
        />
        )}
    </Container>
  );
}

ViewProblem.navigationOptions = ({navigation}) => ({
  headerTitle: () => <Header title="Visualizar problemas" border={true} />,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={20} color="#000" />
    </TouchableOpacity>
  ),
});
