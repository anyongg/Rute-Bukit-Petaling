ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([103100.446802, 9679889.305923, 103302.549339, 9680060.281556]);
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
var format_garis_1 = new ol.format.GeoJSON();
var features_garis_1 = format_garis_1.readFeatures(json_garis_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_garis_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_garis_1.addFeatures(features_garis_1);
var lyr_garis_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_garis_1, 
                style: style_garis_1,
                interactive: true,
                title: '<img src="styles/legend/garis_1.png" /> garis'
            });
var format_Export_Output_2 = new ol.format.GeoJSON();
var features_Export_Output_2 = format_Export_Output_2.readFeatures(json_Export_Output_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Export_Output_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Export_Output_2.addFeatures(features_Export_Output_2);cluster_Export_Output_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Export_Output_2
});
var lyr_Export_Output_2 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Export_Output_2, 
                style: style_Export_Output_2,
                interactive: true,
                title: '<img src="styles/legend/Export_Output_2.png" /> Export_Output'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_garis_1.setVisible(true);lyr_Export_Output_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_garis_1,lyr_Export_Output_2];
lyr_garis_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'TimeSpan': 'TimeSpan', 'TimeStamp': 'TimeStamp', 'BeginTime': 'BeginTime', 'EndTime': 'EndTime', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_Export_Output_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'TimeSpan': 'TimeSpan', 'TimeStamp': 'TimeStamp', 'BeginTime': 'BeginTime', 'EndTime': 'EndTime', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_garis_1.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Clamped': '', 'Extruded': '', 'TimeSpan': '', 'TimeStamp': '', 'BeginTime': '', 'EndTime': '', 'Snippet': '', 'PopupInfo': '', 'Shape_Leng': '', });
lyr_Export_Output_2.set('fieldImages', {'OID_': 'Hidden', 'Name': 'TextEdit', 'FolderPath': 'Hidden', 'SymbolID': 'Hidden', 'AltMode': 'Hidden', 'Base': 'Hidden', 'TimeSpan': 'Hidden', 'TimeStamp': 'Hidden', 'BeginTime': 'Hidden', 'EndTime': 'Hidden', 'Snippet': 'Hidden', 'PopupInfo': 'TextEdit', 'HasLabel': 'Hidden', 'LabelID': 'Hidden', });
lyr_garis_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'TimeSpan': 'no label', 'TimeStamp': 'no label', 'BeginTime': 'no label', 'EndTime': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_Export_Output_2.set('fieldLabels', {'Name': 'header label', 'PopupInfo': 'inline label', });
lyr_Export_Output_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});