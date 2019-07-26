import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 10,
  },
});

export default function LocationCard (props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>

      <CardActionArea>
        <CardContent>
          <h1>{props.loc.name}</h1>
          <p>{`Type: ${props.loc.type}`}</p>
          <p>{`Dimension: ${props.loc.dimension}`}</p>
        </CardContent>

      </CardActionArea>
      
      <CardActions>
      <p>{`${props.loc.residents.length} residents`}</p>
      </CardActions>

    </Card>
  );
}
