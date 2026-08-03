-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 04, 2026 at 12:28 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` varchar(80) NOT NULL,
  `excerpt` varchar(300) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id`, `title`, `excerpt`, `content`, `image`, `created_at`) VALUES
(45, '10 Smart Grocery Shopping Tips That Save Time and Money', 'Simple grocery shopping habits can help you reduce expenses, minimize food waste, and make every shopping trip more efficient.', '<p class=\"PDq2pG_selectionAnchorContainer\" data-start=\"510\" data-end=\"688\">Saving money on groceries doesn\'t require major lifestyle changes. By following a few simple strategies, you can shop more efficiently, reduce waste, and stay within your budget.</p>\n<ol>\n<li data-start=\"690\" data-end=\"862\"><strong data-start=\"690\" data-end=\"718\">Make a shopping list.</strong> Plan your meals before heading to the store and write down only what you need. A list helps prevent impulse purchases and forgotten essentials.</li>\n<li data-start=\"864\" data-end=\"1017\"><strong data-start=\"864\" data-end=\"884\">Set a budget.</strong> Decide how much you want to spend before you begin shopping. Keeping a budget in mind makes it easier to prioritize necessary items.</li>\n<li data-start=\"1019\" data-end=\"1156\"><strong data-start=\"1019\" data-end=\"1044\">Don\'t shop hungry.</strong> Shopping on an empty stomach often leads to buying snacks and products that weren\'t part of your original plan.</li>\n<li data-start=\"1158\" data-end=\"1294\"><strong data-start=\"1158\" data-end=\"1185\">Compare unit prices.</strong> Larger packages aren\'t always the better deal. Check the price per kilogram or liter to find the best value.</li>\n<li data-start=\"1296\" data-end=\"1418\"><strong data-start=\"1296\" data-end=\"1324\">Buy seasonal produce.</strong> Fruits and vegetables that are in season are typically fresher, tastier, and more affordable.</li>\n<li data-start=\"1420\" data-end=\"1561\"><strong data-start=\"1420\" data-end=\"1453\">Look for weekly discounts.</strong> Many supermarkets offer promotions that can significantly reduce your grocery bill if you plan around them.</li>\n<li data-start=\"1563\" data-end=\"1678\"><strong data-start=\"1563\" data-end=\"1590\">Choose store brands.</strong> Store-brand products often provide the same quality as premium brands at a lower price.</li>\n<li data-start=\"1680\" data-end=\"1793\"><strong data-start=\"1680\" data-end=\"1704\">Avoid food waste.</strong> Purchase realistic quantities and organize your pantry so older products are used first.</li>\n<li data-start=\"1795\" data-end=\"1959\"><strong data-start=\"1795\" data-end=\"1834\">Buy in bulk when it makes sense.</strong> Items with a long shelf life, such as rice, pasta, and canned goods, can save you money when purchased in larger quantities.</li>\n<li data-start=\"1961\" data-end=\"2115\"><strong data-start=\"1961\" data-end=\"1995\">Consider grocery delivery.</strong> Ordering online helps you stick to your shopping list, compare prices easily, and save time by avoiding crowded stores.</li>\n</ol>', 'blog1.jpg', '2026-07-30 09:16:46'),
(46, 'How Fresh Ingredients Make Every Meal Better', 'Fresh ingredients don\'t just taste better—they also provide more nutrients and improve the quality of every meal you prepare.', '<p data-start=\"2109\" data-end=\"2282\">Fresh ingredients are the foundation of delicious home-cooked meals. Whether you\'re preparing breakfast, lunch, or dinner, quality products make every recipe more enjoyable.</p>\n<p data-start=\"2284\" data-end=\"2482\">Fresh fruits and vegetables are packed with vitamins, minerals, and natural flavors that processed foods simply can\'t match. They also add vibrant colors and textures that make meals more appealing.</p>\n<p data-start=\"2484\" data-end=\"2683\">When selecting fresh produce, look for bright colors, firm textures, and products without bruises or soft spots. Proper storage is equally important to keep ingredients fresh for as long as possible.</p>\n<p data-start=\"2685\" data-end=\"2912\">Fresh dairy products, meats, and bakery items also contribute significantly to the taste of your favorite dishes. Choosing quality ingredients often means using fewer seasonings because the natural flavors speak for themselves.</p>\n<p data-start=\"2914\" data-end=\"3149\">Shopping regularly for fresh groceries allows you to prepare healthier meals while reducing the need for heavily processed alternatives. Combined with a balanced diet, fresh ingredients can support better overall health and well-being.</p>\n<p data-start=\"3151\" data-end=\"3290\">Whether you\'re cooking a simple salad or a family dinner, starting with fresh ingredients is one of the easiest ways to improve every meal.</p>', 'blog2.jpg', '2026-07-30 09:17:52'),
(47, 'Why Grocery Delivery Is Becoming the Smarter Way to Shop', 'Modern grocery delivery combines convenience, speed, and reliability, making it easier than ever to shop from the comfort of your home.', '<p data-start=\"3674\" data-end=\"3880\">Busy schedules have changed the way people shop for groceries. Instead of spending hours traveling, searching for products, and waiting in checkout lines, many households now choose online grocery delivery.</p>\n<p data-start=\"3882\" data-end=\"4065\">Ordering groceries online offers several advantages. You can browse products at your own pace, compare prices, read product information, and place your order whenever it\'s convenient.</p>\n<p data-start=\"4067\" data-end=\"4241\">Delivery services also help reduce impulse purchases because you\'re more likely to stick to your shopping list. This often results in lower grocery bills and less food waste.</p>\n<p data-start=\"4243\" data-end=\"4492\">Reliable delivery ensures that fresh produce, dairy products, frozen goods, and household essentials arrive safely at your doorstep. Many services also offer same-day delivery, making it easy to receive groceries even when plans change unexpectedly.</p>\n<p data-start=\"4494\" data-end=\"4644\">Online grocery shopping is especially helpful for busy professionals, parents, seniors, and anyone who values convenience without sacrificing quality.</p>\n<p data-start=\"4646\" data-end=\"4841\" data-is-last-node=\"\" data-is-only-node=\"\">As technology continues to improve, grocery delivery is becoming an essential part of everyday life, providing a faster, easier, and more comfortable shopping experience for customers everywhere.</p>', 'blog3.jpg', '2026-07-30 09:19:21');

