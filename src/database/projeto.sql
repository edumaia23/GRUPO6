-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema projeto
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `projeto` ;

-- -----------------------------------------------------
-- Schema projeto
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `projeto` DEFAULT CHARACTER SET utf8 ;
USE `projeto` ;

-- -----------------------------------------------------
-- Table `projeto`.`aeroportos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projeto`.`aeroportos` ;

CREATE TABLE IF NOT EXISTS `projeto`.`aeroportos` (
  `id` INT NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `sigla` VARCHAR(4) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projeto`.`companhias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projeto`.`companhias` ;

CREATE TABLE IF NOT EXISTS `projeto`.`companhias` (
  `id` INT NOT NULL,
  `nome` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projeto`.`voos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projeto`.`voos` ;

CREATE TABLE IF NOT EXISTS `projeto`.`voos` (
  `id` INT NOT NULL,
  `data_hora_partida` DATETIME NOT NULL,
  `data_hora_chegada` DATETIME NOT NULL,
  `aeroportos_destino_id` INT NOT NULL,
  `aeroportos_origem_id` INT NOT NULL,
  `companhias_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_passagens_aeroportos_idx` (`aeroportos_destino_id` ASC),
  INDEX `fk_passagens_aeroportos1_idx` (`aeroportos_origem_id` ASC),
  INDEX `fk_voos_companhias1_idx` (`companhias_id` ASC) ,
  CONSTRAINT `fk_passagens_aeroportos`
    FOREIGN KEY (`aeroportos_destino_id`)
    REFERENCES `projeto`.`aeroportos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_passagens_aeroportos1`
    FOREIGN KEY (`aeroportos_origem_id`)
    REFERENCES `projeto`.`aeroportos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_voos_companhias1`
    FOREIGN KEY (`companhias_id`)
    REFERENCES `projeto`.`companhias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projeto`.`clientes`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projeto`.`clientes` ;

CREATE TABLE IF NOT EXISTS `projeto`.`clientes` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projeto`.`pedidos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projeto`.`pedidos` ;

CREATE TABLE IF NOT EXISTS `projeto`.`pedidos` (
  `id` INT NOT NULL,
  `clientes_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pedidos_clientes1_idx` (`clientes_id` ASC) ,
  CONSTRAINT `fk_pedidos_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `projeto`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projeto`.`passageiros`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projeto`.`passageiros` ;

CREATE TABLE IF NOT EXISTS `projeto`.`passageiros` (
  `id` INT NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `projeto`.`passagens`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `projeto`.`passagens` ;

CREATE TABLE IF NOT EXISTS `projeto`.`passagens` (
  `id` INT NOT NULL,
  `preco` DECIMAL(7,2) NOT NULL,
  `assento` VARCHAR(4) NOT NULL,
  `classe` INT NOT NULL,
  `voos_id` INT NOT NULL,
  `pedidos_id` INT NULL,
  `passageiro_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_passagens_voos1_idx` (`voos_id` ASC) ,
  INDEX `fk_passagens_pedidos1_idx` (`pedidos_id` ASC) ,
  INDEX `fk_passagens_passageiro1_idx` (`passageiro_id` ASC) ,
  CONSTRAINT `fk_passagens_voos1`
    FOREIGN KEY (`voos_id`)
    REFERENCES `projeto`.`voos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_passagens_pedidos1`
    FOREIGN KEY (`pedidos_id`)
    REFERENCES `projeto`.`pedidos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_passagens_passageiro1`
    FOREIGN KEY (`passageiro_id`)
    REFERENCES `projeto`.`passageiros` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
