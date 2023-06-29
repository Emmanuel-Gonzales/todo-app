import { createStyles, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    testAlign: 'right',
    width: '100%',
    margin: 'auto',
    position: 'absolute',
    bottom: '0',
  }
}));

function Footer(){
  const { classes } = useStyles();

  return(
    <footer
    data-testid="footer" 
    className={classes.footer}>
      <Text>© Emmanuel Gonzales 2023</Text>
    </footer>
  )
}

export default Footer