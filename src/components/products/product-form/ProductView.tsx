import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  FormLabel,
  ImageListItem,
  ImageList,
} from '@mui/material';
import './product-form.css'
import { ProductType } from '../../../types/product.types';

const ProductView = (props) => {
  const product:ProductType = props.product

  return (
    <>
      <div className='product-form-container'>
        <h3>{product.name}</h3>
        <form className='product-form'>
          <div className='form-input'>
            <div className='product-form-field'>
              <TextField
                value={product.name}
                id="outlined-textarea"
                label="Name"
                placeholder="Enter Product Name"
                multiline
                className='product-form-input-field '
                disabled
              />
            </div>
            <div className='product-form-field'>
              <TextField
                value={product.price}
                id="outlined-textarea"
                label="Price"
                placeholder="Price of Product"
                multiline
                className='product-form-input-field '
                disabled
              />
            </div>
            <div className='product-form-field'>
              <TextField
                value={product.shippingPrice}
                id="outlined-textarea"
                label="Shipping Price"
                placeholder="Shipping Price of Product"
                multiline
                className='product-form-input-field '
                disabled
              />
            </div>
            <div className='product-form-field'>
              <TextField
                value={product.brand}
                id="outlined-textarea"
                label="Brand"
                placeholder="Brand Name"
                multiline
                className='product-form-input-field '
                disabled
              />
            </div>
            <div className='product-form-field'>
              <TextField
                value={product.countInStock}
                id="outlined-textarea"
                label="Stock Count"
                placeholder="Count in Stock"
                multiline
                className='product-form-input-field '
                disabled
              />
            </div>
            <div className='product-form-field'>
              <TextField
                value={product.category}
                id="outlined-textarea"
                label="Category"
                placeholder="Product Category"
                multiline
                className='product-form-input-field '
                disabled
              />
            </div>
            <div className='product-form-field'>
              <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
              <RadioGroup
                row
                name="row-radio-buttons-group"
                value={product.status}
              >
                <FormControlLabel value={product.status} control={<Radio />} label={product.status} />
              </RadioGroup>
            </div>
            <div className='product-form-field description'>
              <TextField
                value={product.description}
                id="outlined-textarea"
                label="Description"
                placeholder="Write a Description"
                multiline
                className='product-form-input-field '
                disabled
              />
            </div>
            {product?.image?.length > 0 && (
              <div className='product-form-field'>
                <div className='img-list'>
                  <ImageList variant="masonry" cols={3} gap={8}>
                    {product.image.map((img) => (
                      <ImageListItem key={img}>
                        <img
                          srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          src={`${img}?w=248&fit=crop&auto=format`}
                          alt="Image"
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
                </div>
              </div>
            )}
            <div className='product-form-field'>
              <FormLabel id="demo-row-radio-buttons-group-label">Delivery Possibility</FormLabel>
              <RadioGroup
                row
                name="row-radio-buttons-group"
                value={product.delivery}
              >
                <FormControlLabel value={product.delivery} control={<Radio />} label={product.delivery} />
              </RadioGroup>
            </div>
            {product.delivery === "district" && (
              <div className='product-form-field'>
                 <TextField
                value={product.districts}
                id="outlined-textarea"
                label="Districts"
                multiline
                className='product-form-input-field '
                disabled
              />
              </div>
            )}
            {product.delivery === "pincodes" && (
              <div className='product-form-field'>
                 <TextField
                value={product.pincodes}
                id="outlined-textarea"
                label="Pincodes"
                multiline
                className='product-form-input-field '
                disabled
              />
              </div>
            )}
          </div>
          {/* <div className='form-foot'>
            {error && <Alert severity="error">Please fill all the fields correctly</Alert>}
          </div> */}
        </form>
      </div>

    </>
  )
}

export default ProductView