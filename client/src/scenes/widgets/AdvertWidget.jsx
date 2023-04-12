import {Typography, useTheme} from '@mui/material';
import FlexBetween from '../../components/FlexBetween';
import WidgetWrapper from '../../components/WidgetWrapper';

const AdvertWidget = () => {
  const {palette} = useTheme();
  const dark = palette.neutral.main;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant='h5' fontWeight='500'>
          Sponsored
        </Typography>
        <Typography color={medium}>
          Create Ad
        </Typography>
        <img
          width='100%'
          height='auto'
          style={{borderRadius: '0.75rem', margin: '0.75rem 0'}}
          src='http://localhost:3001/assets/info4.jpeg'
          alt='advert'
        />
        <FlexBetween>
          <Typography color={main}>MikaCosmetics</Typography>
          <Typography color={medium}>mikacosmetics.com</Typography>
        </FlexBetween>
      </FlexBetween>
      <Typography color={medium} m='0.5rem 0'>
        Your pathway to stunning and immaculate beauty.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;