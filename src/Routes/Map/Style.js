import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  mapRoot: {
    padding: theme.spacing(1),
    height: '100%',
    width: '100%',
    display: 'grid',
    [theme.breakpoints.down('sm')]: {
      gridTemplateRows: 'auto 1fr'
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '35% 65%',
      gridGap: theme.spacing(1)
    }
  },
  googleMap: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center'
  },

  // location auto complete
  locationSelection: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: '30% 70%',
    alignItems: 'center',
    marginBottom: theme.spacing(1)
  },
  locationBtnGroup: {
    display: 'flex',
    justifyContent: 'center',
    paddingRight: theme.spacing(0.5)
  },
  locationFilterAutoComplete: {
    marginBottom: theme.spacing(0.5)
  },

  // location filter section
  distanceSlider: {
    paddingLeft: theme.spacing(0.25),
    paddingRight: theme.spacing(0.25)
  },
  sliderTitle: {
    display: 'flex'
  },
  sliderTitleCaption: {
    paddingLeft: theme.spacing(0.5)
  },
  sliderSearchOptions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1),
    alignItems: 'center'
  },

  // map markers
  centerMarker: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  },
  markerDetail: {
    position: 'absolute',
    transform: 'translate(-50%, -140%)',
    background: 'white',
    border: '1px solid #ccc',
    boxShadow: '0 0 1px 1px #ccc',
    borderRadius: '3px',
    width: '8rem',
    fontSize: '0.5rem',
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 'calc(50% - 6px)',
      width: 0,
      height: 0,
      borderLeft: '6px solid transparent',
      borderRight: '6px solid transparent',
      borderTop: '6px solid white'
    }
  },
  markerName: {
    fontSize: '1.3em',
    textAlign: 'center'
  },
  markerRatingRoot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  markerRatingStar: {
    fontSize: '1rem'
  },
  markerPrice: {
    textAlign: 'center'
  },

  // detail modal
  detailModalBackDrop: {
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: 1,
      background: 'black',
      opacity: '0.5',
      transition: 'opacity 0.3s'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  detailModalRoot: {
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      top: '20%',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 2,
      background: theme.palette.background.default,
      borderRadius: '5px',
      border: '1px solid black',
      transition: 'transform 0.5s',
      overflowY: 'scroll'
    }
  },
  detailModalCloseBtn: {
    position: 'sticky',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      background: '#ccc',
      cursor: 'pointer',
      borderRadius: '5px 5px 0 0'
    }
  },
  detailModalDial: {
    position: 'sticky',
    bottom: theme.spacing(1),
    marginLeft: '75%'
  },
  detailModalCard: {
    display: 'Grid',
    gridTemplateColumns: '35% 65%'
  },
  cardImage: {
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '150% 100%',
    backgroundPosition: 'center'
  },
  cardDescriptions: {
    width: '100%',
    padding: theme.spacing(0.5),
    borderBottom: '1px solid #ccc'
  },

  //individualModal
  indModalRoot: {
    height: '70%',
    minHeight: '40rem',
    width: '90%',
    background: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 1px 1px #ccc',
    borderRadius: '5px',
    overflowY: 'auto',
    position: 'relative'
  },
  indModalCloseBtn: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    zIndex: 1
  },
  indModalDetails: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  indModalGalleryRoot: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    borderRadius: '5px 5px 0 0'
  },
  indThumb: {
    width: '100%',
    height: '100%',
    flexWrap: 'nowrap'
  },
  // title
  indTitle: {
    paddingTop: theme.spacing(1)
  },
  indName: {
    textAlign: 'center'
  }
}));

export default useStyles;
