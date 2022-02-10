-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : jeu. 10 fév. 2022 à 09:30
-- Version du serveur : 5.7.33
-- Version de PHP : 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `audio`
--

-- --------------------------------------------------------

--
-- Structure de la table `album`
--

CREATE TABLE `album` (
  `id` int(11) NOT NULL,
  `artiste` varchar(250) NOT NULL,
  `image` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `album`
--

INSERT INTO `album` (`id`, `artiste`, `image`) VALUES
(1, 'Hans ZIMMER', 'HansZimmerTours2017-Live.jpg'),
(2, 'Lofi', 'Lofi.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `chanson`
--

CREATE TABLE `chanson` (
  `id` int(11) NOT NULL,
  `album_id` int(11) NOT NULL,
  `titre` varchar(250) NOT NULL,
  `recup` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `chanson`
--

INSERT INTO `chanson` (`id`, `album_id`, `titre`, `recup`) VALUES
(1, 2, 'Flovry x tender spring  First Heartbreak', 'Flovry x tender spring  First Heartbreak.mp3'),
(2, 2, 'HM Surf - Tulips', 'HM Surf - Tulips.mp3'),
(5, 2, 'lesspeople  Dimes', 'lesspeople  Dimes.mp3'),
(7, 1, 'Hans Zimmer Live Prague Gladiator Elysium Now We Are Free 2017', 'Hans Zimmer Live Prague Gladiator Elysium Now We Are Free 2017.mp3'),
(9, 1, 'Hans Zimmer - Remember (From The Lion KingAudio Only)', 'Hans Zimmer - Remember (From The Lion KingAudio Only).mp3'),
(10, 1, 'Pirates of the Caribbean - The Black Pearl', '03 Pirates of the Caribbean - The Black Pearl.mp3');

-- --------------------------------------------------------

--
-- Structure de la table `commentaire`
--

CREATE TABLE `commentaire` (
  `id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `message` varchar(250) NOT NULL,
  `dateHour` datetime(6) NOT NULL,
  `chanson_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `chanson`
--
ALTER TABLE `chanson`
  ADD PRIMARY KEY (`id`),
  ADD KEY `album_id` (`album_id`);

--
-- Index pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD KEY `user_id` (`users_id`),
  ADD KEY `chanson_id` (`chanson_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `album`
--
ALTER TABLE `album`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `chanson`
--
ALTER TABLE `chanson`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `chanson`
--
ALTER TABLE `chanson`
  ADD CONSTRAINT `album_id` FOREIGN KEY (`album_id`) REFERENCES `album` (`id`);

--
-- Contraintes pour la table `commentaire`
--
ALTER TABLE `commentaire`
  ADD CONSTRAINT `chanson_id` FOREIGN KEY (`chanson_id`) REFERENCES `chanson` (`id`),
  ADD CONSTRAINT `user_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;