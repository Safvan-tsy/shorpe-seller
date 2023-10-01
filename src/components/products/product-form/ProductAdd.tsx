import { FormControlLabel, Radio, RadioGroup, TextField, FormLabel, ImageListItem, ImageList } from '@mui/material';
import './product-form.css'
import UploadSvg from "./Upload.svg?react";

const ProductAdd = () => {

  const itemData = [
    { img: "https://res.cloudinary.com/unfoldcloud/image/upload/v1683805642/blogs/blog-63f2fa7a234c1ee0220836ff-1683805639721-cover.jpg", title: "title" },
    { img: "https://res.cloudinary.com/unfoldcloud/image/upload/v1684737834/blogs/blog-63f2fa7a234c1ee0220836ff-1684737832201-cover.jpg", title: "title" },
    { img: "https://res.cloudinary.com/unfoldcloud/image/upload/v1684737248/blogs/blog-63f2fa7a234c1ee0220836ff-1684737246148-cover.jpg", title: "title" },
  ]
  const submitHandler = async (e) => {
    e.preventDefault();
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