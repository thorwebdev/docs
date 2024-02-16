LOAD spatial;
LOAD httpfs;

COPY (
    SELECT
        id,
        level,
        height,
        JSON(names) AS names,
        sources[1].dataset AS primary_source,
        JSON(sources) AS sources,
        ST_GeomFromWkb(geometry) AS geometry
    FROM read_parquet('s3://overturemaps-us-west-2/release/2024-02-15-alpha.0/theme=buildings/type=*/*', filename=true, hive_partitioning=1)
    WHERE
        bbox.minx > 78.4194
        AND bbox.maxx < 78.5129
        AND bbox.miny > 17.3427
        AND bbox.maxy < 17.4192
) TO 'buildings_hyderabad.geojson'
WITH (FORMAT GDAL, DRIVER 'GeoJSON', SRS 'EPSG:4326');
