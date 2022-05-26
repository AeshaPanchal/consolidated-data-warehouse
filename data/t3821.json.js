window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3821","name":"dbo.DIM_ReportGroup","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Consolidated Data Warehouse","id":"d11"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"DIM_ReportGroup"},{"field":"Type","value":"Table"},{"field":"Subject Area","value":[{"_type":"link","name":"Consolidated Data warehouse","id":"m118"}]}],"columns":[{"id":"column-35663","object_id":"column-35663","name":"ReportGroupGUID","name_without_path":"ReportGroupGUID","description":"server global unique identifier assigned.","is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35664","object_id":"column-35664","name":"ReportCode","name_without_path":"ReportCode","description":"Type of entities can be reported.  Accept service code, cutomer acct#","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35665","object_id":"column-35665","name":"ReportCategory","name_without_path":"ReportCategory","description":"Categories of report consists of freight type, services, customers  Air,CITI,FedEx INF,FedEx SameDay,Ground,Other,SPL,SR Technic","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35666","object_id":"column-35666","name":"ReportDOM_INTL","name_without_path":"ReportDOM_INTL","description":"Mainly to categorize international and domestic shipments but also accept services, and customers.  CITI,Domestic - Other,Domestic Air,Domestic Ground,FedEx INF,FedEx SameDay,International - Other,International Air,International Ground,SPL,SR Technic","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35667","object_id":"column-35667","name":"ReportGroupMappingGUID","name_without_path":"ReportGroupMappingGUID","description":"server global unique identifier assigned to parent of dim_reportGroup","is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_fact_job2_dim_ReportGroup","title":null,"description":null,"is_user_defined":false,"foreign_table":"dbo.fact_job","foreign_table_show_schema":"dbo.fact_job","foreign_table_verbose":"dbo.fact_job","foreign_table_verbose_show_schema":"dbo.fact_job","foreign_table_object_id":"t3831","primary_table":"dbo.DIM_ReportGroup","primary_table_show_schema":"dbo.DIM_ReportGroup","primary_table_verbose":"dbo.DIM_ReportGroup","primary_table_verbose_show_schema":"dbo.DIM_ReportGroup","primary_table_object_id":"t3821","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ReportGroupGUID","foreign_column_path":null,"foreign_column":"ReportGroupGUID"}],"custom_fields":{}}],"unique_keys":[{"name":"DIM_ReportGroupPK","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ReportGroupGUID","name":"ReportGroupGUID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2022-05-17 09:48"};