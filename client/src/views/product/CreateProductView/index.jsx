import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import { Formik } from 'formik';

import Page from 'src/components/commons/Page';
import PageTitle from 'src/components/PageTitle';

import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

import { PRODUCT_SIZES, ROUTES } from 'src/constants';
import SidebarProductList from 'src/components/SidebarProductList';

const CreateProductView = () => {
  const [size, setSize] = useState(PRODUCT_SIZES[4]);
  const classes = useStyles();
  return (
    <Page title="Buat Produk">
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={8}>
            <PageTitle
              title="Buat Produk"
              subtitle="Membuat produk terlebih dahulu akan mempermudah saat membuat pesanan"
              // icon={<AddCircleOutline />}
            />
            <Box
              display="flex"
              flexDirection="column"
              width="100%"
              justifyContent="center"
            >
              <Formik
                initialValues={{
                  title: '',
                  body: '',
                  price: '',
                  size: '',
                  stock: '',
                }}
                validationSchema={Yup.object().shape({
                  title: Yup.string().max(255).required('Judul harus di isi'),
                  price: Yup.number().required('Harga harus di isi'),
                  stock: Yup.number().required('Stok harus di isi'),
                })}
                onSubmit={() => {
                  navigate(ROUTES.DASHBOARD, { replace: true });
                }}
              >
                {({
                  errors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          error={Boolean(touched.title && errors.title)}
                          fullWidth
                          helperText={touched.title && errors.title}
                          label="Nama produk"
                          margin="normal"
                          name="title"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.title}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          error={Boolean(touched.price && errors.price)}
                          fullWidth
                          helperText={touched.price && errors.price}
                          label="Harga"
                          margin="normal"
                          name="price"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.price}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          error={Boolean(touched.stock && errors.stock)}
                          fullWidth
                          helperText={touched.stock && errors.stock}
                          label="Stok"
                          margin="normal"
                          name="stock"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.stock}
                          variant="outlined"
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        {/* <FormControl fullWidth margin="normal">
                          <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            value={size}
                            onChange={handleChange}
                            fullWidth
                            input={<BootstrapInput />}
                          >
                            {PRODUCT_SIZES.map((val) => (
                              <MenuItem key={val} value={val}>
                                {val}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl> */}
                        <FormControl
                          fullWidth
                          margin="normal"
                          variant="outlined"
                          className={classes.formControl}
                        >
                          <InputLabel id="demo-simple-select-outlined-label">
                            Ukuran
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            label="Ukuran"
                          >
                            {PRODUCT_SIZES.map((val) => (
                              <MenuItem key={val} value={val}>
                                {val}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                    </Grid>
                    <TextField
                      error={Boolean(touched.body && errors.body)}
                      fullWidth
                      multiline
                      rows={4}
                      helperText={touched.body && errors.body}
                      label="Deskripsi produk"
                      margin="normal"
                      name="body"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      value={values.body}
                      variant="outlined"
                    />
                    <Box my={2}>
                      <Button
                        color="primary"
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                      >
                        Simpan Produk
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
            </Box>
          </Grid>
          <Grid item xs={12} lg={4}>
            <SidebarProductList />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const BootstrapInput = withStyles((theme) => ({
  root: {
    // 'label + &': {
    //   marginTop: theme.spacing(3),
    // },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

export default CreateProductView;
