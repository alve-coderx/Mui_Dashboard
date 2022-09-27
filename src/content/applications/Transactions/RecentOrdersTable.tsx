import { FC, ChangeEvent, useState } from 'react';
import { format } from 'date-fns';
import numeral from 'numeral';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  Modal
} from '@mui/material';
import { useEffect } from 'react';

import Label from 'src/components/Label';
import { CryptoOrder, CryptoOrderStatus } from 'src/models/crypto_order';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from './BulkActions';
import { useMode } from 'src/hook/useMode';
import CloseIcon from '@mui/icons-material/Close';

interface RecentOrdersTableProps {
  className?: string;
  cryptoOrders: CryptoOrder[];
}

interface Filters {
  status?: CryptoOrderStatus;
}

const getStatusLabel = (cryptoOrderStatus: CryptoOrderStatus): JSX.Element => {
  const map = {
    failed: {
      text: 'Failed',
      color: 'error'
    },
    completed: {
      text: 'Completed',
      color: 'success'
    },
    pending: {
      text: 'Pending',
      color: 'warning'
    }
  };

  const { text, color }: any = map[cryptoOrderStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  cryptoOrders: CryptoOrder[],
  filters: Filters
): CryptoOrder[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches = true;

    if (filters.status && cryptoOrder.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  cryptoOrders: CryptoOrder[],
  page: number,
  limit: number
): CryptoOrder[] => {
  return cryptoOrders.slice(page * limit, page * limit + limit);
};

const RecentOrdersTable: FC<RecentOrdersTableProps> = ({ cryptoOrders }) => {
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedCryptoOrders.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name,setName] = useState("");

  const handleDelete = (id) => {
    fetch(`https://kitecast-dev-api.azurewebsites.net/api/v1/customers/playlists/${id}`,
      {
        method: 'DELETE'
      })
      .then((res) => {
        alert("Deleted")
      })
  }
  const handleSubmit = (id) => {
    const newPlaylist = {
      "id" : id,
      "ownerId": "Fc64280c1ef74f9c9c8adb1906704362",
      "name": name,
      "isActive" : true
    }
    fetch("https://kitecast-dev-api.azurewebsites.net/api/v1/customers/playlists", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newPlaylist),
  })
      .then((res) => alert('Playlist Edited'))
  }

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handleSelectAllCryptoOrders = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedCryptoOrders(
      event.target.checked
        ? cryptoOrders.map((cryptoOrder) => cryptoOrder.id)
        : []
    );
  };

  const handleSelectOneCryptoOrder = (
    event: ChangeEvent<HTMLInputElement>,
    cryptoOrderId: string
  ): void => {
    if (!selectedCryptoOrders.includes(cryptoOrderId)) {
      setSelectedCryptoOrders((prevSelected) => [
        ...prevSelected,
        cryptoOrderId
      ]);
    } else {
      setSelectedCryptoOrders((prevSelected) =>
        prevSelected.filter((id) => id !== cryptoOrderId)
      );
    }
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCryptoOrders = applyFilters(cryptoOrders, filters);
  const paginatedCryptoOrders = applyPagination(
    filteredCryptoOrders,
    page,
    limit
  );
  const selectedSomeCryptoOrders =
    selectedCryptoOrders.length > 0 &&
    selectedCryptoOrders.length < cryptoOrders.length;
  const selectedAllCryptoOrders =
    selectedCryptoOrders.length === cryptoOrders.length;
  const theme = useTheme();
  const { darkMode } = useMode()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://kitecast-dev-api.azurewebsites.net/api/v1/customers/playlists?customerId=Fc64280c1ef74f9c9c8adb1906704362')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        console.log(data)
      })
      .catch((err) => console.log(err));
  }, []);
  const style = {
    position: 'absolute' as 'absolute',
    color: darkMode ? 'white' : 'black',
    bgcolor: darkMode ? 'black' : 'white',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Card style={{ background: !darkMode ? 'white' : '#1E1E1E', color: !darkMode ? 'black' : 'white' }}>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}

      <Divider />
      <TableContainer sx={{minHeight : "300px"}}>
        <Table>
          <TableBody>
            {products.map((cryptoOrder) => {
              const isCryptoOrderSelected = selectedCryptoOrders.includes(
                cryptoOrder.id
              );
              return (
                <TableRow
                  hover
                  key={cryptoOrder.id}
                  selected={isCryptoOrderSelected}
                >
                  <TableCell>
                    <Typography variant="body2" sx={{ color: darkMode ? 'white' : 'black' }} noWrap>
                      {cryptoOrder.name}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Edit Order" arrow>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: '#FABB18',
                          borderRadius: '50%',
                          border: '2px solid #FABB18',
                          ml: 1
                        }}
                        size="small"
                        onClick={handleOpen}
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                       
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography id="modal-modal-title" variant="h2" component="h2">
                              Edit {cryptoOrder.name}
                            </Typography>
                            <IconButton sx={{ color: darkMode ? 'white' : 'black' }} onClick={() => handleClose()}>
                              <CloseIcon />
                            </IconButton>
                          </Box>
                          <Box sx={{ display: 'flex', flexWrap: 'nowrap', mt: 5 }}>
                            <Box sx={{ px: 2 }}>
                              <label>Device Name</label><br/>
                              <input
                                style={{ background: 'none', border: '2px solid', borderColor: darkMode ? 'white' : 'black', padding: '10px', borderRadius: '10px', color: 'white' }}
                                placeholder='Device Name'
                                onChange={(e) => setName(e.target.value)}
                              />
                            </Box>
                          </Box>
                          <button onClick={() => handleSubmit(cryptoOrder.id)} style={{ marginTop: "20px", background: '#E44B23', color: 'white', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '25px', paddingRight: '25px', borderRadius: '10px' }}>Add Device</button>
                      
                      </Box>
                    </Modal>
                    <Tooltip title="Delete Order" arrow>
                      <IconButton
                        sx={{
                          '&:hover': { background: theme.colors.error.lighter },
                          color: '#E44B23',
                          borderRadius: '50%',
                          border: '2px solid #E44B23',
                          ml: 1
                        }}
                        size="small"
                        onClick={() => handleDelete(cryptoOrder.id)}
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          sx={{ color: 'white' }}
          component="div"
          count={filteredCryptoOrders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

RecentOrdersTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

RecentOrdersTable.defaultProps = {
  cryptoOrders: []
};

export default RecentOrdersTable;
