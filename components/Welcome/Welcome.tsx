import { Title, Text } from '@mantine/core';
import { IRANSansBlack } from '@IranSansFonts';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title
        className={`${classes.title}${IRANSansBlack.className}`}
        ta="center"
        mt={100}
        dir="rtl"
      >
        به جعبه ابزار{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          برتر{' '}
        </Text>
        خوش آمدید.
      </Title>
    </>
  );
}
