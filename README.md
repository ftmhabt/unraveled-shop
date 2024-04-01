**Components Checklist:**

* **Product Listing:** Handles displaying a list of products with filters and sorting functionalities. 
    * Components: 
        - [ ] ProductCard: Renders information for a single product (image, name, price) with click functionality for details and adding the product to the shopping cart.
        - [x] FilterBar: Allows users to filter products based on category.
        - [x] SortBar: Provides options for sorting products (price, etc.).
* **Product Details:** Displays detailed information about a specific product, including images, description, variations, reviews, and add-to-cart functionality.
    * Components: 
        * ProductHero: Large image or carousel showcasing the product.
        * ProductInfo: Details like name, price, description.
        * SizeChart: Visual guide for sizing information.
        * Reviews: Displays customer reviews for the product.
        * AddToCart: Button and functionality for adding the product to the shopping cart.

* **Shopping Cart:** Manages the user's shopping cart, allowing them to add, remove, and update quantities of items. 
    * Components: 
        * CartItem: Shows information for each item in the cart (product image, name, quantity, price).
        * UpdateQuantity: Functionality to modify the number of items for a product.
        * RemoveCartItem: Button to remove an item from the cart.
        * CartSummary: Displays total price and checkout button.

* **Checkout:** Guide users through the checkout process, including collecting shipping information, selecting payment options, and confirming the order.
    * Components: 
        * ShippingForm: Collects user's shipping address.
        * PaymentSelection: Offers available payment methods.
        * OrderSummary: Shows details of the order and final price.
        * PlaceOrder: Button to confirm and submit the order.


* **Account:** Manages user accounts, including login, registration, order history, and profile management.
* **Search:** Allows users to search for specific products using keywords.


* **Responsive Design:** Ensure the shop adapts to different screen sizes (desktop, mobile, etc.).
* **Accessibility:** Make the shop accessible for users with disabilities.
* **Performance Optimization:** Optimize page load times and user experience.
