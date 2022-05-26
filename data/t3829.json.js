window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t3829","name":"dbo.Dim_Vendor","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Consolidated Data Warehouse","id":"d11"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Dim_Vendor"},{"field":"Type","value":"Table"},{"field":"Subject Area","value":[{"_type":"link","name":"Consolidated Data warehouse","id":"m118"}]}],"columns":[{"id":"column-35737","object_id":"column-35737","name":"VendorGUID","name_without_path":"VendorGUID","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"newid()","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35738","object_id":"column-35738","name":"VendorID","name_without_path":"VendorID","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35739","object_id":"column-35739","name":"Division","name_without_path":"Division","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35740","object_id":"column-35740","name":"BusinessUnit","name_without_path":"BusinessUnit","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"3","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35741","object_id":"column-35741","name":"EntityID","name_without_path":"EntityID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35742","object_id":"column-35742","name":"VendorName","name_without_path":"VendorName","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35743","object_id":"column-35743","name":"GLAcctNumber","name_without_path":"GLAcctNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35744","object_id":"column-35744","name":"VendorType","name_without_path":"VendorType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"25","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35745","object_id":"column-35745","name":"SubsidiaryCode","name_without_path":"SubsidiaryCode","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-35746","object_id":"column-35746","name":"ExternalVendorNum","name_without_path":"ExternalVendorNum","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"fk_Dim_Vendor_Fact_JobCost","title":"","description":"","is_user_defined":true,"foreign_table":"dbo.Fact_JobCost","foreign_table_show_schema":"dbo.Fact_JobCost","foreign_table_verbose":"dbo.Fact_JobCost","foreign_table_verbose_show_schema":"dbo.Fact_JobCost","foreign_table_object_id":"t3833","primary_table":"dbo.Dim_Vendor","primary_table_show_schema":"dbo.Dim_Vendor","primary_table_verbose":"dbo.Dim_Vendor","primary_table_verbose_show_schema":"dbo.Dim_Vendor","primary_table_object_id":"t3829","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"VendorGUID","foreign_column_path":null,"foreign_column":"VendorGUID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK__Dim_Vendor_VendorGUID","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"VendorGUID","name":"VendorGUID"}],"custom_fields":{}},{"name":"NonClusteredIndex_Divi_EntityID","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"Division","name":"Division"},{"path":null,"name_without_path":"EntityID","name":"EntityID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2022-05-17 09:48"};