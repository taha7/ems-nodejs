SELECT  `Client`.`id` 
       ,`conferences`.`id`                               AS `conferences.id` 
       ,`conferences`.`name`                             AS `conferences.name` 
       ,`conferences->conference_client`.`client_id`     AS `conferences.conference_client.client_id` 
       ,`conferences->conference_client`.`conference_id` AS `conferences.conference_client.conference_id` 
       ,`conferences->conference_client`.`status`        AS `conferences.conference_client.status` 
       ,`client_type`.`id`                               AS `client_type.id` 
       ,`client_type`.`name`                             AS `client_type.name` 
       ,`company`.`id`                                   AS `company.id` 
       ,`company`.`name`                                 AS `company.name` 
       ,`company`.`activation`                           AS `company.activation` 
       ,`company`.`sector_id`                            AS `company.sector_id` 
       ,`company`.`country_id`                           AS `company.country_id` 
       ,`company`.`created_at`                           AS `company.created_at` 
       ,`company`.`updated_at`                           AS `company.updated_at`
FROM `clients` AS `Client`
INNER JOIN 
( `conference_clients` AS `conferences->conference_client`
	INNER JOIN `conferences` AS `conferences`
	ON `conferences`.`id` = `conferences->conference_client`.`conference_id` 
)
ON `Client`.`id` = `conferences->conference_client`.`client_id` AND `conferences`.`id` = 37
INNER JOIN `client_types` AS `client_type`
ON `Client`.`client_type_id` = `client_type`.`id` AND `client_type`.`type` = 2
LEFT OUTER JOIN `companies` AS `company`
ON `Client`.`company_id` = `company`.`id`