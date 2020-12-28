import { gql, useQuery } from '@apollo/client';
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
    fontSize: 12,
  },
});

export const ALL_PLAYERS_QUERY = gql`
  query allPlayers {
    queryPlayer {
      name 
      position
      country {
        id 
        name
        stadium 
      }
      club {
        id
        name 
        stadium
      }
      id
    }
  }
`;


export default function PlayersList() {
  const classes = useStyles();

  const { loading, error, data } = useQuery(ALL_PLAYERS_QUERY);

  if (error)
      return <div>Error loading players.</div>;
  if (loading)
      return <div>Loading</div>;

  const { queryPlayer: allPlayers } = data;
  
  return (
    <Grid style={{ marginTop: "20px" }} container spacing={2}>
      {allPlayers.map((player) => (
        <Grid item xs={4} key={player.id}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textPrimary"
                gutterBottom
              >
                {player.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {player.club.name}
              </Typography>
              <Typography variant="body2" component="p">
                Position - {player.position}
                <br />
                Country - {player.country.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}