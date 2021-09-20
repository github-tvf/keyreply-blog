import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
// import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';
import moment from 'moment'
import swal from 'sweetalert2';
//define actions
import {
  getBlogByUID,
  deleteBlog
} from '../modules/actions'
const useStyles = makeStyles({
  table: {
  },
});
const paggingStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));
function TablePaginationActions(props) {
  const classes = paggingStyles();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}
TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};
const AdminView = ({ currentUser,admin, getBlogByUID,deleteBlog,  }) => {
  useEffect(() => {
    if (currentUser) {
      getBlogByUID(currentUser.user.id)
    }
  }, []);
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, admin.listBlog.length - page * rowsPerPage);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleDeletePost = (post) => {
    swal({
      title: 'Xác nhận',
      html: '<p className="gift-confirm">Are you sure to delete "<b>' + post.title + '</b>"?</p>',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      animation: false,
      customClass: 'custom-modal has-btn pop-red animated zoomIn',
      showCancelButton: true,
    }).then((isConfirm) => {
      if (isConfirm.value) {
        deleteBlog(post.id)
      }
    });
  };
  //delete post

  return (
    <>
      <div className="tvf-container">
        <h4 className="adm-title">Quản lý bài viết</h4>
        <div className="group-btn">
          <NavLink className="btn btn--tvf" to={'/admin/post'}>Create Pos</NavLink>
        </div>
        <div className="table-result">
          {
            admin.listBlog.length > 0 &&
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="custom pagination table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell align="center">Thumb</TableCell>
                    <TableCell align="center">Title</TableCell>
                    <TableCell align="center">Category</TableCell>
                    <TableCell align="center">Created date</TableCell>
                    <TableCell align="center">ACtion</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? admin.listBlog.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : admin.listBlog
                  ).map((row, idx) => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {idx + 1}
                      </TableCell>
                      <TableCell align="center"><img className="img-thumb" src={row.thumbnail} alt="" /> </TableCell>
                      <TableCell align="center">{row.title}</TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">{moment(row.createdAt).format('MM-DD-YYYY')}</TableCell>
                      <TableCell align="center">
                        <NavLink to={'/admin/post?id='+row.id}>Edit</NavLink>
                        &nbsp;&nbsp;&nbsp;
                        <a href="#" onClick={e => {
                          e.preventDefault(),
                            handleDeletePost(row)
                        }}>Delete</a>
                      </TableCell>
                    </TableRow>
                  ))
                  }
                </TableBody>

                <TableBody>
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                      colSpan={3}
                      count={admin.listBlog.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                      }}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          }
        </div>
      </div>
    </>
  );
};

export default AdminView;
