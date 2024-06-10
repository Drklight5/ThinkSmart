use defaultdb;





-- TRIGGER
-- Crear trigger para la tabla user
DELIMITER $$
CREATE TRIGGER after_user_delete
AFTER DELETE ON user
FOR EACH ROW
BEGIN
    INSERT INTO users_deleted (idUser, nombre, apellido)
    VALUES (OLD.idUser, OLD.nombre, OLD.apellido);
END$$
DELIMITER ;

-- Crear trigger para la tabla admin
DELIMITER $$
CREATE TRIGGER after_admin_delete
AFTER DELETE ON admin
FOR EACH ROW
BEGIN
    INSERT INTO admins_deleted (idAdmin, nombre, apellido)
    VALUES (OLD.idAdmin, OLD.nombre, OLD.apellido);
END$$
DELIMITER ;
