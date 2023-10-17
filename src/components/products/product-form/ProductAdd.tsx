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
  Checkbox
} from '@mui/material';
import './product-form.css'
import UploadSvg from "./Upload.svg?react";
import React from 'react';

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
const pincodelist = [
  '673573 - parappanpoyil',
]
const ProductAdd = () => {
  const [districts, setDistricts] = React.useState<string[]>([]);
  const [pincodes, setPincodes] = React.useState<string[]>([]);


  const itemData = [
    { img: "https://res.cloudinary.com/unfoldcloud/image/upload/v1683805642/blogs/blog-63f2fa7a234c1ee0220836ff-1683805639721-cover.jpg", title: "title" },
    { img: "https://res.cloudinary.com/unfoldcloud/image/upload/v1684737834/blogs/blog-63f2fa7a234c1ee0220836ff-1684737832201-cover.jpg", title: "title" },
    { img: "https://res.cloudinary.com/unfoldcloud/image/upload/v1684737248/blogs/blog-63f2fa7a234c1ee0220836ff-1684737246148-cover.jpg", title: "title" },
  ]
  const submitHandler = async (e) => {
    e.preventDefault();
  };

  const handleDistrictChange = (event: SelectChangeEvent<typeof districts>) => {
    const {
      target: { value },
    } = event;
    setDistricts(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handlepincodeChange = (event: SelectChangeEvent<typeof pincodes>) => {
    const {
      target: { value },
    } = event;
    setPincodes(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <>
      <div className='product-form-container'>
        <h3>ADD PRODUCT</h3>
        <form onSubmit={submitHandler} className='product-form'>
          <div className='form-input'>
            <div className='product-form-field'>
              <TextField
                id="outlined-textarea"
                label="Name"
                placeholder="Enter Product Name"
                multiline
                className='product-form-input-field '
              />
            </div>
            <div className='product-form-field'>
              <TextField
                id="outlined-textarea"
                label="Price"
                placeholder="Price of Product"
                multiline
                className='product-form-input-field '
              />
            </div>
            <div className='product-form-field'>
              <TextField
                id="outlined-textarea"
                label="Brand"
                placeholder="Brand Name"
                multiline
                className='product-form-input-field '
              />
            </div>
            <div className='product-form-field'>
              <TextField
                id="outlined-textarea"
                label="Stock Count"
                placeholder="Count in Stock"
                multiline
                className='product-form-input-field '
              />
            </div>
            <div className='product-form-field'>
              <TextField
                id="outlined-textarea"
                label="Category"
                placeholder="Product Category"
                multiline
                className='product-form-input-field '
              />
            </div>
            <div className='product-form-field'>
              <FormLabel id="demo-row-radio-buttons-group-label">Product Status</FormLabel>
              <RadioGroup row name="row-radio-buttons-group">
                <FormControlLabel value="published" control={<Radio />} label="Published" />
                <FormControlLabel value="draft" control={<Radio />} label="Draft" />
                <FormControlLabel value="stockout" control={<Radio />} label="Out of Stock" />
              </RadioGroup>
            </div>
            <div className='product-form-field description'>
              <TextField
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
              <RadioGroup row name="row-radio-buttons-group">
                <FormControlLabel value="state" control={<Radio />} label="State" />
                <FormControlLabel value="district" control={<Radio />} label="Select Districts" />
                <FormControlLabel value="pincodes" control={<Radio />} label="Select Pincodes" />
              </RadioGroup>
            </div>
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
            <div className='product-form-field'>
              <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-checkbox-label">Pincodes</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={pincodes}
                  onChange={handlepincodeChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {pincodelist.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={pincodes.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

          </div>
          <div >
            <button className='btn'>Submit</button>
          </div>
        </form>
      </div>

    </>
  )
}

export default ProductAdd