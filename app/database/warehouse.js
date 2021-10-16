// The WAREHOUSE is our literal warehouse containing all of our Products

// Generate A New Shipment of Products to add to warehouse(database).
// This will eventually be a database in the future

// Create objects holding product data
var pkg = {};
const products = {
    fruits: ["apple", "banana", "orange", "grape", "pear", "tangerine", "nectarine", "peach", "strawberry", 
        "blueberry", "raspberry", "blackberry", "plum", "kiwi", "pineapple", "dragonfruit", "coconut"],
    vegetables: ["lettuce", "lettuce bundle", "purple lettuce", "celery", "carrot", "garlic", "onion", "corn", 
        "celery", "asparagus", "avocado", "brocolli", "cauliflower", "cabbage", "brussel sprout", "spinach"],
    meats: ["beef", "pork", "lamb", "sausage", "goat", "chicken", "turkey", "frozen fish", "crab", 
        "lobster", "oyster", "poke", "fresh fish", "ground beef", "ground turkey", "pulled pork"],
    grains: ["corn on cob", "oatmeal", "white rice", "brown rice", "jasmin rice", "mexican rice", 
        "organic rice", "pre-made white rice", "wheat flour", "whole wheat flour", "dried corn"],
    dairy: ["whole milk", "2% fat-free milk", "fat-free milk", "almond milk", "greek yogurt", "yogurt", 
        "fat-free yogurt", "bleu cheese", "mozzerela cheese", "provolone cheese", "cheddar cheese", 
        "pepper jack cheese", "shredded mozzerela cheese", "shredded provolone cheese", "shredded cheddar cheese", 
        "shredded pepper jack cheese", "butter", "cream", "creamer"],
    eggs: ["fresh farm eggs", "eggs", "white eggs", "brown eggs", "giant eggs", "tiny eggs"],
    canned: ["chicken noodle soup", "white beans", "pinto beans", "brown beans", "black beans", "red beans", 
        "azuki beans", "green chiles mild", "green chiles spicy", "green enchilada sauce", "red enchilada sauce", 
        "corn beef", "cream of mushroon", "cream of chicken", "heavy cream", "tuna", "chicken"],
    candy: ["starburst", "starburst tropical", "starburst berries", "starburst gummies", "starburst", 
        "skittles", "m&m", "mamba", "airheads", "airhead gummies", "skittles gummies", "reeses", "peanut butter m&m",
        "hi-chew", "rabbit candy", "popsicle", "lollipop", "tootsie roll", "snickers", "5-star"]
}
const quantities = {
    count: ["ct"],
    piece: ["pc", "pcs"],
}
const weights = {
    ounce: ["oz"],
    pound: ["lb", "lbs"],
    quartz: ["qt", "qts"],
    gallon: ["gl"],
}
const sizes = {
    mini: ["mini"],
    small: ["small"],
    medium: ["medium"],
    regular: ["regular"],
    large: ["large"],
    king: ["king"],

};

// Add product data into a single packaged object
pkg.products = products;
pkg.quantities = quantities;
pkg.weights = weights;
pkg.sizes = sizes;

// Export the package for use in other places
export default pkg;