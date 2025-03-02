import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 140,
  },
  name:{
    margin: 0,
  },
  status: {
    color: 'gray',
    margin: 0,
    padding: 0,
  },
});

export default function CharacterCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>

      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.char.image}
          title=""
        />
        <CardContent>
          <h1 className={classes.name}>{props.char.name}</h1>
          <h4 className={classes.status}>{`${props.char.species} ${props.char.status}`}</h4>
          <p>{`Location: ${props.char.location.name}`}</p>
          <p>{`Origin: ${props.char.origin.name}`}</p>
        </CardContent>

      </CardActionArea>

    </Card>
  );
}
