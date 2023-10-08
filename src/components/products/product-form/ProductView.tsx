import {
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  FormLabel,
  ImageListItem,
  ImageList
} from '@mui/material';
import './product-form.css'

const ProductView = () => {

  const itemData = [
    { img: "https://res.cloudinary.com/unfoldcloud/image/upload/v1683805642/blogs/blog-63f2fa7a234c1ee0220836ff-1683805639721-cover.jpg", title: "title" },
    { img: "https://res.cloudinary.com/unfoldcloud/image/upload/v1684737834/blogs/blog-63f2fa7a234c1ee0220836ff-1684737832201-cover.jpg", title: "title" },
    { img: "https://res.cloudinary.com/unfoldcloud/image/upload/v1684737248/blogs/blog-63f2fa7a234c1ee0220836ff-1684737246148-cover.jpg", title: "title" },
  ]

  return (
    <>
      <div className='product-form-container'>
        <h3>EDIT PRODUCT</h3>
        <form className='product-form'>
          <div className='form-input'>
            <div className='product-form-field'>
              <TextField
                id="outlined-textarea"
                label="Name"
                placeholder="Enter Product Name"
                value={"Example_Name"}
                className='product-form-input-field '
                disabled
              />
            </div>
            <div className='product-form-field'>
              <TextField
                id="outlined-textarea"
                label="Price"
                placeholder="Price of Product"
                value={255}
                className='product-form-input-field '
                disabled
              />
            </div>
            <div className='product-form-field'>
              <TextField
                id="outlined-textarea"
                label="Brand"
                placeholder="Brand Name"
                value={"Example_Brand"}
                className='product-form-input-field '
                disabled
              />
            </div>
            <div className='product-form-field'>
              <TextField
                id="outlined-textarea"
                label="Stock Count"
                placeholder="Count in Stock"
                value={100}
                className='product-form-input-field '
                disabled
              />
            </div>
            <div className='product-form-field'>
              <TextField
                id="outlined-textarea"
                label="Category"
                placeholder="Product Category"
                value={"Example_Category"}
                className='product-form-input-field '
                disabled
              />
            </div>
            <div className='product-form-field'>
              <FormLabel>Product Status</FormLabel>
              <RadioGroup row name="row-radio-buttons-group">
                <FormControlLabel value="published" control={<Radio />} label="Published" />
              </RadioGroup>
            </div>
            <div className='product-form-field description'>
              <TextField
                id="outlined-textarea"
                label="Description"
                placeholder="Write a Description"
                value={"Example_description"}
                className='product-form-input-field '
                disabled
              />
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
        </form>
      </div>
    </>
  )
}

export default ProductView