-- --------------------------------------------------------

--
-- Table structure for table `boroughs`
--

CREATE TABLE `boroughs` (
  `borough` varchar(30) NOT NULL,
  `order_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `boroughs`
--

INSERT INTO `boroughs` (`borough`, `order_count`) VALUES
('Barajevo', 0),
('Batajnica', 0),
('Borca', 0),
('Cukarica', 0),
('Grocka', 0),
('Lazarevac', 0),
('Mladenovac', 0),
('Novi Beograd', 0),
('Obrenovac', 0),
('Palilula', 0),
('Rakovica', 0),
('Savski venac', 0),
('Sopot', 0),
('Stari grad', 0),
('Surcin', 0),
('Vozdovac', 0),
('Vracar', 0),
('Zemun', 1),
('Zvezdara', 0);

-- --------------------------------------------------------

--
-- Table structure for table `career_applications`
--

CREATE TABLE `career_applications` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `education` varchar(30) NOT NULL,
  `employment` varchar(30) NOT NULL,
  `career` varchar(30) NOT NULL,
  `experience` varchar(20) NOT NULL,
  `license` varchar(30) DEFAULT NULL,
  `start_date` varchar(30) NOT NULL,
  `cv_file` varchar(255) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `career_applications`
--

INSERT INTO `career_applications` (`id`, `name`, `surname`, `email`, `phone`, `education`, `employment`, `career`, `experience`, `license`, `start_date`, `cv_file`, `message`) VALUES
(1, 'Luka', 'Petrovic', 'luka8petrovic8@gmail.com', '+381 61 113 2494', 'University', 'Self-Employed', 'Driver', '5+', 'Car, Motorcycle, Truck', '2026-08-11', 'cv_6a6fca611cfa62.02585545.pdf', 'I am 23 years old!');

-- --------------------------------------------------------

--
-- Table structure for table `contact_requests`
--

CREATE TABLE `contact_requests` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(60) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact_requests`
--

INSERT INTO `contact_requests` (`id`, `name`, `email`, `phone`, `message`) VALUES
(1, 'Luka Petrovic', 'luka8petrovic8@gmail.com', '+381 61 113 2494', 'This is the best website ever!!!');

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

CREATE TABLE `newsletter` (
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newsletter`
--

INSERT INTO `newsletter` (`email`) VALUES
('luka8petrovic8@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `products` text NOT NULL,
  `quantities` text NOT NULL,
  `name` varchar(30) NOT NULL,
  `surname` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `delivery_option` varchar(30) NOT NULL,
  `delivery_day` varchar(20) DEFAULT NULL,
  `delivery_time` varchar(20) DEFAULT NULL,
  `borough` varchar(30) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `location_type` varchar(20) DEFAULT NULL,
  `floor_number` int(11) DEFAULT NULL,
  `apartment_number` int(11) DEFAULT NULL,
  `office_name` varchar(50) DEFAULT NULL,
  `office_reception` varchar(20) DEFAULT NULL,
  `address_details` varchar(100) DEFAULT NULL,
  `payment` varchar(20) NOT NULL,
  `card_name` varchar(50) DEFAULT NULL,
  `card_number` varchar(20) DEFAULT NULL,
  `expiry_date` varchar(5) DEFAULT NULL,
  `cash_option` varchar(20) DEFAULT NULL,
  `cash_amount` decimal(10,2) DEFAULT NULL,
  `promo_code` varchar(50) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  `delivery_fee` decimal(10,2) DEFAULT NULL,
  `small_order_fee` decimal(10,2) DEFAULT NULL,
  `same_day_fee` decimal(10,2) DEFAULT NULL,
  `total_price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `products`, `quantities`, `name`, `surname`, `email`, `phone`, `delivery_option`, `delivery_day`, `delivery_time`, `borough`, `address`, `location_type`, `floor_number`, `apartment_number`, `office_name`, `office_reception`, `address_details`, `payment`, `card_name`, `card_number`, `expiry_date`, `cash_option`, `cash_amount`, `promo_code`, `message`, `subtotal`, `delivery_fee`, `small_order_fee`, `same_day_fee`, `total_price`) VALUES
(1, 'Cherries, Pineapple, Onion, Fanta, Jim Bean, Red Bull', '1, 1, 15, 1, 1, 1', 'Luka', 'Petrovic', 'luka8petrovic8@gmail.com', '+381 61 113 2494', 'Standard Delivery', NULL, NULL, 'Zemun', 'Cara Dusana 22', 'Apartment', 2, 18, NULL, NULL, NULL, 'Cash', NULL, NULL, NULL, 'Not Exact', 100.00, 'shop11080', 'Elevator is on the right after the entrance.', 30.36, 1.00, NULL, NULL, 31.36);

-- --------------------------------------------------------

--
-- Table structure for table `products1`
--

CREATE TABLE `products1` (
  `id` int(10) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount_price` decimal(10,2) DEFAULT NULL,
  `order_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products1`
--

INSERT INTO `products1` (`id`, `image`, `name`, `price`, `discount_price`, `order_count`) VALUES
(26, 'heineken.jpg', 'Heineken', 1.40, 0.99, 0),
(27, 'sprite.jpg', 'Sprite', 0.60, NULL, 0),
(28, 'chivas-regal.jpg', 'Chivas Regal', 49.99, 44.99, 0),
(29, 'carlsberg.jpg', 'Carlsberg', 1.20, NULL, 0),
(30, 'pepsi.jpg', 'Pepsi', 0.50, NULL, 0),
(31, 'jack-daniels.jpg', 'Jack Daniels', 29.99, NULL, 0),
(32, 'blanc.jpg', 'Blanc', 1.30, NULL, 0),
(33, 'coca-cola.jpg', 'Coca Cola', 0.50, NULL, 0),
(34, 'budweiser.jpg', 'Budweiser', 1.40, NULL, 0),
(35, 'absolut-vodka.jpg', 'Absolut Vodka', 29.99, NULL, 0),
(36, 'monster.jpg', 'Monster Energy', 0.99, NULL, 0),
(37, 'corona-extra.jpg', 'Corona', 1.99, 1.75, 0),
(38, 'jeger.jpg', 'Jägermeister', 19.99, 16.20, 0),
(39, 'fanta.jpg', 'Fanta', 0.50, NULL, 1),
(40, 'jim-beam.jpg', 'Jim Bean', 22.50, NULL, 1),
(41, 'red-bull.jpg', 'Red Bull', 1.40, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `products2`
--

CREATE TABLE `products2` (
  `id` int(10) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount_price` decimal(10,2) DEFAULT NULL,
  `order_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products2`
--

INSERT INTO `products2` (`id`, `image`, `name`, `price`, `discount_price`, `order_count`) VALUES
(1, 'banana.jpg', 'Banana', 1.50, NULL, 0),
(2, 'blueberries.jpg', 'Blueberries', 2.50, NULL, 0),
(3, 'peach.jpg', 'Peach', 1.65, NULL, 0),
(4, 'grapes.jpg', 'Grapes', 1.70, NULL, 0),
(5, 'apple.jpg', 'Apple', 1.10, NULL, 0),
(6, 'strawberries.jpg', 'Strawberries', 2.99, 2.60, 0),
(7, 'kiwi.jpg', 'Kiwi', 2.80, NULL, 0),
(8, 'lemon.jpg', 'Lemon', 0.90, NULL, 0),
(9, 'watermelon.jpg', 'Watermelon', 2.75, NULL, 0),
(10, 'orange.jpg', 'Orange', 2.10, NULL, 0),
(11, 'mango.jpg', 'Mango', 2.40, NULL, 0),
(12, 'raspberries.jpg', 'Raspberries', 1.95, NULL, 0),
(13, 'lime.jpg', 'Lime', 1.99, NULL, 0),
(14, 'pear.jpg', 'Pear', 0.80, NULL, 0),
(15, 'pineapple.jpg', 'Pineapple', 3.70, 2.99, 1),
(16, 'cherries.jpg', 'Cherries', 1.99, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `products3`
--

CREATE TABLE `products3` (
  `id` int(10) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `discount_price` decimal(10,2) DEFAULT NULL,
  `order_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products3`
--

INSERT INTO `products3` (`id`, `image`, `name`, `price`, `discount_price`, `order_count`) VALUES
(25, 'beans.jpg', 'Beans', 0.40, NULL, 0),
(26, 'beetroot.jpg', 'Beetroot', 1.60, NULL, 0),
(27, 'cabage.jpg', 'Cabbage', 0.99, 0.89, 0),
(28, 'carrot.jpg', 'Carrot', 0.75, NULL, 0),
(29, 'corn.jpg', 'Corn', 0.55, NULL, 0),
(30, 'cucumber.jpg', 'Cucumber', 1.10, NULL, 0),
(31, 'eggplant.jpg', 'Eggplant', 1.99, 1.65, 0),
(32, 'garlic.jpg', 'Garlic', 2.10, NULL, 0),
(33, 'lettuce.jpg', 'Lettuce', 1.20, NULL, 0),
(34, 'peas.jpg', 'Peas', 0.79, NULL, 0),
(35, 'potato.jpg', 'Potato', 0.39, NULL, 0),
(36, 'pumpkin.jpg', 'Pumpkin', 2.99, NULL, 0),
(37, 'red-onion.jpg', 'Red Onion', 0.49, 0.39, 0),
(38, 'red-pepper.jpg', 'Red Pepper', 2.05, 1.79, 0),
(39, 'tomato.jpg', 'Tomato', 2.25, NULL, 0),
(40, 'onion.jpg', 'Onion', 0.29, NULL, 15);

-- --------------------------------------------------------

--
-- Table structure for table `product_categories`
--

CREATE TABLE `product_categories` (
  `id` int(10) UNSIGNED NOT NULL,
  `slug` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL,
  `order_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_categories`
--

INSERT INTO `product_categories` (`id`, `slug`, `name`, `image`, `order_count`) VALUES
(1, 'products1', 'Drinks', 'drinks.png', 3),
(2, 'products2', 'Fruit', 'fruit.jpg', 2),
(3, 'products3', 'Vegetables', 'vegetables.jpg', 15);

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(10) UNSIGNED NOT NULL,
  `rating` tinyint(3) UNSIGNED DEFAULT NULL,
  `message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `rating`, `message`) VALUES
(1, 5, 'This is the best website ever!!!');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `boroughs`
--
ALTER TABLE `boroughs`
  ADD PRIMARY KEY (`borough`);

--
-- Indexes for table `career_applications`
--
ALTER TABLE `career_applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact_requests`
--
ALTER TABLE `contact_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products1`
--
ALTER TABLE `products1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products2`
--
ALTER TABLE `products2`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products3`
--
ALTER TABLE `products3`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_categories`
--
ALTER TABLE `product_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT for table `career_applications`
--
ALTER TABLE `career_applications`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `contact_requests`
--
ALTER TABLE `contact_requests`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `products1`
--
ALTER TABLE `products1`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `products2`
--
ALTER TABLE `products2`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `products3`
--
ALTER TABLE `products3`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `product_categories`
--
ALTER TABLE `product_categories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
