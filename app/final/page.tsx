export default function Page() {
    return (
      <>
      <h1 className="my-5 text-2xl font-extrabold text-center text-pink-400">Our Skincare Products</h1>
      <form>
        <label htmlFor="product" className="ml-5 text-xl text-pink-200">Browse Products:</label>
        <input type="text" name="product" id="product" className="m-5 text-black 
        bg-pink-200" />
        <br/>
        
<label htmlFor="product type" className="mx-5 text-xl text-pink-200">Select Product Type:</label>
<select name="type" id="type">
  <option value="cream">Cream</option>
  <option value="serum">Serum</option>
  <option value="cleanser">Cleanser</option>
  <option value="eye cream">Eye Cream</option>
</select>
<label htmlFor="skin type" className="mx-5 text-xl text-pink-200">Select Skin Type:</label>
<select name="type" id="type">
  <option value="sensitive skin">Sensitive Skin</option>
  <option value="oily skin">Oily Skin</option>
  <option value="dry skin">Dry Skin</option>
  <option value="combination skin">Combination Skin</option>
</select>
<label htmlFor="skin concern" className="mx-5 text-xl text-pink-200">Select Skin Concern:</label>
<select name="concern" id="concern">
  <option value="redness">Redness</option>
  <option value="lack of hydration">Lack of Hydration</option>
  <option value="signs of aging">Signs of Aging</option>
  <option value="large pores">Large Pores</option>
</select>
<br />

<div className="ml-5 mt-5 text-xl text-pink-200">Choose Your Product Size:
<br/>
  <input type="radio" id="1 oz" name="fav_language" value="1 oz" />
  <label htmlFor="1 oz">1 oz</label><br />
  <input type="radio" id="4 oz" name="fav_language" value="4 oz" />
  <label htmlFor="4 oz">4 oz</label><br />
  <input type="radio" id="8 oz" name="fav_language" value="8 oz" />
  <label htmlFor="8 oz">8 oz</label>
  </div>

  <div className="ml-5 mt-5 text-xl text-pink-200">
  <input type="checkbox" id="coupon" name="coupon" value="Coupon" />
  <label htmlFor="coupon"> I have a coupon</label><br />
  <input type="checkbox" id="member" name="member" value="Member" />
  <label htmlFor="member"> I am a member</label><br />
  </div>
<br />
        <button className="ml-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" type="submit">Save</button>
      </form>
      </>
    );
  }