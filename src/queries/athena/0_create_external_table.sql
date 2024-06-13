CREATE EXTERNAL TABLE `v2024_06_13_beta_0`(
  `id` string,
  `geometry` binary,
  `bbox` struct<xmin:float,xmax:float,ymin:float,ymax:float>,
  `admin_level` int,
  `is_maritime` boolean,
  `geopol_display` string,
  `version` int,
  `update_time` string,
  `sources` array<struct<property:string,dataset:string,record_id:string,confidence:double>>,
  `subtype` string,
  `locality_type` string,
  `wikidata` string,
  `context_id` string,
  `population` int,
  `iso_country_code_alpha_2` string,
  `iso_sub_country_code` string,
  `default_language` string,
  `driving_side` string,
  `names` struct<primary:string,common:map<string,string>,rules:array<struct<variant:string,language:string,"value":string,"between":array<double>,side:string>>>,
  `locality_id` string,
  `class` string,
  `surface` string,
  `level` int,
  `source_tags` map<string,string>,
  `elevation` int,
  `cartography` struct<min_zoom:int,max_zoom:int,sort_key:int>,
  `is_salt` boolean,
  `is_intermittent` boolean,
  `has_parts` boolean,
  `height` double,
  `num_floors` int,
  `min_height` double,
  `min_floor` int,
  `facade_color` string,
  `facade_material` string,
  `roof_material` string,
  `roof_shape` string,
  `roof_direction` double,
  `roof_orientation` string,
  `roof_color` string,
  `roof_height` double,
  `building_id` string,
  `divisions` array<string>,
  `is_disputed` boolean,
  `perspectives` struct<mode:string,countries:array<string>>,
  `local_type` map<string,string>,
  `country` string,
  `region` string,
  `hierarchies` array<array<struct<division_id:string,subtype:string,name:string>>>,
  `parent_division_id` string,
  `norms` struct<driving_side:string>,
  `capital_division_ids` array<string>,
  `division_id` string,
  `categories` struct<main:string,alternate:array<string>>,
  `confidence` double,
  `websites` array<string>,
  `socials` array<string>,
  `emails` array<string>,
  `phones` array<string>,
  `brand` struct<wikidata:string,names:struct<primary:string,common:map<string,string>,rules:array<struct<variant:string,language:string,"value":string,"between":array<double>,side:string>>>>,
  `addresses` array<struct<freeform:string,locality:string,postcode:string,region:string,country:string>>,
  `connector_ids` array<string>,
  `access_restrictions` array<struct<access_type:string,"when":struct<during:string,heading:string,using:array<string>,recognized:array<string>,mode:array<string>,vehicle:array<struct<dimension:string,comparison:string,"value":double,unit:string>>>,"between":array<double>>>,
  `level_rules` array<struct<"value":int,"between":array<double>>>,
  `prohibited_transitions` array<struct<sequence:array<struct<connector_id:string,segment_id:string>>,final_heading:string,"when":struct<heading:string,during:string,using:array<string>,recognized:array<string>,mode:array<string>,vehicle:array<struct<dimension:string,comparison:string,"value":double,unit:string>>>,"between":array<double>>>,
  `road_surface` array<struct<"value":string,"between":array<double>>>,
  `road_flags` array<struct<"value"s:array<string>,"between":array<double>>>,
  `speed_limits` array<struct<min_speed:struct<"value":int,unit:string>,max_speed:struct<"value":int,unit:string>,is_max_speed_variable:boolean,"when":struct<during:string,heading:string,using:array<string>,recognized:array<string>,mode:array<string>,vehicle:array<struct<dimension:string,comparison:string,"value":double,unit:string>>>,"between":array<double>>>,
  `width_rules` array<struct<"value":double,"between":array<double>>>,
  `road` string)
PARTITIONED BY (
  `theme` string,
  `type` string)
ROW FORMAT SERDE
  'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe'
STORED AS INPUTFORMAT
  'org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat'
OUTPUTFORMAT
  'org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat'
LOCATION
  's3://overturemaps-us-west-2/release/2024-06-13-beta.0/'
TBLPROPERTIES (
  'averageRecordSize'='248',
  'classification'='parquet',
  'compressionType'='none',
  'exclusions'='[\"s3://overturemaps-us-west-2/release/2023-04-02-alpha/**\"]',
  'objectCount'='16',
  'partition_filtering.enabled'='true',
  'recordCount'='91479076',
  'sizeKey'='11960428494',
  'typeOfData'='file')