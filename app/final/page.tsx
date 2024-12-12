export default function Page() {
    return (
      <>
      <h1 className="my-5 text-2xl font-extrabold text-center text-pink-400">Our Skincare Products</h1>
      <form>
        <label htmlFor="product" className="ml-5 text-xl text-pink-200">Browse Products:</label>
        <input type="text" placeholder="Type here" name="product" id="product" className="m-5 text-black 
        bg-pink-200" />
        <br/>
        
<label htmlFor="product type" className="mx-5 text-xl text-pink-200">Select Product Type:</label>
<select class="select select-primary" name="type" id="type">
  <option value="cream">Cream</option>
  <option value="serum">Serum</option>
  <option value="cleanser">Cleanser</option>
  <option value="eye cream">Eye Cream</option>
</select>
<label htmlFor="skin type" className="mx-5 text-xl text-pink-200">Select Skin Type:</label>
<select class="select select-primary" name="type" id="type">
  <option value="sensitive skin">Sensitive Skin</option>
  <option value="oily skin">Oily Skin</option>
  <option value="dry skin">Dry Skin</option>
  <option value="combination skin">Combination Skin</option>
</select>
<label htmlFor="skin concern" className="mx-5 text-xl text-pink-200">Select Skin Concern:</label>
<select class="select select-primary" name="concern" id="concern">
  <option value="redness">Redness</option>
  <option value="lack of hydration">Lack of Hydration</option>
  <option value="signs of aging">Signs of Aging</option>
  <option value="large pores">Large Pores</option>
</select>
<br />

<div className="ml-5 mt-5 text-xl text-pink-200">Retail Size:
<br/>
  <input type="radio" id="1 oz" class="radio radio-primary" name="size" value="1 oz" />
  <label htmlFor="1 oz"> 1 oz</label><br />
  <input type="radio" id="4 oz" class="radio radio-primary" name="size" value="4 oz" />
  <label htmlFor="4 oz"> 4 oz</label><br />
  <input type="radio" id="8 oz" class="radio radio-primary" name="size" value="8 oz" />
  <label htmlFor="8 oz"> 8 oz</label>
  </div>
  <br />

  <label htmlFor="skin concern" className="mx-5 text-xl text-pink-200">Choose Product Rating:</label>
<select class="select select-primary" name="rating" id="rating">
  <option value="below">Below 3 Stars</option>
  <option value="over">Over 3 Stars</option>
  <option value="full">5 stars</option>
</select>

<h3 className="ml-5 mt-5 text-xl text-pink-200">Key Ingredients:</h3>
  <div className="ml-5 text-xl text-pink-200">
  <input type="checkbox" id="Ingredients" class="checkbox checkbox-primary" name="Ingredients" value="Niacinamide" />
  <label htmlFor="niacinamide"> Niacinamide</label><br />
  <input type="checkbox" id="Ingredients" class="checkbox checkbox-primary" name="Ingredients" value="Panthenol" />
  <label htmlFor="panthenol"> Panthenol</label><br />
  <input type="checkbox" id="Ingredients" class="checkbox checkbox-primary" name="Ingredients" value="Hyaluronic Acid" />
  <label htmlFor="hyaluronic"> Hyaluronic Acid</label><br />
  <input type="checkbox" id="Ingredients" class="checkbox checkbox-primary" name="Ingredients" value="Retinol" />
  <label htmlFor="retinol"> Retinol</label><br />
  <input type="checkbox" id="Ingredients" class="checkbox checkbox-primary" name="Ingredients" value="Vitamin C" />
  <label htmlFor="vitamin"> Vitamin C</label><br />
  <input type="checkbox" id="Ingredients" class="checkbox checkbox-primary" name="Ingredients" value="Ceramides" />
  <label htmlFor="ceramides"> Ceramides</label><br />
  </div>
<br />

<button className="ml-8 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-ml px-5 py-2.5 text-center me-2 mb-2">Submit</button>

      </form>
      </>
    );
  }