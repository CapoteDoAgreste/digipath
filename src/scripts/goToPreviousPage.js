import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {BackHandler} from 'react-native';

export default function GoToPreviousPage() {
  const navigate = useNavigation();

  useEffect(() => {
    const handleBackButtonClick = () => {
      navigate.goBack();
      return true; // Return true to prevent default back behavior
    };

    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);

    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  });
}
