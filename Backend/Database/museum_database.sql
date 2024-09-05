-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2024 at 07:41 PM
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
-- Database: `sih`
--

-- --------------------------------------------------------

--
-- Table structure for table `museums`
--

CREATE TABLE `museums` (
  `id` int(11) NOT NULL,
  `Museumname` varchar(100) NOT NULL,
  `city` varchar(100) NOT NULL,
  `tickets_Available` int(11) NOT NULL,
  `genre` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `keywords` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `museums`
--

INSERT INTO `museums` (`id`, `Museumname`, `city`, `tickets_Available`, `genre`, `description`, `keywords`) VALUES
(1, 'Chhatrapati Shivaji Maharaj Vastu Sanghralay Museum', 'Mumbai', 100, 'History', 'One of Mumbai\'s premier history museums, showcasing a wide range of artifacts from ancient to modern India.', 'Artifacts, Paintings, Sculptures, Textiles, Decorative Arts, Ancient Manuscripts, War Relics'),
(2, 'National Gallery of Modern Art', 'Mumbai', 100, 'Art', 'A treasure trove of modern and contemporary art from India and abroad.', 'Modern Art, Paintings, Sculptures, Installations, Contemporary Indian Art, Global Art Exhibits'),
(3, 'Dr. Bhau Daji Lad Museum', 'Mumbai', 100, 'History', 'A museum dedicated to Mumbai\'s cultural and historical heritage.', 'Artifacts, Maps, Paintings, Models, Victorian Décor, Industrial Artifacts'),
(4, 'Mani Bhavan Gandhi Museum', 'Mumbai', 100, 'History', 'The house where Mahatma Gandhi stayed during his visits to Mumbai, now converted into a museum.', 'Personal Belongings, Photographs, Letters, Books, Spinning Wheel, Political Documents'),
(5, 'RBI Monetary Museum', 'Mumbai', 100, 'Finance', 'A museum dedicated to India\'s monetary history and the evolution of currency.', 'Coins, Banknotes, Financial Instruments, Currency Printing, Rare Currency, Ancient Coins'),
(6, 'Nehru Science Centre', 'Mumbai', 100, 'Science', 'A science museum focused on promoting scientific knowledge and education.', 'Science Models, Machines, Exhibits, Interactive Displays, Space Exploration, Robotics'),
(7, 'Bombay Natural History Society (BNHS)', 'Mumbai', 100, 'Natural History', 'A center for natural history, dedicated to research and conservation of wildlife.', 'Specimens, Fossils, Animal Models, Botanical Samples, Wildlife Conservation, Endangered Species'),
(8, 'Jehangir Art Gallery', 'Mumbai', 100, 'Art', 'One of Mumbai\'s best-known art galleries, displaying a variety of modern art exhibits.', 'Modern Art, Paintings, Sculptures, Photography, Visual Arts, Abstract Art'),
(9, 'National Museum', 'Delhi', 100, 'History', 'India\'s premier museum, housing artifacts from ancient to contemporary times.', 'Antiques, Sculptures, Coins, Paintings, Textiles, Buddhist Artifacts, Ancient Seals'),
(10, 'Indira Gandhi Memorial Museum', 'Delhi', 100, 'Political History', 'A museum commemorating the life of India\'s first female prime minister, Indira Gandhi.', 'Personal Belongings, Photographs, Documents, Memorabilia, Clothing, Political Artifacts'),
(11, 'National Gallery of Modern Art', 'Delhi', 100, 'Art', 'One of India\'s premier galleries for modern art, featuring works from Indian and international artists.', 'Paintings, Sculptures, Installations, Contemporary Art, Expressionist Art, Global Exhibitions'),
(12, 'National Rail Museum', 'Delhi', 100, 'Transport', 'A museum celebrating the rich heritage of India\'s railway history.', 'Locomotives, Railway Models, Artifacts, Historic Carriages, Steam Engines, Railway Maps'),
(13, 'Gandhi Smriti', 'Delhi', 100, 'Political History', 'The site where Mahatma Gandhi spent his last days, now a museum dedicated to his life.', 'Personal Items, Letters, Photographs, Books, Gandhi’s Glasses, Assassination Site'),
(14, 'Delhi Museum', 'Delhi', 100, 'History', 'A museum dedicated to the historical significance of the city of Delhi.', 'Artifacts, Maps, Coins, Sculptures, Mughal Era Relics, Medieval Tools'),
(15, 'National Science Centre', 'Delhi', 100, 'Science', 'A major science museum dedicated to promoting science and technology.', 'Science Models, Machines, Interactive Exhibits, Educational Displays, Astronomical Exhibits, Space Science'),
(16, 'Crafts Museum', 'Delhi', 100, 'Culture', 'A museum dedicated to India\'s rich crafts tradition and artisanship.', 'Handicrafts, Textiles, Folk Art, Sculptures, Pottery, Wood Carvings'),
(17, 'Indian Museum', 'Kolkata', 100, 'History', 'India\'s largest and oldest museum, with collections of antiques, fossils, and more.', 'Antiques, Sculptures, Fossils, Coins, Paintings, Egyptian Mummies, Dinosaur Skeletons'),
(18, 'Victoria Memorial', 'Kolkata', 100, 'Colonial History', 'A grand marble building housing a museum on the British colonial period in India.', 'Paintings, Historical Documents, Sculptures, Coins, British Raj Artifacts, Colonial Architecture'),
(19, 'Science City', 'Kolkata', 100, 'Science', 'One of the largest science museums in India, featuring interactive exhibits and a planetarium.', 'Science Models, Machines, Interactive Exhibits, Planetarium Shows, Space Exploration, Virtual Reality'),
(20, 'Birla Industrial & Technological Museum', 'Kolkata', 100, 'Technology', 'A museum focusing on technology and industrial developments in India.', 'Machines, Industrial Equipment, Science Models, Exhibits, Engineering Innovations, Inventions'),
(21, 'Kolkata Museum of Modern Art (KMOMA)', 'Kolkata', 100, 'Art', 'A museum dedicated to showcasing modern and contemporary art from India.', 'Modern Art, Paintings, Installations, Photography, Mixed Media Art, Digital Art'),
(22, 'Tagore Museum', 'Kolkata', 100, 'Literary History', 'A museum celebrating the life and work of Nobel laureate Rabindranath Tagore.', 'Manuscripts, Personal Belongings, Letters, Photographs, Paintings by Tagore, Literary Works'),
(23, 'Marble Palace', 'Kolkata', 100, 'Art', 'A grand 19th-century mansion with a collection of Western art and antiques.', 'Paintings, Sculptures, Antiques, Artifacts, Western Art, Rare Statues'),
(24, 'Kalakriti Art Gallery', 'Kolkata', 100, 'Art', 'An art gallery known for promoting contemporary Indian art.', 'Modern Art, Paintings, Photography, Sculptures, Emerging Artists, Exhibitions'),
(25, 'Government Museum, Chennai', 'Chennai', 100, 'History', 'A museum focusing on archeology and numismatics, with one of the largest collections in South India.', 'Bronzes, Sculptures, Coins, Paintings, South Indian Art, Prehistoric Artifacts'),
(26, 'Birla Planetarium', 'Chennai', 100, 'Astronomy', 'A planetarium offering a virtual tour of the night sky and educational space exhibits.', 'Astronomy Shows, Space Models, Educational Exhibits, Solar System, Star Charts'),
(27, 'Railway Museum', 'Chennai', 100, 'Transport', 'A museum showcasing the rich history of rail transport in South India.', 'Locomotives, Railway Models, Artifacts, Carriages, South Indian Railway Relics'),
(28, 'The Chennai Maritime Museum', 'Chennai', 100, 'Maritime History', 'A museum focused on India\'s naval history and maritime achievements.', 'Ship Models, Naval Artifacts, Maritime Instruments, Navigation Tools, Maritime History'),
(29, 'RBI Monetary Museum', 'Chennai', 100, 'Finance', 'A museum explaining the evolution of currency in India.', 'Coins, Banknotes, Financial Artifacts, Currency Printing, Rare Coins, Monetary History'),
(30, 'The Egmore Museum', 'Chennai', 100, 'History', 'A museum known for its impressive collection of South Indian bronze artifacts and archeological treasures.', 'Bronze Sculptures, Archaeological Artifacts, Coins, Ancient Inscriptions, South Indian Pottery'),
(31, 'MGR Film City Museum', 'Chennai', 100, 'Film History', 'A museum dedicated to the Tamil cinema icon MGR and the history of Indian cinema.', 'Film Memorabilia, Costumes, Posters, Personal Belongings, Tamil Cinema Relics'),
(32, 'Appar Museum', 'Chennai', 100, 'Cultural History', 'A museum focused on the cultural history of Tamil Nadu.', 'Cultural Artifacts, Sculptures, Historical Documents, Paintings, Ancient Tamil Manuscripts');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `museums`
--
ALTER TABLE `museums`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `museums`
--
ALTER TABLE `museums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
