import * as React from 'react';
import { connect } from 'react-redux';
import { Paper, Grid, Hidden } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: '100vh',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

const ResumeEditor: React.FC = () => {
  const [visible] = React.useState(false);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Hidden smDown={visible}>
          <Grid item sm={12} md={6}>
            <Paper className={classes.paper}>
              resume-editor
            </Paper>
          </Grid>
        </Hidden>
        <Hidden smDown={!visible}>
          <Grid item sm={12} md={6}>
            <Paper className={classes.paper}>
              resume-preview
            </Paper>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  editor: state.editor,
});

export default connect(mapStateToProps)(ResumeEditor);
