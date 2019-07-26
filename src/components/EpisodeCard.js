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
  status: {
    color: 'gray',
    margin: 0,
    padding: 0,
  },
});

export default function EpisodeCard (props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>

      <CardActionArea>
        <CardContent>
          <h1>{props.ep.name}</h1>
          <h4 className={classes.status}>{props.ep.air_date}</h4>
          <p>{`Episode: ${props.ep.name} ${props.ep.episode}`}</p>
        </CardContent>

      </CardActionArea>
      
      <CardActions>
        <p>{`${props.ep.characters.length} characters`}</p>
      </CardActions>

    </Card>
  );
}
