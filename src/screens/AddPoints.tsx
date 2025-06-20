import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { INavigation } from '../types/interfaces';
import InputField from '../components/UI/InputField';
import {
  useGetClientByIdQuery,
  useUpdateClientPointsMutation,
} from '../store/client/clientsApi';
import IconButton from '../components/UI/Button';

type Props = {};
type AddPointsNavigationProps = NavigationProp<INavigation, 'AddPoints'>;
type AddPointsRouteProps = RouteProp<INavigation, 'AddPoints'>;

const AddPoints = (props: Props) => {
  const { navigate } = useNavigation<AddPointsNavigationProps>();
  const { params } = useRoute<AddPointsRouteProps>();

  const [point, setPoints] = useState(0);
  const [updatePoint, { isLoading }] = useUpdateClientPointsMutation();
  const { data: client } = useGetClientByIdQuery(params.client_id);

  const handleUpdatePoints = async () => {
    if (point === 0) return;

    let total_points = client?.total_points || 0;

    const clientUpdate = {
      ...client,
      total_points: total_points + point,
    };

    try {
      await updatePoint({
        id: params.client_id,
        data: clientUpdate,
      }).unwrap();

      navigate('Home', {
        successMessage: `${point} Points added successfully! New total: ${clientUpdate.total_points} points`,
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to update points. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => navigate('Home', { successMessage: '' })} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={{ flex: 1, marginTop: 100 }}>
          <InputField
            keyboardType={'number-pad'}
            label="Points"
            value={point.toString()}
            onChangeText={(point: string) => setPoints(+point)}
          />
          <IconButton
            isLoading={isLoading}
            title="Add Points"
            onPress={handleUpdatePoints}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddPoints;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
});
