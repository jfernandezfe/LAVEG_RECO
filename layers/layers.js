var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MANZANAS_S29_1 = new ol.format.GeoJSON();
var features_MANZANAS_S29_1 = format_MANZANAS_S29_1.readFeatures(json_MANZANAS_S29_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANZANAS_S29_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANZANAS_S29_1.addFeatures(features_MANZANAS_S29_1);
var lyr_MANZANAS_S29_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MANZANAS_S29_1, 
                style: style_MANZANAS_S29_1,
                interactive: true,
    title: 'MANZANAS_S29<br />\
    <img src="styles/legend/MANZANAS_S29_1_0.png" /> La Vega<br />\
    <img src="styles/legend/MANZANAS_S29_1_1.png" /> Recoleta<br />'
        });
var format_CENTROIDES_MZ_2 = new ol.format.GeoJSON();
var features_CENTROIDES_MZ_2 = format_CENTROIDES_MZ_2.readFeatures(json_CENTROIDES_MZ_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CENTROIDES_MZ_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROIDES_MZ_2.addFeatures(features_CENTROIDES_MZ_2);
var lyr_CENTROIDES_MZ_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CENTROIDES_MZ_2, 
                style: style_CENTROIDES_MZ_2,
                interactive: false,
                title: '<img src="styles/legend/CENTROIDES_MZ_2.png" /> CENTROIDES_MZ'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MANZANAS_S29_1.setVisible(true);lyr_CENTROIDES_MZ_2.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_MANZANAS_S29_1,lyr_CENTROIDES_MZ_2];
lyr_MANZANAS_S29_1.set('fieldAliases', {'ID_MANZA': 'ID_MANZA', 'AREA': 'AREA', 'NOM_COM': 'NOM_COM', 'CAMPAÑA': 'CAMPAÑA', 'GRILLA': 'GRILLA', });
lyr_CENTROIDES_MZ_2.set('fieldAliases', {'ID_MANZA': 'ID_MANZA', });
lyr_MANZANAS_S29_1.set('fieldImages', {'ID_MANZA': 'TextEdit', 'AREA': 'TextEdit', 'NOM_COM': 'TextEdit', 'CAMPAÑA': 'TextEdit', 'GRILLA': 'TextEdit', });
lyr_CENTROIDES_MZ_2.set('fieldImages', {'ID_MANZA': 'TextEdit', });
lyr_MANZANAS_S29_1.set('fieldLabels', {'ID_MANZA': 'inline label', 'AREA': 'inline label', 'NOM_COM': 'inline label', 'CAMPAÑA': 'inline label', 'GRILLA': 'inline label', });
lyr_CENTROIDES_MZ_2.set('fieldLabels', {'ID_MANZA': 'no label', });
lyr_CENTROIDES_MZ_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});