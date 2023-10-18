import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  FormLabel,
  ImageListItem,
  ImageList,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  ListItemText,
  OutlinedInput,
  SelectChangeEvent,
  Checkbox,
  Alert
} from '@mui/material';
import { useAutocomplete, } from '@mui/base/useAutocomplete';
import CheckIcon from '@mui/icons-material/Check';
import { pincodeList } from '../../../assets/klPincodes'
import './product-form.css'
import UploadSvg from "./Upload.svg?react";
import React, { useState } from 'react';
import {
  pinOptionType,
  InputWrapper,
  Label,
  Listbox,
  Root,
  StyledTag
} from './Pincode';
import { ProductAddForm } from '../../../types/product.types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const districtlist = [
  'Alappuzha',
  'Eranakulam',
  'Idukki',
  'Kannur',
  'Kasarkode',
  'Kollam',
  'Kottayam',
  'Kozhikode',
  'Malappuram',
  'Palakkad',
  'Pathanamthitta',
  'Thiruvananthapuram',
  'Thrishur',
  'Wayanad'
]

const ProductAdd = () => {
  const [districts, setDistricts] = React.useState<string[]>([]);
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [countInStock, setCountInStock] = useState('')
  const [price, setPrice] = useState('')
  const [error, setError] = useState(false);
  const [productStatus, setProductStatus] = useState("published");
  const [delivery, setDelivery] = useState("state");


  const itemData = [
    { img: "https://res.cloudinary.com/unfoldcloud/image/upload/v1683805642/blogs/blog-63f2fa7a234c1ee0220836ff-1683805639721-cover.jpg", title: "title" },
    { img: "https://res.cloudinary.com/unfoldcloud/image/upload/v1684737834/blogs/blog-63f2fa7a234c1ee0220836ff-1684737832201-cover.jpg", title: "title" },
    { img: "https://res.cloudinary.com/unfoldcloud/image/upload/v1684737248/blogs/blog-63f2fa7a234c1ee0220836ff-1684737246148-cover.jpg", title: "title" },
  ]

  const handleDistrictChange = (event: SelectChangeEvent<typeof districts>) => {
    const {
      target: { value },
    } = event;
    setDistricts(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: 'customized-hook-demo',
    defaultValue: [pincodeList[1]],
    multiple: true,
    options: pincodeList,
    getOptionLabel: (option) => option.title,
  });


  const validateForm = () => {
    const parsedPrice = parseFloat(price);
    const parsedCountInStock = parseInt(countInStock);

    if (
      !name ||
      isNaN(parsedPrice) || // Check if price is NaN
      !brand ||
      !category ||
      !description ||
      isNaN(parsedCountInStock) ||
      !productStatus
    ) {
      setError(true);
      return false;
    } else if (delivery === "district" && districts.length === 0) {
      setError(true);
      return false;
    } else if (delivery === "pincodes" && (!value || value.length === 0)) {
      setError(true);
      return false;
    } else {
      setError(false);
      return true;
    }
  };


  const submitHandler = (e) => {
    e.preventDefault();

    if (validateForm()) {
      let formData: ProductAddForm = {
        name,
        price: parseFloat(price),
        brand,
        category,
        description,
        countInStock: parseInt(countInStock),
        productStatus,
      };

      if (delivery === "district") {
        formData.districts = districts;
      } else if (delivery === "pincodes") {
        formData.pincodes = value;
      }

      console.log(formData)


    }
  };

  return (
    <>
      <div className='product-form-container'>
        <h3>ADD PRODUCT</h3>
        <form onSubmit={submitHandler} className='product-form'>
          <div className='form-input'>
            <div className='product-form-field'>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="outlined-textarea"
                label="Name"
                placeholder="Enter Product Name"
                multiline
                className='product-form-input-field '
              />
            </div>
            <div className='product-form-field'>
              <TextField
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                id="outlined-textarea"
                label="Price"
                placeholder="Price of Product"
                multiline
                className='product-form-input-field '
              />
            </div>
            <div className='product-form-field'>
              <TextField
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                id="outlined-textarea"
                label="Brand"
                placeholder="Brand Name"
                multiline
                className='product-form-input-field '
              />
            </div>
            <div className='product-form-field'>
              <TextField
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
                id="outlined-textarea"
                label="Stock Count"
                placeholder="Count in Stock"
                multiline
                className='product-form-input-field '
              />
            </div>
            <div className='product-form-field'>
              <TextField
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id="outlined-textarea"
                label="Category"
                placeholder="Product Category"
                multiline
                className='product-form-input-field '
              />
            </div>
            <div className='product-form-field'>
              <FormLabel id="demo-row-radio-buttons-group-label">Product Status</FormLabel>
              <RadioGroup
                row
                name="row-radio-buttons-group"
                value={productStatus}
                onChange={(e) => setProductStatus(e.target.value)}
              >
                <FormControlLabel value="published" control={<Radio />} label="Published" />
                <FormControlLabel value="draft" control={<Radio />} label="Draft" />
                <FormControlLabel value="stockout" control={<Radio />} label="Out of Stock" />
              </RadioGroup>
            </div>
            <div className='product-form-field description'>
              <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="outlined-textarea"
                label="Description"
                placeholder="Write a Description"
                multiline
                className='product-form-input-field '
              />
            </div>
            <div className='product-form-field '>
              <FormLabel>Upload Product Images</FormLabel>
              <div className="image-upload-container">
                <div className="upload-input-div">
                  <input className="upload-input" name="file" type="file" />
                  <UploadSvg />
                </div>
              </div>
            </div>
            <div className='product-form-field '>
              <div className='img-list'>
                <ImageList variant="masonry" cols={3} gap={8}>
                  {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                      <img
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        alt={item.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </div>
            <div className='product-form-field'>
              <FormLabel id="demo-row-radio-buttons-group-label">Delivery Possibility</FormLabel>
              <RadioGroup
                row
                name="row-radio-buttons-group"
                value={delivery}
                onChange={(e) => setDelivery(e.target.value)}
              >
                <FormControlLabel value="state" control={<Radio />} label="State" />
                <FormControlLabel value="district" control={<Radio />} label="Select Districts" />
                <FormControlLabel value="pincodes" control={<Radio />} label="Select Pincodes" />
              </RadioGroup>
            </div>
            {delivery === "district" && (
              <div className='product-form-field'>
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">District</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={districts}
                    onChange={handleDistrictChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {districtlist.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={districts.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            )}
            {delivery === "pincodes" && (
              <div className='product-form-field'>
                <Root>
                  <div {...getRootProps()}>
                    <Label {...getInputLabelProps()}>Pincode</Label>
                    <InputWrapper ref={setAnchorEl} className={focused ? 'focused' : ''}>
                      {value.map((option: pinOptionType, index: number) => (
                        <StyledTag label={option.title} {...getTagProps({ index })} />
                      ))}
                      <input {...getInputProps()} />
                    </InputWrapper>
                  </div>
                  {groupedOptions.length > 0 ? (
                    <Listbox {...getListboxProps()}>
                      {(groupedOptions as typeof pincodeList).map((option, index) => (
                        <li {...getOptionProps({ option, index })}>
                          <span>{option.title}</span>
                          <CheckIcon fontSize="small" />
                        </li>
                      ))}
                    </Listbox>
                  ) : null}
                </Root>
              </div>
            )
            }
          </div>
          <div className='form-foot'>
            {error && <Alert severity="error">Please fill all the fields correctly</Alert>}
            <button className='btn'>Submit</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default ProductAdd