import { svgIconClasses } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { richTreeViewClasses, treeItemClasses } from '@mui/x-tree-view';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView'; 
import { pxToRem } from './utils'; 

const StyledMuiTreeView = styled(RichTreeView)(({ theme }) => ({
  [`&.${richTreeViewClasses.root}`]: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    border: `1px solid ${alpha(theme.palette.divider, 0.68)}`,

    [`& .${treeItemClasses.root}`]: {
      paddingLeft: theme.spacing(1), 

      [`& .${treeItemClasses.content}`]: {
        borderRadius: 0,
        position: 'relative',
        paddingLeft: theme.spacing(4),

        '&:before': {
          content: '" "',
          display: 'block',
          borderLeft: `1px dashed ${theme.palette.divider}`,
          width: pxToRem(1),
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
        },

        '&:after': {
          content: '" "',
          display: 'block',
          width: theme.spacing(3),
          height: pxToRem(1),
          position: 'absolute',
          left: 0,
          top: '50%',
          borderBottom: `1px dashed ${theme.palette.divider}`,
        },

        [`&.${treeItemClasses.focused}, &.${treeItemClasses.selected}`]: {
          backgroundColor: 'transparent',

          '&:hover': {
            backgroundColor: theme.palette.action.hoverOpacity,
          },
        },

        [`&.${treeItemClasses.expanded}`]: {
          [`& .${treeItemClasses.iconContainer}`]: {
            [`& .${svgIconClasses.root}`]: {
              fill: theme.palette.info.main,
            },
          },
        },

        [`&.${treeItemClasses.selected}`]: {
          [`& .${treeItemClasses.iconContainer}`]: {
            '&:before': {
              borderColor: theme.palette.primary.main,
            },
          },
        },

        [`& .${treeItemClasses.label}`]: {
          fontSize: pxToRem(14),
        },
      },

      [`& .${treeItemClasses.iconContainer}`]: {
        position: 'absolute',
        top: '50%',
        left: 0,
        transform: 'translate(-50%, -50%)',
        zIndex: 1,

        [`& .${svgIconClasses.root}`]: {
          width: pxToRem(16),
          height: pxToRem(16),
          backgroundColor: theme.palette.background.paper,
          fill: theme.palette.divider,
        },

        '&:before': {
          content: '" "',
          display: 'block',
          backgroundColor: theme.palette.background.paper,
          borderRadius: theme.shape.borderRadius * 99,
          border: `1px solid ${theme.palette.divider}`,
          width: theme.spacing(1),
          height: theme.spacing(1),
          position: 'absolute',
          left: theme.spacing(2.6),
          top: '50%',
          transform: 'translate(100%, -50%)',
          zIndex: 1,
        },
      },

      [`& .${treeItemClasses.groupTransition}`]: {
        paddingLeft: theme.spacing(2),
        borderLeft: `1px dashed ${theme.palette.divider}`,
      },

      '&:last-child': {
        [`& .${treeItemClasses.content}`]: {
          '&:before': {
            height: '75%',
            transform: 'translateY(-40%)',
          },
        },

        [`& .${treeItemClasses.groupTransition}`]: {
          borderLeft: 'none',
        },
      },
    },
  },
}));

export default StyledMuiTreeView;
